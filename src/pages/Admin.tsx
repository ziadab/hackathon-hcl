import React from "react";
import { useTitle } from "../hooks/UseTitle";
import { Link, Outlet } from "react-router-dom";

const Admin = () => {
  useTitle("Admin Panel");
  return (
    <div className="flex h-screen">
      {/* sidebar */}
      <div className="flex-[0.5] px-4 pt-2 border-r-[2px] border-gray-200 min-w-[200px]">
        {/* logo */}
        <p className="font-bold text-2xl text-left py-5">Library</p>

        <div className="flex flex-col items-center mt-20">
          {/* admin info */}
          <img
            className="rounded-full w-16 h-16 border-2 border-gray-700 p-2"
            src="https://icons.veryicon.com/png/o/miscellaneous/yuanql/icon-admin.png"
            alt="admin-icon"
          />
          <p className="text-lg font-bold text-gray-700">Name</p>

          <Link
            to="/admin/books"
            className="flex gap-3 mt-20 self-start items-center hover:bg-gray-200 w-full p-2 rounded-sm"
          >
            <img
              className="w-8 h-8"
              src="https://cdn0.iconfinder.com/data/icons/carbon-mobile-browser-1/48/reading_list-512.png"
              alt="books-icon"
            />
            <span className="text-lg font-bold text-gray-700">Books</span>
          </Link>
        </div>
      </div>
      <div className="flex-[2] p-4">
        <Outlet />
      </div>
    </div>
  );
};

export default Admin;
