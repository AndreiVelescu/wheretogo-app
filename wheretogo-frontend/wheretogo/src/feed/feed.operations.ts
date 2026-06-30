import { gql } from "@apollo/client";

export const MY_FEED_QUERY = gql`
  query MyFeed($limit: Int, $cursor: String) {
    myFeed(limit: $limit, cursor: $cursor) {
      posts {
        id
        type
        title
        description
        tags
        likesCount
        commentsCount
        savedCount
        sharesCount
        viewsCount
        visibility
        author {
          id
          name
          avatar
          bio
        }
        location {
          id
          name
          address
          type
        }
        trip {
          id
          title
          city
          country
        }
        media {
          id
          type
          url
          thumbnail
          order
          width
          height
          duration
        }
        isLikedByMe
        isSavedByMe
        createdAt
        updatedAt
        publishedAt
      }
      hasMore
      cursor
    }
  }
`;

export const GET_POST_BY_ID_QUERY = gql`
  query GetPostById($id: Int!) {
    getPostById(id: $id) {
      id
      type
      title
      description
      tags
      likesCount
      commentsCount
      savedCount
      sharesCount
      viewsCount
      visibility
      author {
        id
        name
        avatar
        bio
      }
      location {
        id
        name
        address
        type
      }
      trip {
        id
        title
        city
        country
      }
      media {
        id
        type
        url
        thumbnail
        order
        width
        height
        duration
      }
      isLikedByMe
      isSavedByMe
      createdAt
      updatedAt
      publishedAt
    }
  }
`;

export const MY_POSTS_QUERY = gql`
  query MyPosts {
    myPosts {
      id
      type
      title
      description
      tags
      likesCount
      commentsCount
      savedCount
      sharesCount
      viewsCount
      visibility
      location {
        id
        name
        address
        type
      }
      trip {
        id
        title
        city
        country
      }
      media {
        id
        type
        url
        thumbnail
        order
        width
        height
        duration
      }
      createdAt
      updatedAt
      publishedAt
    }
  }
`;

//Mutations

export const CREATE_POST_MUTATION = gql`
  mutation CreatePost($input: CreatePostInput!) {
    createPost(input: $input) {
      success
      postId
      message
    }
  }
`;

export const UPDATE_POST_MUTATION = gql`
  mutation UpdatePost($input: UpdatePostInput!) {
    updatePost(input: $input) {
      success
      postId
      message
    }
  }
`;

export const DELETE_POST_MUTATION = gql`
  mutation DeletePost($postId: Float!) {
    deletePost(postId: $postId)
  }
`;

export const PUBLISH_POST_MUTATION = gql`
  mutation PublishPost($postId: Float!) {
    publishPost(postId: $postId)
  }
`;

export const LIKE_POST_MUTATION = gql`
  mutation LikePost($postId: Int!) {
    likePost(postId: $postId)
  }
`;

export const UNLIKE_POST_MUTATION = gql`
  mutation UnlikePost($postId: Int!) {
    unlikePost(postId: $postId)
  }
`;

export const SAVE_POST_MUTATION = gql`
  mutation SavePost($input: SavePostInput!) {
    savePost(input: $input)
  }
`;

export const UNSAVE_POST_MUTATION = gql`
  mutation UnsavePost($postId: Int!) {
    unsavePost(postId: $postId)
  }
`;

// COMMENTS
export const COMMENT_FRAGMENT = gql`
  fragment CommentFields on PostComment {
    id
    content
    createdAt
    editedAt
    likesCount
    author {
      id
      name
      avatar
    }
  }
`;

export const CREATE_COMMENT_MUTATION = gql`
  ${COMMENT_FRAGMENT}
  mutation CreateComment($input: CreateCommentInput!) {
    createComment(input: $input) {
      ...CommentFields
    }
  }
`;

export const UPDATE_COMMENT_MUTATION = gql`
  ${COMMENT_FRAGMENT}
  mutation UpdateComment($input: UpdateCommentInput!) {
    updateComment(input: $input) {
      ...CommentFields
    }
  }
`;

export const DELETE_COMMENT_MUTATION = gql`
  mutation DeleteComment($commentId: Int!) {
    deleteComment(commentId: $commentId)
  }
`;

export const GET_COMMENTS_QUERY = gql`
  ${COMMENT_FRAGMENT}
  query GetCommentsByPost($postId: Int!) {
    getCommentsByPost(postId: $postId) {
      ...CommentFields
      replies {
        ...CommentFields
      }
    }
  }
`;

export const LIKE_COMMENT_MUTATION = gql`
  mutation LikeComment($commentId: Int!) {
    likeComment(commentId: $commentId)
  }
`;

export const UNLIKE_COMMENT_MUTATION = gql`
  mutation UnlikeComment($commentId: Int!) {
    unlikeComment(commentId: $commentId)
  }
`;

// SAVED POSTS
export const GET_SAVED_POSTS_QUERY = gql`
  query GetSavedPosts {
    getSavedPosts {
      id
      title
      description
      type
      tags
      media {
        id
        url
        thumbnail
        type
        order
      }
      author {
        id
        name
        avatar
      }
      likesCount
      commentsCount
      savedCount
      viewsCount
      createdAt
      publishedAt
    }
  }
`;

// COLLECTIONS
export const CREATE_COLLECTION_MUTATION = gql`
  mutation CreateCollection($input: CreateCollectionInput!) {
    createCollection(input: $input) {
      id
      name
      description
      isPublic
      coverImage
      createdAt
    }
  }
`;

export const ADD_POST_TO_COLLECTION_MUTATION = gql`
  mutation AddPostToCollection($input: AddPostToCollectionInput!) {
    addPostToCollection(input: $input)
  }
`;

// SHARE
export const SHARE_POST_MUTATION = gql`
  mutation SharePost($input: SharePostInput!) {
    sharePost(input: $input)
  }
`;

// REPORT
export const REPORT_POST_MUTATION = gql`
  mutation ReportPost($input: ReportPostInput!) {
    reportPost(input: $input)
  }
`;

// VIEWS
export const INCREMENT_VIEWS_MUTATION = gql`
  mutation IncrementViews($postId: Int!) {
    incrementViews(postId: $postId)
  }
`;
