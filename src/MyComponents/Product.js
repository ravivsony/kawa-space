import React from "react";
import { useState, useEffect } from "react";
export const Product = () => {
  const [profile, setProfile] = useState([]);
  const [card, setCard] = useState();
  const getData = async () => {
    const response = await fetch(
      "https://randomuser.me/api/?inc=gender,name,nat,location,picture,email&results=20"
    );
    setProfile(await response.json());
  };

  let profileCard = (curElem) => {
    // console.log("its working");
    setCard(
      <div className="card text-center mb-3 m-auto w-75 p-3">
        <div className="row ">
          <div className="col-3 m-auto">
            <img
              src={curElem.picture.medium}
              className="rounded-circle "
              alt=""
            />
          </div>
          <div className="card-body col-9 d-flex flex-column align-items-start">
            <h1 style={{ color: "red" }}>
              <u>
                {" "}
                {curElem.name.title}. {curElem.name.first} {curElem.name.last}
              </u>
            </h1>

            <div style={{ fontSize: "0.8rem" }}>
              <span style={{ fontSize: "1rem", color: "blueviolet" }}>
                {curElem.location.street.number}
              </span>
              , {curElem.location.street.name}, {curElem.location.city},{" "}
              {curElem.location.state},<b> {curElem.location.country}</b>,{" "}
              {curElem.location.postcode}
            </div>
            <div style={{ fontSize: "0.8rem" }}>
              {curElem.location.timezone.offset},{" "}
              {curElem.location.timezone.description}
            </div>

            <span className="text-muted" style={{ fontSize: "0.8rem" }}>
              {" "}
              {curElem.gender}{" "}
            </span>
          </div>
        </div>
      </div>
    );
  };
  useEffect(() => {
    getData();
  }, []);

  if (profile.length === 0 || profile === null) {
    return <></>;
  } else {
    return (
      <>
        <div className="container mt-4">
          {card}
          <div className="row">
            {profile.results.map((curElem) => {
              return (
                <>
                  <div className=" yoyo col-6 col-md-3 mt-1 ">
                    <div
                      className="card  p-2"
                      onClick={() => {
                        profileCard(curElem);
                      }}
                    >
                      <div className=" gender d-flex flex-column justify-content-start text-muted">
                        <span>{curElem.gender} . NL</span>
                      </div>
                      <div className="name ">
                        {curElem.name.title} {curElem.name.first}{" "}
                        {curElem.name.last}
                      </div>

                      <span className="email mt-2">{curElem.email}</span>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </>
    );
  }
};
