const getters = {
  gettersCarList(state) {
    return state.carList;
  },
  gettersCarDetail(state){
    return state.carDetail;
  },
  gettersSkipCount(state){
    return state.skipCount
  },
  getterSearchData(state){
    return state.filters
  },
  getNewIncomingDataLength(state){
    return state.newIncomingDataLength
  }
};
export default getters;
