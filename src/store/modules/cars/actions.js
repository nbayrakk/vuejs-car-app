// import { carService } from "../../../services";

import { carsService } from "../../../services";

const actions = {
  async getCarList(vuexContext,params) {      
    const res = await carsService.getCars(params);
    vuexContext.commit("SET_CAR_LIST", res.data);
    return res;
  },
  async getCar(vuexContext,params){
    const res = await carsService.getCar(params);
    vuexContext.commit("SET_CAR_CART", res.data);
    return res;
  },
  async loadMoreCar(vuexContext,params){
    const res = await carsService.getCars(params);
    vuexContext.commit("SET_LOAD_MORE_CAR", res.data);
    return res;
  },
  setSkipCount(vuexContext){
    vuexContext.commit("SET_SKIP_COUNT", 1);
  },
  setFilters(vuexContext,payload){
    vuexContext.commit("SET_FILTERS", payload);

  }
};

export default actions;
