import React from "react";
import transactions from "../data/transactions.json";

import Transaction from "../components/transactions/Transaction";
import Button from "../components/UI/Button";

const UserPage: React.FC = () => {
  return (
    <main className="main bg-dark">
      <div className="header">
        <h1>
          Welcome back <br></br> NOM PRENOM
        </h1>
        <Button className="edit-button" label="Edit name button">
          Edit Name
        </Button>
      </div>
      {transactions.map((transaction) => {
        return <Transaction {...transaction} key={Math.random().toString()} />;
      })}
    </main>
  );
};

export default UserPage;
