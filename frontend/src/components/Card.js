import React, { useEffect, useState } from "react";

// Card Component
const Card = ({ title, image }) => {
  return (
    <div className="bg-white shadow-md rounded-2xl p-4 w-40 text-center">
      <img src={image} alt={title} className="w-20 h-20 mx-auto mb-2" />
      <p className="text-sm font-semibold">{title}</p>
    </div>
  );
};