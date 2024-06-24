import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { LikeListRelationFilter } from "../like/LikeListRelationFilter";
import { ProfileListRelationFilter } from "../profile/ProfileListRelationFilter";
import { SubscriptionListRelationFilter } from "../subscription/SubscriptionListRelationFilter";

export type UserWhereInput = {
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  isPremium?: BooleanNullableFilter;
  lastName?: StringNullableFilter;
  likes?: LikeListRelationFilter;
  profiles?: ProfileListRelationFilter;
  subscriptions?: SubscriptionListRelationFilter;
  username?: StringFilter;
};
