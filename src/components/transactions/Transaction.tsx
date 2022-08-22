import React, { useState } from "react";

import EditForm from "../Forms/EditForm/EditForm";
import Button from "../UI/Button";

interface TransactionI {
  title: string;
  amount: string;
  state: string;
}

const Transaction: React.FC<TransactionI> = (props: TransactionI) => {
  const [formIsShown, setFormIsShown] = useState<boolean>(false);

  const toggleFormHandler = () => {
    setFormIsShown(true);
  };

  return (
    <section className="account">
      <div className="account-content-wrapper">
        <h3 className="account-title">{props.title}</h3>
        <p className="account-amount">{props.amount}</p>
        <p className="acount-amount-description">{props.state}</p>
      </div>
      <div className="account-content-wrapper cta">
        <Button className="transaction-button" label="View transaction button">
          View transactions
        </Button>
      </div>
    </section>
  );
};

export default Transaction;
