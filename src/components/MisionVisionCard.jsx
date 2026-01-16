import React from "react";

const MisionVisionCard = ({ title, description, Icon }) => {
  return (
    <div className="bg-white border rounded-xl p-6 text-center shadow-sm hover:shadow-md transition">
      <Icon className="text-green-600 text-4xl mx-auto mb-4" />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-600">
        {description}
      </p>
    </div>
  );
};

export default MisionVisionCard;
