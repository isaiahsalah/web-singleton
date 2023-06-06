import React from "react";
import { ContactBox } from "./ContactStyle";

interface Props {
  SocialMedia: any[];
}

const ContactComponent = (props: Props) => {
  return (
    <ContactBox>
      <div id="contact-container">
        <div className="contact">
          <div className="line-short"></div>
          <a className="contact-text" href="./" target="_blanck">
            Contacta con ventas
          </a>
          <div className="line-long"></div>
        </div>
      </div>
    </ContactBox>
  );
};

export default ContactComponent;
