import React from "react";

export default function About({ data }) {
  const { name, bio, phone, email, resumedownload, image } = data ? data : "";
  const { street, city, state, zip } = data ? data.address : "";
  const profilepic = "images/" + image;

  return (
    <section id="about">
      <div className="row">
        <div className="three columns">
          <img
            className="profile-pic"
            src={profilepic}
            alt="Ekkarat Huakhao Profile Pic"
          />
        </div>
        <div className="nine columns main-col">
          <h2 className="texthead">About Me</h2>
          <p className="text">{bio}</p>
          <div className="row">
            <div className="columns contact-details">
              <h2 className="texthead">Contact Details</h2>
              <p className="address text">
                <span>{name}</span>
                <br />
                <span>
                  {street}
                  <br />
                  {city} {state}, {zip}
                </span>
                <br />
                <span>{phone}</span>
                <br />
                <span>{email}</span>
              </p>
            </div>
            <div className="columns download">
              <p>
                <a href={resumedownload} className="button">
                  <i className="fa fa-download"></i>Download Resume
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
