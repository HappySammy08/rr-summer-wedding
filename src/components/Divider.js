import React from "react";
import Button from "@mui/material/Button";

import rose from "../assets/rose-red.png";
export default function Divider() {
  return (
    <div>
      <br />
      <div className="App-divider">
        <Button
          variant="outlined"
          component="a"
          href="https://forms.gle/Miai4EQafstdfP4D8"
          target="_blank" // opens in new tab
          rel="noopener noreferrer"
          color="#fff"
          size="large"
        >
          RSVP
        </Button>
      </div>
    </div>
  );
}
