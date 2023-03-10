import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setDepositAmount,
  setDepositRate,
  setDepositResult,
  setNumberOfDepositYears,
} from "../../redux/deposit-reducer";
import CalculateRow from "../CalculateRow/CalculateRow";
import Deposit from "./Deposit";

const DepositContainer = () => {
  const amount = useSelector(
    (state) => state.depositReducer.deposit.deposit_amount
  );
  const rate = useSelector(
    (state) => state.depositReducer.deposit.interest_rate
  );
  const years = useSelector(
    (state) => state.depositReducer.deposit.number_of_years
  );
  let depositResult = useSelector(
    (state) => state.depositReducer.deposit.result
  );
  const history = useSelector((state) => state.depositReducer.history);

  const dispatch = useDispatch();

  const setAmount = (deposit_amount) => {
    dispatch(setDepositAmount(deposit_amount));
  };

  const setRate = (interest_rate) => {
    dispatch(setDepositRate(interest_rate));
  };

  const setYears = (number_of_years) => {
    dispatch(setNumberOfDepositYears(number_of_years));
  };

  const countDeposit = () => {
    //a=p*(1+r/100)^t
    // let result = amount * Math.pow(1 + rate / 100, years);
    let result =
      amount * (Math.pow(1 + rate / 100, years) - 1) * (1 / (rate / 100)) +
      amount * Math.pow(1 + rate / 100, years);
    dispatch(setDepositResult(result.toFixed(2)));
  };

  return (
    <div>
      <CalculateRow
        setAmount={setAmount}
        setRate={setRate}
        setYears={setYears}
        countResult={countDeposit}
        amount={amount}
        rate={rate}
        years={years}
        history={[{ amount: 3000 }, { amount: 50000 }]}
      />
      <Deposit result={depositResult} />
    </div>
  );
};

export default DepositContainer;
