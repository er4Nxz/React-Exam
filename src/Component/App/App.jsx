import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../Pages/Header/Header";
import TaskList from "../Pages/TaskList/TaskList";
import TaskForm from "../Pages/TaskForm/TaskForm";
import Edit from "../Pages/TaskList/Edit/Edit";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<TaskList />} />
          <Route path="/TaskForm" element={<TaskForm />} />
          <Route path="/Edit/:id" element={<Edit />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
