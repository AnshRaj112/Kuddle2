import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type ProfileWhereInput = {
  bio?: StringNullableFilter;
  branch?: StringNullableFilter;
  id?: StringFilter;
  user?: UserWhereUniqueInput;
  year?: IntNullableFilter;
};
