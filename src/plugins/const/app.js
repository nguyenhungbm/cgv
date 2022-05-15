export const ButtonType = {
  button: "button",
  submit: "submit",
};

export const ButtonVariant = {
  primary: "primary",
  primaryOutline: "primaryOutline",
  success: "success",
  successOutline: "successOutline",
  default: "default",
};

export const InputType = {
  text: "text",
  password: "password",
  textarea: "textarea",
};

export const StatusCode = {
  BadRequest: 400,
  Unauthorized: 401,
  Forbidden: 403,
  TooManyRequests: 429,
  ValidationFailed: 422,
  InternalServerError: 500,
};

export const UserType = {
  advisor: 1,
  farmer: 2,
};

export const OrganizationType = {
  corporation: 0,
  ja: 1,
  family_business: 2,
  agriculture_related_organizations: 3,
};

export const ChannelStatus = {
  pending: 0,
  chatting: 1,
  completed: 2,
  cancelled: 3,
  farmer_read_only: 4,
  advisor_read_only: 5,
};

export const StatusPesticide = {
  word_mismatch: 404,
  word_match: 200,
};

export const ConfirmStatus = {
  apporved: 1,
  refused: 2,
};

export const Reason = {
  ADVISOR_BUSY: 1,
  ADVISOR_ATTITUDE: 2,
  ADVISOR_UNANSWERABLE: 3,
  FARMER_SUCCESS: 4,
  ADVISOR_NOT_RESOLVED: 5,
  ADVISOR_OTHER_RESULT: 6,
};

export const walletAmountMinimum = 4000;

export const MaxFileSizeUpload = process.env.MIX_MAX_FILE_SIZE_UPLOAD || 2;

export const CheckImageChat = process.env.MIX_URL_IMAGE_CHAT_FOLDER;

export const CheckAudioChat = process.env.MIX_URL_AUDIO_CHAT_FOLDER;
