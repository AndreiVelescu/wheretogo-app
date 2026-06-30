import { gql } from "@apollo/client";

export const REQUEST_UPLOAD_MUTATION = gql`
  mutation RequestUpload($input: RequestUploadInput!) {
    requestUpload(input: $input) {
      uploadUrl
      fileKey
      sessionId
      expiresIn
      expiresAt
    }
  }
`;

export const CONFIRM_UPLOAD_MUTATION = gql`
  mutation ConfirmUpload($input: ConfirmUploadInput!) {
    confirmUpload(input: $input) {
      success
      fileKey
      url
      size
      contentType
    }
  }
`;

export const DELETE_UPLOAD_MUTATION = gql`
  mutation DeleteUpload($fileKey: String!) {
    deleteUpload(fileKey: $fileKey)
  }
`;
