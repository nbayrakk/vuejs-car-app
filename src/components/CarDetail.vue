<template>
  <div class="detail-container">
    <div class="col-lg-12 row">
      <!-- SLIDER  -->
      <div class="col-lg-6 inner-container">
        <h3>{{ car.title }}</h3>
        <ul>
          <li
            v-for="(photo, index) in car.photos"
            :key="index"
            :style="getImgBackground(photo)"
          ></li>
        </ul>
      </div>
      <!-- INFORMATION -->
      <div class="col-lg-3 inner-container">
        <!-- priceFormatted -->
        <h3>İlan Bilgileri</h3>

        <div class="information-container">
          <div class="row list-style">
            <div class="col-md-6">
              <label for="" class="price-style">
                {{ car.priceFormatted }}
              </label>
            </div>
          </div>
          <div class="row list-style">
            <span style="font-weight: bold; font-size: 18px">
              {{ car.location?.cityName }} / {{ car.location?.townName }}
            </span>
          </div>
          <div class="row list-style">
            <div class="col-md-6">
              <label class="list-style-key"> İlan No: </label>
            </div>
            <div class="col-md-6">
              {{ car.id }}
            </div>
          </div>
          <div class="row list-style">
            <div class="col-md-6">
              <label class="list-style-key" for=""> İlan Tarihi: </label>
            </div>
            <div class="col-md-6">
              {{ car.dateFormatted }}
            </div>
          </div>
          <div
            class="row list-style"
            v-for="(prop, index) in car.properties"
            :key="index"
          >
            <div class="col-md-6">
              <label class="list-style-key" for="">
                {{ $t(prop.name) }}:
              </label>
            </div>
            <div class="col-md-6">
              {{ prop.value }}
            </div>
          </div>
        </div>
      </div>
      <!-- USER DETAIl -->
      <div class="col-lg-3 inner-container">
        <h3>Kişi Bilgileri</h3>
        <div
          class="information-container"
          style="background: #efefef; padding: 12px 14px; height: 415px"
        >
          <div class="row list-style" style="border: none">
            <div class="col-md-6">
              <label class="list-style-key" for=""> Ad Soyad: </label>
            </div>
            <div class="col-md-6">
              {{ car.userInfo?.nameSurname }}
            </div>
          </div>
          <div class="row list-style" style="border: none">
            <div class="col-md-6">
              <label class="list-style-key" for=""> Telefon: </label>
            </div>
            <div class="col-md-6">
              {{ car.userInfo?.phoneFormatted }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-12 row inner-container">
      <div
        class="col-lg-9 col-md-12 col-sm-12 box-title"
        style="font-weight: 900"
      >
        Araç Detayı
      </div>
      <div
        v-html="car.text"
        class="col-lg-9 col-md-12 col-sm-12 car-detail"
        id="car-detail"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CarDetail",
  props: {
    car: {
      type: Object,
    },
  },
  data() {
    return {};
  },

  mounted() {},
  created() {},
  computed: {},
  methods: {
    getImgBackground(photoUrl) {
      return `background-image: url(${photoUrl.replace("{0}", "580x435")})`;
    },
  },
};
</script>

<style lang="scss" scoped>
.inner-container {
  padding: 20px;
}
.box-title {
  border-bottom: 1px solid #dedede;
  padding: 6px 10px 7px 10px;
  background: #efefef;
  background: -moz-linear-gradient(top, #fff 0, #efefef 100%);
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    color-stop(0%, #fff),
    color-stop(100%, #efefef)
  );
  background: -webkit-linear-gradient(top, #fff 0, #efefef 100%);
}
.car-detail {
  border: 1px solid #d3d2d2;
  padding: 6px 10px 7px 10px;
  background: #efefef;
  background: -moz-linear-gradient(top, #fff 0, #efefef 100%);
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    color-stop(0%, #fff),
    color-stop(100%, #efefef)
  );
  background: -webkit-linear-gradient(top, #fff 0, #efefef 100%);
}
.price-style {
  color: #e40030;
  font-weight: bold;
  font-size: 20px;
}
.list-style {
  border-bottom: 1px solid #dedede;
  padding: 10px;
}
.list-style-key {
  font-weight: bold;
}
.detail-container {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
ul {
  display: flex;
  list-style: none;
  max-width: 600px;
  margin-block: 2rem;
  margin-inline: auto;
  overflow: auto;
  scroll-snap-type: x mandatory;
  height: 360px;
}

li {
  display: grid;
  place-items: center;
  color: white;
  font-size: 3rem;
  aspect-ratio: 2/1;
  width: 100%;
  flex-shrink: 0;
  scroll-snap-align: start;
}
</style>