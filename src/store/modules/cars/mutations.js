const mutations = {
    SET_CAR_LIST(state, payload) {
        state.newIncomingDataLength = payload.length
        state.carList = payload;
    },
    SET_CAR_CART(state,payload){
        state.carDetail = payload
    },
    SET_SKIP_COUNT(state,payload){
        state.skipCount += payload
    },
    SET_FILTERS(state,payload){
        state.filters = payload
    },
    SET_LOAD_MORE_CAR(state,payload){
        state.newIncomingDataLength = payload.length
        state.carList =  [...state.carList, ...payload];
    }
}
export default mutations;