import React from "react";

function Profile() {
  return (
    <h1>
      <aside>
        <div className="profile">
          <img className="profile__image" src="./profile-hex.png" />
        </div>
        <br />
        <div className="profile__name">
          <h2>
            <span className="profile--bold">Amy</span> Mansell
          </h2>
        </div>
      </aside>
    </h1>
  );
}

export default Profile;
