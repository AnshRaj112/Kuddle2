import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type SubscriptionUpdateInput = {
  expiryDate?: Date | null;
  subscriptionType?: "Option1" | null;
  user?: UserWhereUniqueInput | null;
};
