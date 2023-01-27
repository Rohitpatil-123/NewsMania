import React from "react";

function Card(Props) {
  return (
    <div className="box">
      <img
        src={Props.ims}
        alt="logo"
        style={{ width: "30%", padding: "20px" }}
      />

      <div className="text">
        <h3>{Props.heading}</h3>
        <p className="para1">{Props.para1}</p>
        <p className="para1">{Props.para2}</p>
        <p className="para1">{Props.para3}</p>
        <p className="para1">{Props.para4}</p>
        <button className="butsa">
          <a href={Props.lik}>Know more</a>
        </button>
      </div>
    </div>
  );
}

export default Card;
