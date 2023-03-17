import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "../pages/Login/login";
import { Home } from "../pages/Home/home";
import { Register } from "../pages/Register/register";
import { DataProvider } from "../Context/dataContext";
import { PrivateRoute } from "./privateRoutes";

export function Router() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/home"
            element={
              <PrivateRoute>
                <Home/>
             </PrivateRoute>
            }
          />
          <Route path="/sing-up" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </DataProvider>
  );
}
