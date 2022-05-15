import { MaxFileSizeUpload } from "../const/app";
import i18n from "../config/i18n";
export const isOverFileSize = (size) => {
  const { t } = i18n.i18next;
  if (size / (1024 * 1024) > MaxFileSizeUpload) {
    throw {
      error: t("userProfile.over_file_size", {
        size: MaxFileSizeUpload,
      }),
    };
  }
};
