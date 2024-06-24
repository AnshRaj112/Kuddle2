import { Like } from "../like/Like";
import { Profile } from "../profile/Profile";
import { JsonValue } from "type-fest";
import { Subscription } from "../subscription/Subscription";

export type User = {
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  isPremium: boolean | null;
  lastName: string | null;
  likes?: Array<Like>;
  profiles?: Array<Profile>;
  roles: JsonValue;
  subscriptions?: Array<Subscription>;
  updatedAt: Date;
  username: string;
};
