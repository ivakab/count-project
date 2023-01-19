const SET_AMOUNT = "SET_AMOUNT";
const SET_CREDIT_RATE = "SET_CREDIT_RATE";
const SET_NUMBER_OF_CREDIT_YEARS = "SET_NUMBER_OF_CREDIT_YEARS";
const SET_CREDIT_RESULT = "SET_CREDIT_RESULT";
const SET_LOAN_OVERPAYMENT = "SET_LOAN_OVERPAYMENT";
const SET_MOUNTHLY_PAYMENT = "SET_MOUNTHLY_PAYMENT";
const ADD_CALCULATIONS_TO_HISTORY = "ADD_CALCULATIONS_TO_HISTORY";
const DELETE_CALCULATION_FROM_HISTORY = "DELETE_CALCULATION_FROM_HISTORY";

let initialState = {
  credit: {
    amount: 0,
    interest_rate: 0,
    number_of_years: 0,
    loanAmount: 0,
    loanOverpayment: 0,
    mounthlyPayment: 0,
  },
  history: [],
};

const creditReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AMOUNT: {
      return {
        ...state,
        credit: { ...state.credit, amount: action.payload },
      };
    }
    case SET_CREDIT_RATE: {
      return {
        ...state,
        credit: { ...state.credit, interest_rate: action.payload },
      };
    }
    case SET_NUMBER_OF_CREDIT_YEARS: {
      return {
        ...state,
        credit: { ...state.credit, number_of_years: action.payload },
      };
    }
    case SET_CREDIT_RESULT: {
      return {
        ...state,
        credit: { ...state.credit, loanAmount: action.payload },
      };
    }
    case SET_LOAN_OVERPAYMENT: {
      return {
        ...state,
        credit: { ...state.credit, loanOverpayment: action.payload },
      };
    }
    case SET_MOUNTHLY_PAYMENT: {
      return {
        ...state,
        credit: { ...state.credit, mounthlyPayment: action.payload },
      };
    }
    case ADD_CALCULATIONS_TO_HISTORY: {
      state.history.push(action.payload);
      return {
        ...state,
        history: [...state.history],
      };
    }
    case DELETE_CALCULATION_FROM_HISTORY: {
      state.history.splice(action.payload, 1);
      return {
        ...state,
        history: [...state.history],
      };
    }
    default:
      return state;
  }
};

export const setAmount = (amount) => {
  return { type: SET_AMOUNT, payload: amount };
};

export const setInterestRate = (interest_rate) => {
  return { type: SET_CREDIT_RATE, payload: interest_rate };
};

export const setNumberOfYears = (number_of_years) => {
  return { type: SET_NUMBER_OF_CREDIT_YEARS, payload: number_of_years };
};

export const setCreditResult = (loanAmount) => {
  return { type: SET_CREDIT_RESULT, payload: loanAmount };
};

export const setLoanOverpayment = (loanOverpayment) => {
  return { type: SET_LOAN_OVERPAYMENT, payload: loanOverpayment };
};

export const setMonthlyPayment = (monthlyPayment) => {
  return { type: SET_MOUNTHLY_PAYMENT, payload: monthlyPayment };
};

export const addCalculationsToHistory = (creditCalculation) => {
  return { type: ADD_CALCULATIONS_TO_HISTORY, payload: creditCalculation };
};

export const deleteCalculationFromHistory = (index) => {
  return { type: DELETE_CALCULATION_FROM_HISTORY, payload: index };
};

export default creditReducer;
