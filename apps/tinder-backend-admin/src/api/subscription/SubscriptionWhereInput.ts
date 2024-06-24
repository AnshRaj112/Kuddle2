import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type SubscriptionWhereInput = {
  expiryDate?: DateTimeNullableFilter;
  id?: StringFilter;
  subscriptionType?: "Option1";
  user?: UserWhereUniqueInput;
};
