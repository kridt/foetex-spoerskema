import React from "react";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>
        Hvilket tidpunkt handler du oftest på?
      </h1>
      <div
        style={{
          width: "390px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Link
          style={{
            color: "black",
            fontWeight: "600",
            textDecoration: "none",
            padding: "1em 2em ",
            borderRadius: "5px",
            backgroundColor: "lightblue",
            marginRight: "1em",
            fontSize: "1.5em",
          }}
          to="/morning"
        >
          7-15
        </Link>
        <Link
          style={{
            color: "black",
            fontWeight: "600",
            textDecoration: "none",
            padding: "1em 2em ",
            borderRadius: "5px",
            backgroundColor: "lightblue",
            marginLeft: "1em",

            fontSize: "1.5em",
          }}
          to="/evening"
        >
          15-21
        </Link>
      </div>
    </div>
  );
}
