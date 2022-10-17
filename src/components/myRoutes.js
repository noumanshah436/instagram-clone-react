import Stories from "./stories";
import ShowStory from "./showStory";
import Navbar from "./navbar";
import Accounts from "./allAccounts";
import Followers from "./followers";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function MyRoutes() {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />} />
          <Route path="/stories" element={<Stories />} />
          <Route path="/story/:id" element={<ShowStory />} />
          <Route path="/accounts" element={<Accounts />} />
          <Route path="/followers/:id" element={<Followers />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default MyRoutes;
