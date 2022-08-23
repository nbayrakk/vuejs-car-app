<template>
  <div class="home-container">
    <div class="filter-container">
      <Filters />
    </div>
    <div>
      <car-list :gettersCarList="gettersCarList"></car-list>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import CarList from "../components/CarList.vue";
import Filters from "../components/Filters.vue";

export default {
  components: { CarList, Filters },
  name: "Home",
  data() {
    return {};
  },
  mounted() {
    this.carList();
  },
  created() {
  },
  computed: {
    ...mapGetters({
      gettersCarList: "cars/gettersCarList",
      gettersSkipCount: "cars/gettersSkipCount",
    }),
  },
  methods: {
    ...mapActions({
      getCarList: "cars/getCarList",
      setSkipCount: "cars/setSkipCount",
    }),
    async carList() {
      const res = await this.getCarList().then(() => {
        this.setSkipCount();
      });
      console.log("res", res);
    },
  },
};
</script>

<style  scoped>
.home-container {
  padding: 20px;
}
.filter-container {
  padding: 10px;
}
</style>