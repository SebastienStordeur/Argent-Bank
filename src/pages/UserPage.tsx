import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { authActions } from "../store/auth";
import transactions from "../data/transactions.json";

import Transaction from "../components/transactions/Transaction";
import Button from "../components/UI/Button";

const UserPage: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .post(
        "http://localhost:3001/api/v1/user/profile",
        {},
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        dispatch(
          authActions.getProfile({
            id: res.data.body.id,
            name: `${res.data.body.firstName} ${res.data.body.lastName}`,
            email: res.data.body.email,
          })
        );
      });
  }, [dispatch]);

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
