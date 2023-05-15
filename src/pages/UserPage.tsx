import React, { useEffect, useState } from "react";
import { RootState } from "../store/index";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../store/auth";

import axios from "axios";
import transactions from "../data/transactions.json";

import Transaction from "../components/transactions/Transaction";
import Button from "../components/UI/Button";
import EditForm from "../components/Forms/EditForm/EditForm";

const UserPage: React.FC = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);
  const displayableName = useSelector((state: RootState) => state.auth.user.displayableName);
  const token = localStorage.getItem("token");

  const [isEditFormShown, setIsEditFormShown] = useState<boolean>(false);

  const showFormHandler = () => setIsEditFormShown(true);

  useEffect(() => {
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
          Welcome back <br></br> {displayableName}!
        </h1>
        <section className="edit-section">
          {isEditFormShown && <EditForm setState={setIsEditFormShown} />}
          {!isEditFormShown && (
            <Button className="edit-button" label="Edit name button" onClick={showFormHandler}>
              Edit Name
            </Button>
          )}
        </section>
      </div>
      {isAuthenticated && (
        <div>
          {transactions.map((transaction) => {
            return <Transaction {...transaction} key={Math.random().toString()} />;
          })}
        </div>
      )}
    </main>
  );
};

export default UserPage;
