import { isNull, keys } from "lodash";

const buildFormData = (formData, data, parentKey = undefined) => {
    if (
        data &&
        typeof data === "object" &&
        !(data instanceof Date) &&
        !(data instanceof File)
    ) {
        keys(data).forEach((key) => {
            buildFormData(
                formData,
                data[key],
                parentKey ? `${parentKey}[${key}]` : key
            );
        });
    } else {
        const value = isNull(data) ? "" : data;
        formData.append(parentKey, value);
    }
};

export const jsonToFormData = (data) => {
    const formData = new FormData();
    buildFormData(formData, data);
    return formData;
};
