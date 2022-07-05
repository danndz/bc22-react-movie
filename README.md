### Libraries
- Router: react-router-dom

### Project structure

- src
  - components/
    - Chứa các presentational components: Header, Sidebar, Button, Card,...
    - Các components này thường chỉ thuần về render UI, không chứa logic của ứng dụng: API,...

  - pages/
    - Chứa các container components: Home, MovieDetails, Checkout,...
    - Các components này sẽ dại diện cho 1 page hoặc 1 tập hợp một chức năng cụ thể của ứng dụng
    - Các components này sẽ chứa logic của ứng dụng: API, redux,...

  - template/
    - Chứa các component layout