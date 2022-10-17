import React, {   useCallback  } from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import image from "../assets/default.png";
import { useParams } from "react-router-dom";


function getImage(account) {
  return account.attributes.image.url === "default.png"
    ? image
    : account.attributes.image.standard.url;
}

function Followers() {

  const { id } = useParams();

  const API_URL = `http://localhost:3000/api/v1/followers/${id}`;
  // const API_URL = `https://instagram-clone-pk.herokuapp.com/api/v1/followers/${id}`;

  const getAPIData = useCallback(() => {
    return axios.get(API_URL).then((response) => response.data);
  }, [API_URL]);




  const [followers, setFollowers] = useState([]);

  useEffect(() => {
    let mounted = true;
    getAPIData().then((items) => {
      // console.log(items);
      if (mounted) {
        setFollowers(items.data);
      }
    });
    return () => (mounted = false);
  }, [getAPIData]);

  // console.log(accounts);

  return (
    <div className="text-center">
      <h1 className="mt-5">All Followers</h1>
      <br />
      {console.log(followers)}
      {followers.length === 0 ? (
        <h4>Zero Followers</h4>
      ) : (
        followers.map((account) => {
          return (
            <div key={account.id} className="item">
              {/* {console.log(account)} */}
              <img
                src={getImage(account)}
                alt="profile_pic"
                className="my-image "
              />
              <h4>{account.attributes.name}</h4>
              <h4>{account.attributes.email}</h4>
            </div>
          );
        })
      )}
    </div>
  );
}

export default Followers;
