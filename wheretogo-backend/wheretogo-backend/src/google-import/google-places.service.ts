import { Injectable, Logger } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class GooglePlacesService {
  private readonly logger = new Logger(GooglePlacesService.name);
  private readonly apiKey = process.env.GOOGLE_API_KEY;
  private readonly textSearchUrl =
    'https://maps.googleapis.com/maps/api/place/textsearch/json';
  private readonly detailsUrl =
    'https://maps.googleapis.com/maps/api/place/details/json';
  private readonly photoUrl =
    'https://maps.googleapis.com/maps/api/place/photo';
  // Places API (New) — required for photos; the legacy photo endpoint is retired.
  private readonly placesV1Url = 'https://places.googleapis.com/v1/places';

  // Text Search (cu paginare)
  async textSearchAll(query: string) {
    const results: any[] = [];
    let nextPageToken: string | undefined = undefined;
    const paramsBase: any = {
      query,
      key: this.apiKey,
      language: 'ro',
      region: 'md',
    };

    do {
      const params = { ...paramsBase };
      if (nextPageToken) params.pagetoken = nextPageToken;

      const res = await axios.get(this.textSearchUrl, { params });
      if (res.data.results) results.push(...res.data.results);

      nextPageToken = res.data.next_page_token;
      if (nextPageToken) {
        // Wait per Google requirement
        await new Promise((r) => setTimeout(r, 2000));
      }
    } while (nextPageToken);

    this.logger.log(
      `TextSearch found ${results.length} results for "${query}"`,
    );
    return results;
  }

  // Place Details with field mask to reduce cost
  async getPlaceDetails(placeId: string) {
    const fields = [
      'place_id',
      'name',
      'geometry',
      'formatted_address',
      'formatted_phone_number',
      'website',
      'rating',
      'user_ratings_total',
      'opening_hours',
      'photo',
      'url',
      'types',
    ].join(',');

    const res = await axios.get(this.detailsUrl, {
      params: { place_id: placeId, key: this.apiKey, fields, language: 'ro' },
    });

    return res.data.result;
  }

  // Legacy photo URL builder. DEPRECATED: the legacy endpoint now returns
  // HTTP 400. Kept only for reference; use getPhotoUrls() instead.
  buildPhotoUrl(photoReference: string, maxWidth = 1200) {
    const url = `${this.photoUrl}?photoreference=${photoReference}&maxwidth=${maxWidth}&key=${this.apiKey}`;
    return url;
  }

  /**
   * Fetch working photo URLs via the Places API (New). Photo resource names
   * from this API are required by the v1 media endpoint; legacy
   * photo_reference values are not accepted.
   */
  async getPhotoUrls(
    placeId: string,
    maxWidth = 1200,
    max = 10,
  ): Promise<string[]> {
    try {
      const res = await axios.get(`${this.placesV1Url}/${placeId}`, {
        headers: {
          'X-Goog-Api-Key': this.apiKey,
          'X-Goog-FieldMask': 'photos',
        },
      });

      const photos: any[] = res.data?.photos ?? [];
      return photos
        .map((photo) => photo?.name) // "places/<id>/photos/<ref>"
        .filter((name): name is string => typeof name === 'string' && !!name)
        .slice(0, max)
        .map(
          (name) =>
            `https://places.googleapis.com/v1/${name}/media?maxWidthPx=${maxWidth}&key=${this.apiKey}`,
        );
    } catch (error: any) {
      this.logger.warn(
        `Failed to fetch photos for ${placeId}: ${error?.message}`,
      );
      return [];
    }
  }
}
