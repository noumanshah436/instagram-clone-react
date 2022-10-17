import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import image from "../assets/default.png"


// const API_URL = "http://localhost:3000/api/v1/profile";
const API_URL = "https://instagram-clone-pk.herokuapp.com/api/v1/profile";

function getAPIData() {
  return axios.get(API_URL).then((response) => response.data);
}

function getImage(account) {
  return account.attributes.image.url === "default.png"
    ? image
    : account.attributes.image.standard.url;
}

function Accounts() {
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    let mounted = true;
    getAPIData().then((items) => {
      // console.log(items);
      if (mounted) {
        setAccounts(items.data);


      }
    });
    return () => (mounted = false);
  }, []);

  // console.log(accounts);

  return (
    <div className="text-center">
      <h1 className="mt-5">All Accounts</h1>

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
               <Link
                 className="btn btn-primary"
                 to={`/followers/${account.id}`}
               >
                 Followers
               </Link>

             </div>
           );

      })}
    </div>
  );
}

export default Accounts;
