import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type SubscriptionCreateInput = {
  expiryDate?: Date | null;
  subscriptionType?: "Option1" | null;
  user?: UserWhereUniqueInput | null;
};
