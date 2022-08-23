<template>
  <div>
    <div class="row col-lg-12 col-md-6 col-sm-12">
      <div class="row col-lg-3 col-md-6 col-sm-12 input-style">
        <input
          style="width: 210px"
          type="text"
          class="form-control col-lg-9 col-sm-9"
          placeholder="Min Yıl"
          aria-label="Username"
          aria-describedby="basic-addon1"
          v-model="searchData.minYear"
        />
      </div>
      <div class="row col-md-3 col-sm-12 input-style">
        <input
          style="width: 210px"
          type="text"
          class="form-control col-md-9 col-sm-12"
          placeholder="Max Yıl"
          aria-label="Username"
          aria-describedby="basic-addon1"
          v-model="searchData.maxYear"
        />
      </div>
      <div class="col-lg-2 col-md-6 col-sm-12 input-style">
        <date-picker
          v-model="searchData.minDate"
          type="date"
          placeholder="Başlangıç Tarihi"
          style="margin-right:20px"
        ></date-picker>
      </div>
      <div class="col-lg-2 col-md-6 col-sm-12 input-style">
        <date-picker
          placeholder="Bitiş Tarihi"
          v-model="searchData.maxDate"
          type="date"
          style="margin-right:20px"
        >
        </date-picker>
      </div>
      <div class="col-md-2 input-style">
        <button @click="search()" class="btn btn-primary" style="width: 150px">
          Filtrele
        </button>
      </div>
    </div>
    <div class="col-md-12 col-sm-12 row sort-input-style">
      <div class="col-md-3 col-sm-12  input-style">
        <select
          v-model="searchData.sortType"
          class="form-select col-sm-12 "
          aria-label="Default select example"
          style="max-width: 250px"
        >
          <option :value="null" selected>Gelişmiş Sıralama</option>
          <option
            v-for="sortType in sortTypes"
            :value="sortType.value"
            :key="sortType.value"
          >
            {{ sortType.label }}
          </option>
        </select>
      </div>
      <div class="col-md-3 col-sm-12  input-style">
        <select
          v-model="searchData.listSortDirection"
          class="form-select col-sm-12 "
          aria-label="Default select example"
          style="max-width: 250px"
        >
          <option :value="null" selected>Fiyata Göre Sıralama</option>

          <option
            v-for="listSortDirection in listSortDirections"
            :value="listSortDirection.value"
            :key="listSortDirection.value"
          >
            {{ listSortDirection.label }}
          </option>
        </select>
      </div>
    </div>
  </div>
</template>

<script>
import DatePicker from "vue2-datepicker";
import "vue2-datepicker/index.css";
import { mapActions } from "vuex";
import { utils } from "../utils/utils";

export default {
  name: "Filters",
  components: { DatePicker },
  data() {
    return {
      searchData: {
        minDate: "",
        maxDate: "",
        minYear: "",
        maxYear: "",
        sortType: null,
        listSortDirection: null,
      },
      sortTypes: utils.sortTypes,
      listSortDirections: utils.listSortDirections,
    };
  },

  mounted() {},

  methods: {
    ...mapActions({
      getCarList: "cars/getCarList",
      setFilters: "cars/setFilters",
    }),

    search() {
      this.searchData.minDate = utils.dateFormat(this.searchData.minDate);
      this.searchData.maxDate = utils.dateFormat(this.searchData.maxDate);
      
      this.setFilters(this.searchData);
      this.getCarList();
    },
  },
};
</script>

<style scoped>
.sort-input-style {
  display: flex;
  align-items: flex-end;
  padding-top: 15px;
}
.align-label {
  align-self: center;
}
.mx-input {
  height: 38px;
}
.input-style {
  display: flex;
  justify-content: center;
  padding: 10px;
}
</style>