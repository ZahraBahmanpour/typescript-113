import { useEffect, useReducer, useState } from "react";
import "./App.css";
import Products from "./component/Products";
import Header from "./component/Header";
import { Product } from "./models/ProductModel";
import axios, { AxiosResponse } from "axios";

type StateType = {
  count: number;
};

enum ACTIONS {
  INCREMENT = "increment",
  DECREMENET = "decrement",
}
type ActionType = {
  type: ACTIONS;
  payload: number;
};
function reducer(state: StateType, action: ActionType) {
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return { count: state.count + action.payload };
    case ACTIONS.DECREMENET:
      return { count: state.count - action.payload };
    default:
      return state;
  }
}

function App() {
  // const [count, setCount] = useState<number>(0);
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const readProducts = async () => {
      try {
        const res: AxiosResponse<Product[]> = await axios.get(
          "http://localhost:4000/products"
        );
        setProducts(res.data);
      } catch (e) {
        console.log(e);
      }
    };
    readProducts();
  }, []);
  return (
    <>
      <Header>
        <div>
          <span style={{ color: "red" }}>Hellooooo</span>
        </div>
      </Header>
      {state.count}
      <Products
        products={products}
        color={"red"}
        // onChange={(value) => setCount(value)}
      />
      <button onClick={() => dispatch({ type: ACTIONS.INCREMENT, payload: 1 })}>
        +
      </button>
      <button
        onClick={() => dispatch({ type: ACTIONS.DECREMENET, payload: 1 })}
      >
        -
      </button>
    </>
  );
}

export default App;
