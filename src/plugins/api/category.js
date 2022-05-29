import httpRequest from "@/plugins/api/http-request";
import apiConstant from "@/plugins/api/apiConstant";

export const getListDashboard = async () =>
    httpRequest.get(apiConstant.HOME.LIST);
export const getListCategory = async () =>
    httpRequest.get(apiConstant.CATEGORY.LIST);
export const getListProductInCategory = async (slug) =>
    httpRequest.get(apiConstant.CATEGORY.PRODUCT + slug);