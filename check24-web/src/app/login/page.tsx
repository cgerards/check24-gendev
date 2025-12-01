"use client";

import { useState } from "react";
import Cookies from "js-cookie";
import MySwitch from "@/components/ui/MySwitch";
import MiniNavbar from "@/components/MiniNavbar";

import Tag from "@/components/ui/Tag";

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
              className="text-sm font-semibold text-checkblue hover:underline cursor-pointer pr-7"
            >
              Clear
            </button>
          </div>

          {/* 1 - Alice */}
          <div className="flex flex-col gap-1">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <label htmlFor="user-1" className="font-semibold text-gray-700">
                  Alice
                </label>
                <div className="flex items-center gap-1">
                  <Tag text="car-insurance" color="red" />
                </div>
              </div>

              <MySwitch
                label=""
                checked={selectedUser === 1}
                onChange={() => handleUserSelect(1)}
              />
            </div>


            {/* 2 - Bob */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <label htmlFor="user-2" className="font-semibold text-gray-700">
                  Bob
                </label>
                <div className="flex items-center gap-1">
                  <Tag text="internet-contract" color="blue" />
                  <Tag text="mobile-contract" color="blue" />
                </div>
              </div>

              <MySwitch
                label=""
                checked={selectedUser === 2}
                onChange={() => handleUserSelect(2)}
              />
            </div>

            {/* 3 - Charlie */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <label htmlFor="user-3" className="font-semibold text-gray-700">
                  Charlie
                </label>
                <div className="flex items-center gap-1">
                  <Tag text="flight" color="yellow" />
                  <Tag text="hotel" color="yellow" />
                  <Tag text="internet-contract" color="blue" />
                </div>
              </div>

              <MySwitch
                label=""
                checked={selectedUser === 3}
                onChange={() => handleUserSelect(3)}
              />
            </div>

            {/* 4 - Dave */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <label htmlFor="user-4" className="font-semibold text-gray-700">
                  Dave
                </label>
                <div className="flex items-center gap-1">
                  <Tag text="electricity" color="green" />
                  <Tag text="gas" color="green" />
                </div>
              </div>

              <MySwitch
                label=""
                checked={selectedUser === 4}
                onChange={() => handleUserSelect(4)}
              />
            </div>

            {/* */}
          </div>
        </div>
      </main>
    </div>
  );
}
