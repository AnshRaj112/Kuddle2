import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type LikeUpdateInput = {
  likedUser?: string | null;
  likeStatus?: boolean | null;
  user?: UserWhereUniqueInput | null;
};
