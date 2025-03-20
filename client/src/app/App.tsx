import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import TaskManagementPage from "./pages/TaskManagementPage";
import Header from "./components/Header";

const App = () => {
  return (
    <div className="app-container">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/task/:id?" element={<TaskManagementPage />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
