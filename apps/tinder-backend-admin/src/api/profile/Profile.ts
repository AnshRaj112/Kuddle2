import { User } from "../user/User";

export type Profile = {
  bio: string | null;
  branch: string | null;
  createdAt: Date;
  id: string;
  interests?: Array<"Option1">;
  updatedAt: Date;
  user?: User | null;
  year: number | null;
};
