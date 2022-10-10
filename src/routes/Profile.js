import React from "react";

import { Navigate } from "react-router-dom";

const Profile = () => {
  const navigate = Navigate();
  const click = (e) => {
      console.log("back to the home")
      navigate("/");
  }
  return (
    <div className="form">
      <div className="profile_form">
        <div className="profile_form_update">
          <input
            type="text"
            className="field"
            style={{ textAlign: "center" }}
          />
          <input
            type="button"
            value="Update Profile"
            className="field btn_lb"
          />
        </div>
        <input type="button" value="Log Out" className="field btn_r" onClick={click} />
      </div>
    </div>
  );
};

export default Profile;
