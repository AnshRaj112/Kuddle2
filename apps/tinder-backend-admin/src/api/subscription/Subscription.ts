import { User } from "../user/User";

export type Subscription = {
  createdAt: Date;
  expiryDate: Date | null;
  id: string;
  subscriptionType?: "Option1" | null;
  updatedAt: Date;
  user?: User | null;
};
