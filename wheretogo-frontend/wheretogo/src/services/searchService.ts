import { Location, PaginatedResponse } from "../types/location";
import { ApiResponse } from "../types/auth";
import { locationService } from "./locationService";

export interface SearchFilters {
  category?: string;
  city?: string;
  priceRange?: {
    min: number;
    max: number;
  };
  rating?: number;
  features?: string[];
  sortBy?: "rating" | "price" | "distance" | "name";
  sortOrder?: "asc" | "desc";
}

export const searchService = {
  searchLocations: async (
    query?: string,
    filters?: SearchFilters,
    page: number = 1,
    limit: number = 10
  ): Promise<ApiResponse<PaginatedResponse<Location>>> => {
    try {
      // Mapare de la termeni de căutare la tipuri backend (multiple tipuri pentru unele categorii)
      const searchTermMappings: { [key: string]: string[] } = {
        "viata de noapte": ["night club", "bar", "casino"],
        "viață de noapte": ["night club", "bar", "casino"],
        "night life": ["night club", "bar", "casino"], // Pentru categoria din UI
        noapte: ["night club", "bar", "casino"],
        club: ["night club", "club"],
        bar: ["bar", "night club"],
        cultură: ["theater", "museum", "library", "art gallery"],
        cultura: ["theater", "museum", "library", "art gallery"],
        culture: ["theater", "museum", "library", "art gallery"], // Pentru categoria din UI
        teatru: ["theater"],
        muzeu: ["museum"],
        museum: ["museum"], // Pentru categoria din UI
        biblioteca: ["library"],
        galerie: ["art gallery"],
        restaurant: ["restaurant", "cafe", "bakery"], // Pentru categoria din UI
        shopping: ["shopping mall", "book store"], // Pentru categoria din UI
        park: ["park", "zoo"], // Include zoo ca spațiu verde
        parcuri: ["park", "zoo"],
      };

      let searchTypes: string[] = [];

      // Dacă avem query text, încearcă să găsești tipurile corespunzătoare
      if (query) {
        const lowerQuery = query.toLowerCase().trim();
        const mappedTypes = searchTermMappings[lowerQuery];
        if (mappedTypes) {
          searchTypes = mappedTypes;
        } else {
          // Încearcă căutare parțială
          for (const [term, types] of Object.entries(searchTermMappings)) {
            if (term.includes(lowerQuery) || lowerQuery.includes(term)) {
              searchTypes.push(...types);
            }
          }
          // Dacă nu găsești mappings, folosește query-ul direct
          if (searchTypes.length === 0) {
            searchTypes = [lowerQuery];
          }
        }
      }

      // Dacă avem categorie din filtru, mapează-o dacă e nevoie
      if (filters?.category) {
        const categoryTypes = searchTermMappings[
          filters.category.toLowerCase()
        ] || [filters.category];
        searchTypes = categoryTypes;
      }

      // Dacă avem tipuri specifice, caută pentru toate
      if (searchTypes.length > 0) {
        let allResults: any[] = [];

        // Caută pentru fiecare tip
        for (const type of searchTypes) {
          try {
            const response = await locationService.getByType(type);
            if (response.success && response.data) {
              allResults.push(...response.data);
            }
          } catch (error) {
            console.warn(`Error fetching type ${type}:`, error);
            // Continuă cu următorul tip
          }
        }

        // Elimină duplicatele bazate pe ID
        const uniqueResults = allResults.filter(
          (location, index, self) =>
            index === self.findIndex((l) => l.id === location.id)
        );

        return {
          success: true,
          data: {
            data: uniqueResults,
            pagination: {
              currentPage: 1,
              totalPages: 1,
              totalItems: uniqueResults.length,
              itemsPerPage: uniqueResults.length,
            },
          },
          message: `Found ${uniqueResults.length} locations`,
          statusCode: 200,
        };
      }

      // Pentru căutare generală sau fără tip specific
      const locationFilters = {
        search: query,
        sortBy: filters?.sortBy as any,
      };

      const response = await locationService.getAll(locationFilters);

      // Filtrare pe numele locației dacă avem query
      let filteredData = response.data || [];
      if (query) {
        const lowerQuery = query.toLowerCase();
        filteredData = filteredData.filter(
          (location) =>
            location.name.toLowerCase().includes(lowerQuery) ||
            location.description?.toLowerCase().includes(lowerQuery) ||
            location.type.toLowerCase().includes(lowerQuery)
        );
      }

      return {
        success: response.success,
        data: {
          data: filteredData,
          pagination: {
            currentPage: 1,
            totalPages: 1,
            totalItems: filteredData.length,
            itemsPerPage: filteredData.length,
          },
        },
        message: response.message,
        statusCode: response.statusCode,
      };
    } catch (error) {
      console.error("Error searching locations:", error);
      throw error;
    }
  },

  // Get search suggestions
  getSearchSuggestions: async (
    query: string
  ): Promise<ApiResponse<string[]>> => {
    try {
      // Obține tipurile dinamice din backend
      const typesResponse = await locationService.getLocationTypes();
      const availableTypes =
        typesResponse.success && typesResponse.data
          ? typesResponse.data.map((item) => item.type)
          : [
              "restaurant",
              "cafe",
              "hotel",
              "night club",
              "bar",
              "theater",
              "museum",
              "library",
              "art gallery",
              "park",
            ];

      // Mapare de la termeni de căutare la categorii afișate
      const searchTermMappings: { [key: string]: string[] } = {
        "viata de noapte": ["viață de noapte"],
        "viață de noapte": ["viață de noapte"],
        noapte: ["viață de noapte"],
        club: ["night club", "viață de noapte"],
        bar: ["bar", "viață de noapte"],
        cultură: ["cultură"],
        cultura: ["cultură"],
        teatru: ["theater", "cultură"],
        muzeu: ["museum", "cultură"],
        biblioteca: ["library", "cultură"],
        galerie: ["art gallery", "cultură"],
        restaurant: ["restaurant"],
        park: ["park"],
        hotel: ["hotel"],
        cafe: ["cafe"],
        magazin: ["shopping mall"],
        spa: ["spa"],
        brutarie: ["bakery"],
        librarie: ["book store"],
        atractie: ["tourist attraction"],
        zoo: ["zoo"],
      };

      const lowerQuery = query.toLowerCase();
      let suggestions: string[] = [];

      // Căutare în mappings
      Object.entries(searchTermMappings).forEach(([term, categories]) => {
        if (term.includes(lowerQuery) || lowerQuery.includes(term)) {
          suggestions.push(...categories);
        }
      });

      // Căutare directă în tipurile disponibile
      const directMatches = availableTypes.filter((type: string) =>
        type.toLowerCase().includes(lowerQuery)
      );

      suggestions.push(...directMatches);

      // Eliminare duplicate și returnare
      const uniqueSuggestions = [...new Set(suggestions)];

      return {
        success: true,
        data: uniqueSuggestions,
        message: "Suggestions retrieved successfully",
        statusCode: 200,
      };
    } catch (error) {
      console.error("Error getting search suggestions:", error);
      throw error;
    }
  },

  // Get popular searches
  getPopularSearches: async (): Promise<ApiResponse<string[]>> => {
    try {
      const popularSearches = [
        "restaurant",
        "viață de noapte",
        "cultură",
        "park",
        "museum",
        "hotel",
        "cafe",
      ];

      return {
        success: true,
        data: popularSearches,
        message: "Popular searches retrieved successfully",
        statusCode: 200,
      };
    } catch (error) {
      console.error("Error getting popular searches:", error);
      throw error;
    }
  },

  // Get available search filters
  getAvailableFilters: async (): Promise<
    ApiResponse<{
      categories: string[];
      cities: string[];
      priceRanges: { label: string; min: number; max: number }[];
      features: string[];
    }>
  > => {
    try {
      const filters = {
        categories: [
          "restaurant",
          "viață de noapte",
          "cultură",
          "park",
          "museum",
          "hotel",
          "cafe",
          "library",
        ],
        cities: ["Chișinău", "București", "Cluj-Napoca", "Timișoara", "Iași"],
        priceRanges: [
          { label: "Budget", min: 0, max: 50 },
          { label: "Mid-range", min: 50, max: 150 },
          { label: "Luxury", min: 150, max: 500 },
        ],
        features: ["WiFi", "Parking", "Pet-friendly", "Accessible", "Outdoor"],
      };

      return {
        success: true,
        data: filters,
        message: "Available filters retrieved successfully",
        statusCode: 200,
      };
    } catch (error) {
      console.error("Error getting available filters:", error);
      throw error;
    }
  },
};
