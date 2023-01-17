const SET_DEPOSIT_AMOUNT = "SET_DEPOSIT_AMOUNT";
const SET_DEPOSIT_RATE = "SET_DEPOSIT_RATE";
const SET_NUMBER_OF_DEPOSIT_YEARS = "SET_NUMBER_OF_DEPOSIT_YEARS";
const SET_DEPOSIT_RESULT = "SET_DEPOSIT_RESULT";

let initialState = {
  deposit: {
    deposit_amount: 10,
    interest_rate: 5,
    number_of_years: 4,
    result: 0,
  },
};

const depositReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DEPOSIT_AMOUNT: {
      return {
        ...state,
        deposit: { ...state.deposit, deposit_amount: action.payload },
      };
    }
    case SET_DEPOSIT_RATE: {
      return {
        ...state,
        deposit: { ...state.deposit, interest_rate: action.payload },
      };
    }
    case SET_NUMBER_OF_DEPOSIT_YEARS: {
      return {
        ...state,
        deposit: { ...state.deposit, number_of_years: action.payload },
      };
    }
    case SET_DEPOSIT_RESULT: {
      return {
        ...state,
        deposit: { ...state.deposit, result: action.payload },
      };
    }
    default:
      return state;
  }
};

export const setDepositAmount = (deposit_amount) => {
  return { type: SET_DEPOSIT_AMOUNT, payload: deposit_amount };
};

export const setDepositRate = (interest_rate) => {
  return { type: SET_DEPOSIT_RATE, payload: interest_rate };
};

export const setNumberOfDepositYears = (number_of_years) => {
  return { type: SET_NUMBER_OF_DEPOSIT_YEARS, payload: number_of_years };
};

export const setDepositResult = (result) => {
  return { type: SET_DEPOSIT_RESULT, payload: result };
};

export default depositReducer;
