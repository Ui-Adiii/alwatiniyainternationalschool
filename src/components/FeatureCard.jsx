import React from "react";

const FeatureCard = ({ idx, title, desc, Icon }) => {
  return (
    <div
      key={idx}
      className="bg-white rounded-xl border shadow-sm hover:shadow-lg transition p-6 text-center"
    >
      <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-green-100 mb-5">
        <Icon className="text-green-600 text-3xl" />
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-sm text-gray-600 leading-relaxed">{desc}</p>
    </div>
  );
};

export default FeatureCard;
