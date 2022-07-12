import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Movie } from "interfaces/movie";
import movieAPI from "services/movieAPI";

interface MoviesState {
  data: Movie[];
  isLoading: boolean;
  error: string;
}

const initialState: MoviesState = {
  data: [],
  isLoading: false,
  error: "",
};

export const getMovieList = createAsyncThunk(
  "movies/getMovieList",
  // Hàm này nhận vào 2 tham số:
  // - Tham số truyền vào khi dispatch action getMovieList: dispatch(getMovieList(params))
  // - ThunkAPI: là một object chứa các hàm của redux thunk như dispatch, getState,...
  async () => {
    try {
      const data = await movieAPI.getMovieList();
      // call API thành công return về data
      return data;
    } catch (error) {
      throw error;
    }
  }
);

const moviesSlice = createSlice({
  name: "movies", // namespace để tạo ra các action types
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getMovieList.pending, (state) => {
      // request đang được thực thi => set isLoading thành true để show loading ra giao diện
      return { ...state, isLoading: true };
    });
    builder.addCase(getMovieList.fulfilled, (state, { payload }) => {
      // payload được return từ hàm getMovieList
      return { ...state, isLoading: false, data: payload };
    });
    builder.addCase(getMovieList.rejected, (state, { error }) => {
      // error được throw từ hàm getMovieList
      return { ...state, isLoading: false, error: error.message as string };
    });
  },
});

export default moviesSlice.reducer;
