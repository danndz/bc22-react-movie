// snippet: tsrafce
import Banner from "./Banner";
import MovieShowing from "./MovieShowing";

const Home = () => {
  return (
    <>
      <Banner />
      <MovieShowing />
    </>
  );
};

// import { increase, decrease, increaseByAmount } from "slices/counter";
// const Home = () => {
//   const counter = useSelector((state: RootState) => state.counter);
//   const dispatch = useDispatch();

//   const handleIncreaseByAmount = () => {
//     const amount = Number(prompt("Input your amount"));
//     dispatch(increaseByAmount(amount));
//   };

//   return (
//     <div>
//       <p>Count: {counter}</p>
//       <button onClick={() => dispatch(increase())}>Increase</button>
//       <button onClick={() => dispatch(decrease())}>Decrease</button>
//       <button onClick={handleIncreaseByAmount}>Increase By Amount</button>
//     </div>
//   );
// };

export default Home;
