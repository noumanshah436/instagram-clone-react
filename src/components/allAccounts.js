import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import image from "../assets/default.png";
import Spinner from "./spinner";

function getImage(account) {
  return account.attributes.image.url === "default.png"
  ? image
  : account.attributes.image.standard.url;
}

function Accounts() {
  const [accounts, setAccounts] = useState([]);
  const API_URL = process.env.REACT_APP_ALL_ACCOUNTS;

  useEffect(() => {
    axios
      .get(API_URL)
      .then((response) => {
        setAccounts(response.data.data);
      })

      .catch((error) => console.log(error));
  }, [API_URL]);

  return (
    <div className="text-center">
      <h1 className="mt-5">All Accounts</h1>
      <Spinner accounts={accounts} />
      {accounts.map((account) => {
        return (
          <div key={account.id} className="item">
            {/* {console.log(account)} */}
            <img
              src={getImage(account)}
              alt="profile_pic"
              className="my-image "
            />
            <h4>{account.attributes.name}</h4>
            <Link className="btn btn-primary" to={`/followers/${account.id}`}>
              Followers
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default Accounts;
