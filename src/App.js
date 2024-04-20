import logo from "./logo.svg";
import "./App.css";
import StoryList from "./component/StoryList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StoryDetails from "./component/StoryDetails";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<StoryList />} />
          <Route path="/story/:id" element={<StoryDetails />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
