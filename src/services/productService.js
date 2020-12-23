import Axios from "axios";
import axiosRetry from 'axios-retry';

Axios.defaults.timeout = 15000;
axiosRetry(Axios, {retries: 2});

const headers = {
    Accept: "application/json",
    "Content-Type": "application/json"
};

const endpoint = `${process.env.REACT_APP_API_URL}/products`;

export const getProducts = (searchText, page) => {
    return Axios.get(
      `${endpoint}/search?q=${searchText}&page=${page}`,
      {
        headers
      }
    );
};