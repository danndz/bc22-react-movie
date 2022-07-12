import { Movie } from "interfaces/movie";
import axiosClient from "./axiosClient";

const movieAPI = {
  getMovieList: () => {
    return axiosClient.get<unknown, Movie[]>("QuanLyPhim/LayDanhSachPhim");
  },

  getMovieBanner: () => {
    return axiosClient.get("QuanLyPhim/LayDanhSachBanner");
  },
};

export default movieAPI;
