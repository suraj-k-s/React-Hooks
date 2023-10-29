import { useReducer } from "react";
import Reducer from "./useReducer/reducer";
import LayoutEffect from "./useLayoutEffect/layoutEffect";
import ImperativeHandle from "./useImperativeHandle/ImperativeHandle";
import Transition from "./useTransition/Transition";
import Memo from "./useMemo/Memo";
import Callback from "./useCallback/parent";
import CustomParent from "./custom/parent";

const stateControl = (state, action) => {
  switch (action.type) {
    case "home":
      return { for: "", home: true };
    case "useReducer":
      return { for: "useReducer", home: false };
    case "useLayoutEffect":
      return { for: "useLayoutEffect", home: false };
    case "useImperativeHandle":
      return { for: "useImperativeHandle", home: false };
    case "useTransition":
      return { for: "useTransition", home: false };
    case "useMemo":
      return { for: "useMemo", home: false };
    case "useCallback":
      return { for: "useCallback", home: false };
    case "custom":
      return { for: "custom", home: false };
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(stateControl, {
    for: "",
    home: true,
  });
  return (
    <div className="App">
      {state.home ? (
        <>
          <br />
          <button
            onClick={() => {
              dispatch({ type: "useReducer" });
            }}
          >
            useReducer
          </button>

          <br />
          <br />

          <button
            onClick={() => {
              dispatch({ type: "useLayoutEffect" });
            }}
          >
            useLayoutEffect
          </button>

          <br />
          <br />

          <button
            onClick={() => {
              dispatch({ type: "useImperativeHandle" });
            }}
          >
            useImperativeHandle
          </button>

          <br />
          <br />

          <button
            onClick={() => {
              dispatch({ type: "useTransition" });
            }}
          >
            useTransition
          </button>

          <br />
          <br />

          <button
            onClick={() => {
              dispatch({ type: "useMemo" });
            }}
          >
            useMemo
          </button>

          <br />
          <br />

          <button
            onClick={() => {
              dispatch({ type: "useCallback" });
            }}
          >
            useCallback
          </button>

          <br />
          <br />

          <button
            onClick={() => {
              dispatch({ type: "custom" });
            }}
          >
            custom
          </button>
        </>
      ) : (
        <button
          onClick={() => {
            dispatch({ type: "home" });
          }}
        >
          Home
        </button>
      )}

      {state.for === "useReducer" && <Reducer />}

      {state.for === "useLayoutEffect" && <LayoutEffect />}

      {state.for === "useImperativeHandle" && <ImperativeHandle />}

      {state.for === "useTransition" && <Transition />}

      {state.for === "useMemo" && <Memo />}

      {state.for === "useCallback" && <Callback />}

      {state.for === "custom" && <CustomParent />}
    </div>
  );
}

export default App;
