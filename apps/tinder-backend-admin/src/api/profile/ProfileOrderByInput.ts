import { SortOrder } from "../../util/SortOrder";

export type ProfileOrderByInput = {
  bio?: SortOrder;
  branch?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  interests?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
  year?: SortOrder;
};
