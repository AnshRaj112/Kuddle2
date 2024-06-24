import { SortOrder } from "../../util/SortOrder";

export type SubscriptionOrderByInput = {
  createdAt?: SortOrder;
  expiryDate?: SortOrder;
  id?: SortOrder;
  subscriptionType?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
