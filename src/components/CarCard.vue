<template>
  <div>
    <div class="card wit">
      <div class="card-body">
        <h3 class="card-title truncate" style="font-size: 18px">
          {{ car.title }}
        </h3>
        <div class="img-container">
          <img :src="getImgPx" class="img-cover" alt="" />
        </div>
        <div class="col-md-12 row" style="display: flex; margin: auto;margin-top:15px">
          <div class="col-md-6" style="display: flex;padding-bottom:5px">
            <label for=""> Konum: </label>
            <label
              class="truncate"
              for=""
              style="font-weight: bold; margin-left: 5px"
            >
              {{ car.location.cityName }}
            </label>
          </div>
          <div
            class="col-md-6"
            v-for="(prop, index) in car.properties"
            :key="index"
            style="display: flex;padding-bottom:5px"
          >
            <label for="">
              {{ $t(prop.name) }}:
            </label>
            <label for="" class="truncate" style="font-weight: bold">
              {{ prop.value }}
            </label>
          </div>

          <div class="col-md-6" style="align-self: center;padding-bottom:5px">
            {{ car.priceFormatted }}
          </div>
          <div class="col-md-6">
            <button
              @click="openCarDetail"
              class="btn btn-primary"
              style="white-space: nowrap"
            >
              Araba Detayı
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CarCard",

  data() {
    return {};
  },
  props: {
    car: {
      type: Object,
    },
  },
  mounted() {},
  created() {},
  computed: {
    getImgPx() {
      this.car;
      return this.car.photo.replace("{0}", "160x120");
    },
  },
  methods: {
    openCarDetail() {
      this.$router.push({ name: "Detail", params: { id: this.car.id } });
    },
  },
};
</script>

<style lang="scss" scoped>
.truncate {
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.img-cover {
  object-fit: cover;
}
.img-container {
  width: 100%;
  height: 130px;
  justify-content: center;
  display: flex;
}
</style>