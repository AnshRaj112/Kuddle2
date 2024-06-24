import { Like as TLike } from "../api/like/Like";

export const LIKE_TITLE_FIELD = "likedUser";

export const LikeTitle = (record: TLike): string => {
  return record.likedUser?.toString() || String(record.id);
};
