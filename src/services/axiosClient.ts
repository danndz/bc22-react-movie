import axios, { AxiosError } from "axios";

// Setup cấu hình mặc định cho axios
const axiosClient = axios.create({
  baseURL: "https://movienew.cybersoft.edu.vn/api",
  headers: {
    TokenCybersoft:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJGcm9udCBFbmQgNzEiLCJIZXRIYW5TdHJpbmciOiIxMS8xMi8yMDIyIiwiSGV0SGFuVGltZSI6IjE2NzA3MTY4MDAwMDAiLCJuYmYiOjE2NDU5ODEyMDAsImV4cCI6MTY3MDg2NDQwMH0.hImF3FD5ezlSpmo_fyOBeTlwLGcUfxyEeZIRIddaRFE",
  },
});

interface ErrorResponse {
  content: string;
}

// setup response interceptor
axiosClient.interceptors.response.use(
  (response) => {
    // request API thành công, ta có thể thay đổi response trước khi trả ra cho nơi gọi request
    // response.data: format của axios
    // content: format của cybersoft
    return response.data.content;
  },
  (error: AxiosError<ErrorResponse>) => {
    // request API thất bại, ta có thể thay đổi error trước khi trả ra cho nơi gọi request
    Promise.reject(error.response?.data.content);
  }
);

export default axiosClient;
