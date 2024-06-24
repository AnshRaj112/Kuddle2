import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ProfileCreateInput = {
  bio?: string | null;
  branch?: string | null;
  interests?: Array<"Option1">;
  user?: UserWhereUniqueInput | null;
  year?: number | null;
};
