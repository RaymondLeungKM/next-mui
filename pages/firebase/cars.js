import axios from "axios";

export function getBuyList() {
  return axios
    .get("https://raymond-webdev-profile.firebaseio.com/cars/buy.json")
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.log(err));
}
