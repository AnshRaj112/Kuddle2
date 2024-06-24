import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type LikeCreateInput = {
  likedUser?: string | null;
  likeStatus?: boolean | null;
  user?: UserWhereUniqueInput | null;
};
