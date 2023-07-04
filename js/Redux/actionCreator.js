import {
  decrementAction,
  incrementAction,
  setZeroAction,
} from "./actionType.js";

const counterIncrement = () => {
  return { type: incrementAction };
};

const counterDecrement = () => {
  return { type: decrementAction };
};

const counterSetZero = () => {
  return { type: setZeroAction };
};

export { counterIncrement, counterDecrement, counterSetZero };
