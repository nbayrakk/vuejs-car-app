import moment from "moment";

const sortTypes = [
  { value: 0, label: "Fiyat" },
  { value: 1, label: "Gün" },
  { value: 2, label: "Yıl" },
];
const listSortDirections = [
  { value: 0, label: "Artan" },
  { value: 1, label: "Azalan" },
];

function dateFormat(date) {
  if (!date) return;
  return moment(String(date)).format("YYYY-MM-DD");
}

export const utils = {
  dateFormat,
  listSortDirections,
  sortTypes,
};
