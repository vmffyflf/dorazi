import React from "react";
import { FaTwitter, FaUserAlt } from "react-icons/fa";

const Profile = () => {
  return (
    <div className="form">
      <div className="icon_align">
        <FaTwitter className="twt_icon sz_30" />
        <FaUserAlt className="twt_icon sz_30" />
      </div>
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
        <input type="button" value="Log Out" className="field btn_r" />
      </div>
    </div>
  );
};

export default Profile;
