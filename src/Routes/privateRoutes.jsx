import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { DataContext } from "../Context/dataContext";


export function PrivateRoute({children}){
    const {dataUser} = useContext(DataContext)
  console.log("aaaaaa "+JSON.stringify(dataUser));

  var loged = localStorage.getItem("login_key")
    
    return loged !== null ? children : <Navigate to="/" />
}