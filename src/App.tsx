import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MainPage } from "./components/mainPage";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path={"/"} element={<MainPage />}></Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
