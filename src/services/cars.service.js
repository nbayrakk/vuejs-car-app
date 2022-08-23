import { $axios } from "../plugins/axios";
import store from "../store";
export const carsService = {
  getCars,
  getCar,
};

function createEndPoint() {
    
  let str = "listing?";
  let skipCount = store.getters["cars/gettersSkipCount"];
  let searchData = store.getters["cars/getterSearchData"];
  if (searchData.minDate) str += "minDate=" + searchData.minDate + "&";
  if (searchData.maxDate) str += "maxDate=" + searchData.maxDate + "&";
  if (searchData.minYear) str += "minYear=" + searchData.minYear + "&";
  if (searchData.maxYear) str += "maxYear=" + searchData.maxYear + "&";
  if (searchData.sortType != null || searchData.sortType != undefined)
    str += "sort=" + searchData.sortType + "&";
  if (
    searchData.listSortDirection != null ||
    searchData.listSortDirection != undefined
  )
    str += "sortDirection=" + searchData.listSortDirection + "&";
  if (skipCount) str += "skip=" + skipCount + "&";
  str += "take=20";
  return str;
}
async function getCars() {
  let response = await $axios.get(createEndPoint());
  return response;
}
async function getCar(params) {
  let response = await $axios.get(`detail?id=${params.id}`);
  return response;
}
