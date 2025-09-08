import React from "react";

const MetaInfo = ({ title, value, suffix = "" }) => {
  return (
    <div className="flex justify-between border-b border-b-orange-500 mb-3 pb-2 text-xl">
      <h3>{title}:</h3> {value} {suffix}
    </div>
  );
};

export default MetaInfo;
