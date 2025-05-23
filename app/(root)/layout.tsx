import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="text-3xl">
      <h1>NAVBAR</h1>
      {children}
    </div>
  );
};

export default layout;
