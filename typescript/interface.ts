enum CounterActionType {
  Increment = "INCREMENT",
  IncrementBy = "INCREMENT_BY",
}

interface IncrementAction {
  type: CounterActionType.Increment;
}

interface IncrementByAction {
  type: CounterActionType.IncrementBy;
  payload: number;
}

type CounterAction = IncrementAction | IncrementByAction;

function reducer(state: number, action: CounterAction) {
  switch (action.type) {
    case CounterActionType.Increment:
      return state + 1;
    case CounterActionType.IncrementBy:
      return state + action.payload;
    default:
      return state;
  }
}

const action: CounterAction = {
  type: CounterActionType.Increment,
}

const actionBy: CounterAction = {
  type: CounterActionType.IncrementBy,
  payload: 5,
}

let state = 0;
console.log(state);
state = reducer(state, action);
console.log(state);
state = reducer(state, actionBy);
console.log(state);
