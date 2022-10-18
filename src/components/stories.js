import React from "react";
import Story from "./story"
import axios from "axios";
import { useEffect, useState } from "react";

// const API_URL = "http://localhost:3000/api/v1/stories";
const API_URL = "https://instagram-clone-pk.herokuapp.com/api/v1/stories";

function getAPIData() {
  return axios.get(API_URL).then((response) => response.data);
}

function Stories() {

  const [stories, setStories] = useState([]);

  useEffect(() => {
    let mounted = true;
    getAPIData().then((items) => { 
      if (mounted) {
        setStories(items.data);
      }
    });
    return () => (mounted = false);
  }, []);

  console.log(stories);
  return (
    <div className="text-center">
      <h1 className="mt-5">All Stories</h1>
      {stories.map((story) => {
        return (
          <div key={story.id} className="my-5">
            <Story story={story} />
          </div>
        );
      })}
    </div>
  );
}

export default Stories;
