import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setCreditResult,
  setInterestRate,
  setAmount,
  setNumberOfYears,
  setLoanOverpayment,
  setMonthlyPayment,
  addCalculationsToHistory,
} from "../../redux/credit-reducer";
import CalculateRow from "../CalculateRow/CalculateRow";
import Credit from "./Credit";

const CreditContainer = () => {
  const amount = useSelector((state) => state.creditReducer.credit.amount);
  const rate = useSelector((state) => state.creditReducer.credit.interest_rate);
  const years = useSelector(
    (state) => state.creditReducer.credit.number_of_years
  );
  let mounthlyPayment = useSelector(
    (state) => state.creditReducer.credit.mounthlyPayment
  );
  let loanAmount = useSelector(
    (state) => state.creditReducer.credit.loanAmount
  );
  let loanOverpayment = useSelector(
    (state) => state.creditReducer.credit.loanOverpayment
  );
  const history = useSelector((state) => state.creditReducer.history);

  const dispatch = useDispatch();

  const setLoanAmount = (amount) => {
    dispatch(setAmount(amount));
  };

  const setRate = (interest_rate) => {
    dispatch(setInterestRate(interest_rate));
  };

  const setYears = (number_of_years) => {
    dispatch(setNumberOfYears(number_of_years));
  };

  const countResult = () => {
    let mounthly_percent = rate / 12 / 100;
    let numbers_of_mounth = years * 12;
    let degree = Math.pow(1 + mounthly_percent, numbers_of_mounth);
    if (!mounthly_percent && numbers_of_mounth) {
      dispatch(setMonthlyPayment(amount / numbers_of_mounth));
      dispatch(setCreditResult(amount));
      dispatch(setLoanOverpayment(0));
    } else if (!numbers_of_mounth) {
      dispatch(setMonthlyPayment(amount));
      dispatch(setCreditResult(amount));
      dispatch(setLoanOverpayment(0));
    } else {
      let mounthly_payment =
        amount * (mounthly_percent + mounthly_percent / (degree - 1));
      dispatch(setMonthlyPayment(mounthly_payment.toFixed(2)));

      let loanAmount = mounthly_payment * numbers_of_mounth;
      dispatch(setCreditResult(loanAmount.toFixed(2)));

      let loanOverpayment = loanAmount - amount;
      dispatch(setLoanOverpayment(loanOverpayment.toFixed(2)));

      let creditCalculation = {
        amount: amount,
        interest_rate: rate,
        number_of_years: years,
        loanAmount: loanAmount.toFixed(2),
        loanOverpayment: loanOverpayment.toFixed(2),
        mounthlyPayment: mounthly_payment.toFixed(2),
      };
      dispatch(addCalculationsToHistory(creditCalculation));
    }
  };

  return (
    <div>
      <CalculateRow
        setAmount={setLoanAmount}
        setRate={setRate}
        setYears={setYears}
        countResult={countResult}
        amount={amount}
        rate={rate}
        years={years}
        history={history}
      />
      <Credit
        mounthlyPayment={mounthlyPayment}
        loanAmount={loanAmount}
        loanOverpayment={loanOverpayment}
      />
    </div>
  );
};

export default CreditContainer;
