import moment from "moment";

export function convertTimestampToDate(timestamp) {
  return moment().add(timestamp * timestamp * timestamp).toDate()  ;
}

export function formatDate(date, format = "YYYY/MM/DD") {
  return moment(date).format(format);
}
