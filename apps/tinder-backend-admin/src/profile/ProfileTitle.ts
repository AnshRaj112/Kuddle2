import { Profile as TProfile } from "../api/profile/Profile";

export const PROFILE_TITLE_FIELD = "branch";

export const ProfileTitle = (record: TProfile): string => {
  return record.branch?.toString() || String(record.id);
};
