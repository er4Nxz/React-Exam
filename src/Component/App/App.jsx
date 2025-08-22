import { BrowserRouter, Form, Navigate, Route, Routes } from "react-router-dom";
import Header from "../Pages/Header/Header";
import TaskList from "../Pages/TaskList/TaskList";
import TaskForm from "../Pages/TaskForm/TaskForm";
import Edit from "../Pages/TaskList/Edit/Edit";
import FormLogin from "../Pages/FormLogin/FormLogin";
import React, { useState } from "react";

export const MyContext = React.createContext();

const App = () => {
  const [user, setUser] = useState("Login");
  const [email, setEmail] = useState("");
  return (
    <>
      <MyContext.Provider value={{ user, setUser, email, setEmail }}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<TaskList />} />
            <Route path="/TaskForm" element={<TaskForm />} />
            <Route path="/Edit/:id" element={<Edit />} />
            <Route path="/login" element={<FormLogin />} />
          </Routes>
        </BrowserRouter>
      </MyContext.Provider>
    </>
  );
};

export default App;
