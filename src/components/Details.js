import React from "react";
import { Link } from "react-router-dom";
export default function Details() {
  return (
    <div>
      <div className="App-details">
        <p>
          <b>Saturday, 18th of January 2025</b>
          <br />
          <br />

          <a
            href="https://maps.app.goo.gl/KVfH9yGwUXobqWNv5"
            target="_blank"
            rel="noopener noreferrer"
          >
            <b>Our Lady of Victories Church</b>
            <br />

            <span>2 Cannon, Quezon City, 1112 Metro Manila</span>
          </a>
          <br />
          <br />
          <a
            href="https://maps.app.goo.gl/rBdccKnPVekYGqsQ9"
            target="_blank"
            rel="noopener noreferrer"
          >
            <b>Meyer's Place</b>
            <br />
            <span>Dapitan St, Quezon City, Metro Manila</span>
          </a>
          <br />
          <br />
          <b>Formal Invitation to follow</b>
        </p>
      </div>
    </div>
  );
}
