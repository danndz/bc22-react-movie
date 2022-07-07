import axiosClient from "./axiosClient";

const movieAPI = {
  getMovieList: () => {
    return axiosClient.get("QuanLyPhim/LayDanhSachPhim");
  },

  getMovieBanner: () => {
    return axiosClient.get("QuanLyPhim/LayDanhSachBanner");
  },
};

export default movieAPI;
