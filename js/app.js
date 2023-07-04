const decBtn = document.querySelector(".dec");
const resetBtn = document.querySelector(".reset");
const incBtn = document.querySelector(".inc");

const numberElem = document.querySelector("#num");

import {
  counterDecrement,
  counterIncrement,
  counterSetZero,
} from "./Redux/actionCreator.js";
import {
  incrementAction,
  decrementAction,
  setZeroAction,
} from "./Redux/actionType.js";

const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case incrementAction:
      return state + 1;
    case decrementAction:
      return state - 1;
    case setZeroAction:
      return 0;
    default:
      return state;
  }
};

const store = Redux.createStore(counterReducer);

incBtn.addEventListener("click", () => {
  store.dispatch(counterIncrement());
  numberElem.textContent = store.getState();
});

decBtn.addEventListener("click", () => {
  store.dispatch(counterDecrement());
  numberElem.textContent = store.getState();
});

resetBtn.addEventListener("click", () => {
  store.dispatch(counterSetZero());
  numberElem.textContent = store.getState();
});
