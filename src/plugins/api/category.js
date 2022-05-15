import httpRequest from "@/plugins/api/http-request";
import apiConstant from "@/plugins/api/apiConstant";

export const getListCategory = async () =>
    httpRequest.get(apiConstant.CATEGORY.LIST);