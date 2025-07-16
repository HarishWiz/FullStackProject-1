import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { userAuth } from "../Context/AuthContext";

const Profile = () => {
  const navigate = useNavigate();
  const { user, logout } = userAuth();


  if (!user) return <p>Please Login</p>;
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen space-y-4">
      <div className="bg-amber-500 text-white rounded-full p-5 size-20 flex items-center justify-center text-4xl uppercase">
        {user.name.charAt(0)}
      </div>
      <h1 className="text-2xl font-semibold"> {user.name}</h1>
      <p className="text-gray-600">{user.email}</p>
      <button
        className="bg-red-500 px-6 py-2 rounded-md hover:bg-red-600 text-white mt-5"
        onClick={()=>{
            logout();
            navigate("/")
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default Profile;
