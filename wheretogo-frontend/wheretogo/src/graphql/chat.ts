import { gql } from "@apollo/client";

// QUERIES
export const MY_CHATS = gql`
  query MyChats {
    myChats {
      id
      type
      name
      lastMessageAt
      participants {
        userId
        user {
          id
          name
          avatar
        }
        isAdmin
        canWrite
        lastReadAt
      }
      messages {
        id
        content
        type
        createdAt
        editedAt
        senderId
        sender {
          id
          name
          avatar
        }
      }
      trip {
        id
        title
      }
    }
  }
`;

export const CHAT_MESSAGES = gql`
  query ChatMessages($roomId: Int!, $limit: Int = 50, $before: DateTime) {
    chatMessages(roomId: $roomId, limit: $limit, before: $before) {
      id
      content
      type
      createdAt
      editedAt
      senderId
      roomId
      sender {
        id
        name
        avatar
      }
      replyTo {
        id
        content
        sender {
          id
          name
          avatar
        }
      }
      readBy {
        userId
        readAt
        user {
          id
          name
          avatar
        }
      }
    }
  }
`;

export const UNREAD_COUNT = gql`
  query UnreadCount {
    unreadMessagesCount
  }
`;

// MUTATIONS
export const CREATE_TRIP_CHAT = gql`
  mutation CreateTripChat($tripId: Int!) {
    createTripChat(tripId: $tripId) {
      id
      name
      type
    }
  }
`;

export const CREATE_DIRECT_CHAT = gql`
  mutation CreateDirectChat($userId: Int!) {
    createDirectChat(userId: $userId) {
      id
      type
      name
      participants {
        userId
        user {
          id
          name
          avatar
        }
        isAdmin
        canWrite
      }
    }
  }
`;

export const SEND_MESSAGE = gql`
  mutation SendMessage($message: MessageCreateInput!) {
    sendMessage(message: $message) {
      id
      content
      type
      createdAt
      editedAt
      senderId
      roomId
      sender {
        id
        name
        avatar
      }
    }
  }
`;

export const SEND_MESSAGE_WITH_REPLY = gql`
  mutation SendMessageWithReply(
    $roomId: Int!
    $content: String!
    $replyToId: Int!
    $type: MessageType
  ) {
    sendMessageWithReply(
      roomId: $roomId
      content: $content
      replyToId: $replyToId
      type: $type
    ) {
      id
      content
      type
      createdAt
      editedAt
      senderId
      roomId
      sender {
        id
        name
        avatar
      }
      replyTo {
        id
        content
        sender {
          id
          name
          avatar
        }
      }
    }
  }
`;

export const EDIT_MESSAGE = gql`
  mutation EditMessage($messageId: Int!, $content: String!) {
    editMessage(messageId: $messageId, content: $content) {
      id
      content
      editedAt
      createdAt
      senderId
      roomId
      sender {
        id
        name
        avatar
      }
    }
  }
`;

export const MARK_AS_READ = gql`
  mutation MarkAsRead($messageIds: [Int!]!) {
    markMessagesAsRead(messageIds: $messageIds)
  }
`;

export const DELETE_MESSAGE = gql`
  mutation DeleteMessage($messageId: Int!) {
    deleteMessage(messageId: $messageId)
  }
`;

export const ADD_PARTICIPANT = gql`
  mutation AddParticipant($roomId: Int!, $userId: Int!) {
    addChatParticipant(roomId: $roomId, userId: $userId) {
      user {
        id
        name
        avatar
      }
      isAdmin
      canWrite
    }
  }
`;

export const LEAVE_ROOM = gql`
  mutation LeaveRoom($roomId: Int!) {
    leaveChatRoom(roomId: $roomId)
  }
`;

export const START_TYPING = gql`
  mutation StartTyping($roomId: Int!) {
    startTyping(roomId: $roomId)
  }
`;

export const STOP_TYPING = gql`
  mutation StopTyping($roomId: Int!) {
    stopTyping(roomId: $roomId)
  }
`;

// SUBSCRIPTIONS
export const MESSAGE_CREATED_SUBSCRIPTION = gql`
  subscription OnMessageCreated {
    messageCreated {
      roomId
      participantIds
      message {
        id
        content
        type
        createdAt
        editedAt
        senderId
        roomId
        sender {
          id
          name
          avatar
        }
        replyTo {
          id
          content
          sender {
            id
            name
            avatar
          }
        }
      }
    }
  }
`;

export const SENT_MESSAGE_SUBSCRIPTION = gql`
  subscription OnMessageSent($roomId: Int!) {
    sentMessage(roomId: $roomId) {
      id
      content
      type
      createdAt
      editedAt
      senderId
      roomId
      sender {
        id
        name
        avatar
      }
      replyTo {
        id
        content
        sender {
          id
          name
          avatar
        }
      }
      readBy {
        userId
        readAt
        user {
          id
          name
          avatar
        }
      }
    }
  }
`;

export const TYPING_SUBSCRIPTION = gql`
  subscription OnUserTyping($roomId: Int!) {
    userTyping(roomId: $roomId) {
      userId
      roomId
      isTyping
    }
  }
`;

// Keeping the old one for backward compatibility if needed
export const NEW_MESSAGE_SUBSCRIPTION = gql`
  subscription NewMessage($roomId: Int!) {
    newMessage(roomId: $roomId) {
      id
      content
      type
      createdAt
      sender {
        id
        name
        avatar
      }
      readBy {
        user {
          name
        }
        readAt
      }
    }
  }
`;

export const USER_TYPING_SUBSCRIPTION = gql`
  subscription UserTyping($roomId: Int!) {
    userTyping(roomId: $roomId) {
      userId
      roomId
      isTyping
    }
  }
`;

// USER STATUS
export const SET_USER_STATUS = gql`
  mutation SetUserStatus($status: UserStatusEnum!) {
    setUserStatus(status: $status)
  }
`;

export const USER_STATUS_SUBSCRIPTION = gql`
  subscription OnUserStatusChange($userId: Int!) {
    onUserStatusChange(userId: $userId) {
      userId
      status
      lastSeen
    }
  }
`;
