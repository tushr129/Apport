import logo from "./logo.svg";
import React, { useState, useEffect, Suspense, lazy } from "react";
import "./App.css";
import axios from "axios";

const Value = lazy(() => import("./Value"));

function App() {
  const [count, setCount] = useState();
  const [point, setp] = useState(0);

  const text = (event) => {
    if (Number(event.target.value) != Number.NaN) {
      axios({
        method: "put",
        url: " https://interview-8e4c5-default-rtdb.firebaseio.com/front-end.json",
        data: {
          Tushar: event.target.value,
        },
      });
    }
    setCount(event.target.value);
  };
  const chgn = () => {
    if (Number(count) == Number.NaN) return;

    let curr = Number(count);
    curr = curr - 1;
    curr = curr.toString(10);
    axios({
      method: "put",
      url: " https://interview-8e4c5-default-rtdb.firebaseio.com/front-end.json",
      data: {
        Tushar: curr,
      },
    });
    setCount(curr);
  };
  const chgp = () => {
    if (Number(count) == Number.NaN) return;
    let curr = Number(count);
    curr = curr + 1;

    if (curr == 1001) return;
    curr = curr.toString(10);
    axios({
      method: "put",
      url: " https://interview-8e4c5-default-rtdb.firebaseio.com/front-end.json",
      data: {
        Tushar: curr,
      },
    });
    setCount(curr);
  };
  useEffect(() => {
    if (point == 0) {
      setp(1);
      axios
        .get(
          " https://interview-8e4c5-default-rtdb.firebaseio.com/front-end/Tushar.json"
        )
        .then((res) => {
          if (res.data != undefined && Number(res.data) != Number.NaN) {
            setCount(Number(res.data));
          } else {
            setCount("1");
          }
        });
    }
  }, []);

  return (
    <div className="App">
      <Suspense fallback={<h1>Loading posts...</h1>}>
        <div
          style={{
            left: "40%",
            top: "40%",
            display: "flex",
            width: "auto",
            position: "absolute",
          }}
        >
          <button onClick={chgn} class="bt1">
            -
          </button>
          <input class="in" value={count} onChange={text}></input>
          <button onClick={chgp} class="bt2">
            +
          </button>
        </div>
        <Value v={count} />
      </Suspense>
    </div>
  );
}

export default App;
