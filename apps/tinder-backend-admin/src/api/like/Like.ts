import { User } from "../user/User";

export type Like = {
  createdAt: Date;
  id: string;
  likedUser: string | null;
  likeStatus: boolean | null;
  updatedAt: Date;
  user?: User | null;
};
