export const hiragana = (data) => {
  const { value } = data;

  const HIRAGANA_REGEX = /^[ぁ-んー ]+$/;

  return HIRAGANA_REGEX.test(value);
};
