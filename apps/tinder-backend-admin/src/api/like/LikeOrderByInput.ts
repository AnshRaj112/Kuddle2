import { SortOrder } from "../../util/SortOrder";

export type LikeOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  likedUser?: SortOrder;
  likeStatus?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
