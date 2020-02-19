import React from "react";
function ProfileJumbo({ children }) {
  return (
    <div
      style={{ height: 150, width:150, clear: "both", paddingTop: 120, textAlign: "center" }}
      className="profileJumbo"
    >
      {children}
    </div>
  );
}
export default ProfileJumbo;