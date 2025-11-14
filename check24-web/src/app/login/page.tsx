"use client";

import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import MySwitch from "@/components/MySwitch";
import MiniNavbar from "@/components/MiniNavbar";

export default function Login() {
  const [selectedUser, setSelectedUser] = useState(() => {
    const userCookie = Cookies.get("user");
    return userCookie ? parseInt(userCookie, 10) : 0;
  });


  const handleUserSelect = (userId: number) => {
    if (selectedUser === userId) {
      setSelectedUser(0);
      Cookies.remove("user");
    } else {
      setSelectedUser(userId);
      Cookies.set("user", userId.toString(), { path: "/" });
    }
  };


  const handleClear = () => {
    setSelectedUser(0);
    Cookies.remove("user");
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <MiniNavbar />

      <main className="flex grow items-center justify-center">
        <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-lg">
          <div className="flex items-center justify-between pb-5">
            <p className="font-bold underline">User selection</p>
            <button
              onClick={handleClear}
              className="text-sm font-semibold text-checkblue hover:underline cursor-pointer"
            >
              Clear
            </button>
          </div>

          <div className="flex flex-col gap-1">
            <div className="flex items-center justify-between">
              <label htmlFor="user-1" className="font-semibold text-gray-700">
                User 1
              </label>
              <MySwitch
                label=""
                checked={selectedUser === 1}
                onChange={() => handleUserSelect(1)}
              />
            </div>

            <div className="flex items-center justify-between">
              <label htmlFor="user-2" className="font-semibold text-gray-700">
                User 2
              </label>
              <MySwitch
                label=""
                checked={selectedUser === 2}
                onChange={() => handleUserSelect(2)}
              />
            </div>

            <div className="flex items-center justify-between">
              <label htmlFor="user-3" className="font-semibold text-gray-700">
                User 3
              </label>
              <MySwitch
                label=""
                checked={selectedUser === 3}
                onChange={() => handleUserSelect(3)}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
