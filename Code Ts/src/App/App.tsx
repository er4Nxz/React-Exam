import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Header from "../Pages/Header/Header";
import TaskList from "../Pages/TaskList/TaskList";
import TaskForm from "../Pages/TaskForm/TaskForm";
import Edit from "../Pages/TaskList/Edit/Edit";
import FormLogin from "../Pages/FormLogin/FormLogin";
import { createContext, useState, type FC } from "react";
import type { UserContextType } from "./App.types";

export const MyContext = createContext<UserContextType | null>(null);

const App: FC = () => {
  const [user, setUser] = useState<string | null>(null);
  const [email, setEmail] = useState<string | null>(null);

  const UserName: string | null = localStorage.getItem("UserName");
  return (
    <>
      <MyContext.Provider value={{ user, setUser, email, setEmail }}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route
              path="/"
              element={UserName ? <TaskList /> : <Navigate to={"/login"} />}
            />
            <Route path="/taskform" element={UserName ? <TaskForm /> : <Navigate to={"/login"} />} />
            <Route path="/edit/:id" element={<Edit />} />
            <Route
              path="/login"
              element={UserName ? <Navigate to={"/"} /> : <FormLogin />}
            />
          </Routes>
        </BrowserRouter>
      </MyContext.Provider>
    </>
  );
};

export default App;
