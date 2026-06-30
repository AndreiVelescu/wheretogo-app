import { useMutation } from "@apollo/client/react";
import {
  ADD_POST_TO_COLLECTION_MUTATION,
  CREATE_COLLECTION_MUTATION,
} from "../feed.operations";
import type {
  AddPostToCollectionInput,
  CreateCollectionInput,
  PostCollection,
} from "../feed.types";

export const useCollections = () => {
  const [createCollectionMutation] = useMutation(CREATE_COLLECTION_MUTATION);
  const [addPostToCollectionMutation] = useMutation(
    ADD_POST_TO_COLLECTION_MUTATION
  );

  const createCollection = async (input: CreateCollectionInput) => {
    try {
      const result = await createCollectionMutation({
        variables: { input },
      });
      return result.data?.createCollection as PostCollection;
    } catch (error) {
      console.error("Error creating collection:", error);
      throw error;
    }
  };

  const addPostToCollection = async (input: AddPostToCollectionInput) => {
    try {
      await addPostToCollectionMutation({
        variables: { input },
      });
    } catch (error) {
      console.error("Error adding post to collection:", error);
      throw error;
    }
  };

  return {
    createCollection,
    addPostToCollection,
  };
};
