import React, { useEffect, useState } from "react";
import Story from "./story";
import axios from "axios";


function Stories() {
  const [stories, setStories] = useState([]);
  const API_URL = process.env.REACT_APP_ALL_STORIES;

  useEffect(() => {
    axios
      .get(API_URL)
      .then((response) => {
        setStories(response.data.data);
      })
      .catch((error) => console.log(error));
  }, [API_URL]);

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
