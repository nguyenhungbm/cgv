import httpRequest from "@/plugins/api/http-request";
import apiConstant from "@/plugins/api/apiConstant";
import { jsonToFormData } from "@/plugins/utils/helper";

export const login = async (params) =>
    httpRequest.post(apiConstant.AUTH.LOGIN, params);

export const register = async (params) =>
    httpRequest.post(apiConstant.AUTH.REGISTER, jsonToFormData(params), {
        headers: { "Content-Type": "multipart/form-data" },
    });

export const getUserProfile = async () =>
    httpRequest.get(apiConstant.USER.PROFILE);

export const updateProfile = async (params) =>
    httpRequest.post(apiConstant.USER.PROFILE, jsonToFormData(params), {
        headers: { "Content-Type": "multipart/form-data" },
    });
