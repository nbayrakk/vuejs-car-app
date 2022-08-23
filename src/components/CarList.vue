<template>
  <div>
    <div class="col-md-12 row">
      <CarCard
        class="col-md-6 col-sm-12 col-lg-3"
        v-for="(car, index) in gettersCarList"
        :key="index"
        :car="car"
        style="padding-bottom: 10px"
      />
    </div>
    <div v-if="newIncomingDataLength" style="padding: 15px;box-shadow: 0 2px 10px 0 #ededed;" class="row">
      <a
        style="display: flex; justify-content: center; cursor: pointer;color:#FF7271;font-weight:bold"
        @click="loadMore()"
      >
        Daha fazla yükle...</a
      >
    </div>
  </div>
</template>

<script>
import CarCard from "./CarCard.vue";
import { mapActions,mapGetters } from "vuex";

export default {
  name: "CarList",

  data() {
    return {};
  },
  components: {
    CarCard,
  },
  props: {
    gettersCarList: {
      type: Array,
    },
  },
  computed: {
    ...mapGetters({
      newIncomingDataLength: "cars/getNewIncomingDataLength",
    }),
  },
  mounted() {},
  created() {},

  methods: {
    ...mapActions({
      loadMoreCar: "cars/loadMoreCar",
      skipCount: "cars/setSkipCount",
    }),

    loadMore() {
      this.loadMoreCar();
      this.skipCount()
    },
  },
};
</script>

<style lang="sass" >
</style>