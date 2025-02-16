import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import Carousal from "../components/Carousal";

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (!user) {
        navigate("/login");
      } else {
        setUser(user);
      }
    });

    return unsubscribe;
  }, [navigate]);

  return (
    <>
      {/* Main Section */}
      <div className="h-auto bg-gray-100 flex flex-col items-center p-6">
        <header className="w-full max-w-4xl bg-white shadow-lg rounded-2xl p-8 text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Welcome to Hyperlocal Delivery</h1>
          <p className="text-lg text-gray-600">Browse our exclusive products and shop with ease!</p>
        </header>

        {user && (
          <div className="mt-4 p-4 bg-gray-100 rounded-md">
            <h3 className="text-lg font-semibold">Hello, {user.email.split("@")[0]}</h3>
          </div>
        )}

        <div className="mt-4 text-center">
          <h2 className="text-xl font-semibold">Browse our products and shop now!</h2>
          <p className="text-gray-600">Find everything you need with fast delivery.</p>
        </div>
      </div>

      {/* Announcement Banner */}
      <div className="w-full bg-yellow-300 text-center overflow-hidden py-1">
        <p className="text-lg font-semibold text-gray-800">
          🚀 Limited-time offers! Get up to 50% off on selected items. Shop now! 🛒
        </p>
      </div>

      {/* Carousel Section */}
      <div className="w-full mt-0">
        <Carousal />
      </div>
    </>
  );
};

export default Dashboard;
