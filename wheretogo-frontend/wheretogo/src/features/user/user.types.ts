/**
 * 👤 User Types
 */

import { User } from "../auth/auth.types";

export interface UpdateProfileInput {
  name?: string;
  email?: string;
  nickname?: string;
  profilePicture?: string;
}

export interface FollowUser {
  id: number;
  userId: number;
  followerId: number;
  createdAt: string;
}

export { User };
