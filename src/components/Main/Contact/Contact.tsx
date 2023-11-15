import { forwardRef, useState } from "react";

import EmailIcon from "./EmailIcon";
import EmailTip from "./EmailTip/EmailTip";
import NodeVectorSVG from "./NodeVector/NodeVectorSVG";
import LinkedinLink from "../Links/LinkedinLink/LinkedinLink";
import GithubLink from "../Links/GIthubLink/GithubLink";
import "./_contact.scss";

interface ContactProps extends React.HTMLProps<HTMLDivElement> {}

const Contact = forwardRef<HTMLDivElement, ContactProps>((props, ref) => {
  const email = `markymelnik@gmail.com`;

  const [tipText, setTipText] = useState<string>("Copy");

  const handleMouseEnter = () => setTipText("Copy");

  const handleMouseLeave = () => setTipText("");

  const handleEmailCopy = () => {
    navigator.clipboard.writeText(email).then(() => {
      setTipText("Copied!");
      setTimeout(() => {
        setTipText("");
      }, 1500);
    });
  };

  return (
    <section className="contact-container">
      <NodeVectorSVG />
      <h2 className="contact-title">
        <span>.03</span>Contact Me
      </h2>
      <div ref={ref} className="contact-info" {...props}>
        <p className="contact-paragraph">
          Feel free to reach out! I am actively seeking a full-time software
          role, internship, or industry experience. I would love to talk about
          my journey thus far and dive into the details of my projects!
        </p>
        <div className="contact-selection">
          <div className="contact-top">
            <div
              className="contact-email-address"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onClick={handleEmailCopy}
            >
              {email}
              <EmailTip tipText={tipText} />
            </div>
          </div>
          <div className="contact-bottom">
            <div className="contact-option">
              <a
                href={`mailto:${email}`}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-email"
              >
                <EmailIcon />
              </a>
            </div>
            <div className="contact-option">
              <LinkedinLink />
            </div>
            <div className="contact-option">
              <GithubLink />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default Contact;
