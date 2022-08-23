<template>
  <div class="detail-container">
    <div class="container mt-4">
      <CarDetail :car="gettersCarDetail" />
    </div>
  </div>
</template>

<script>
import CarDetail from "../components/CarDetail.vue";

import { mapActions,mapGetters } from "vuex";

export default {
  name: "Detail",
  components: { CarDetail },
  data() {
    return {};
  },

  mounted() {
    this.getCarDetail();
  },
  created(){
  },
  computed: {
      ...mapGetters({
      gettersCarDetail: "cars/gettersCarDetail",
    }),
  },
  methods: {
    ...mapActions({
      getCar: "cars/getCar",
    }),
    async getCarDetail() {
      const res = await this.getCar(this.$route.params);
      console.log("res", res);
    },
  },
};
</script>

<style lang="scss" >
.item {
  color: red($color: #000000);
}
.detail-container {
  padding: 20px;
}
</style>