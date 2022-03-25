import React from "react";
import "./Contact.css";
import { Button } from "@material-ui/core";

const Contact = () => {
  return (
    <div className="contactContainer">
       
      <a className="mailBtn" href="mailto:akshu.akshata19@gmail.com">
        <Button>Contact: akshu.akshata19@gmail.com</Button>
      </a>
    </div>
  );
};

export default Contact;
