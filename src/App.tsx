import { Routes, Route } from "react-router-dom";

import GlobalStyle from "GlobalStyle";
import MainTemplate from "template/MainTemplate";

import Home from "pages/Home";
import Movie from "pages/Movie";
import Login from "pages/Login";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainTemplate />}>
          <Route path="movies/:movieId" element={<Movie />} />
          <Route index element={<Home />} />
        </Route>

        <Route path="/login" element={<Login />} />

        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
      <GlobalStyle />
    </>
  );
}

export default App;
