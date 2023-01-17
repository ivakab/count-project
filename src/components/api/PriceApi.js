import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.coindesk.com/v1/bpi/currentprice.json",
});

export const PriceApi = async () => {
  try {
    const res = await instance.get();
    return res.data;
  } catch (e) {
    console.error(e);
    return null;
  }
};
