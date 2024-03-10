import { HTMLProps, forwardRef, useState } from "react";
import EmailTip from "./EmailTip/EmailTip";
import NodeVector from "../../../lib/vectors/NodeVector/NodeVector";
import LinkedinLink from "../Home/HomeLinks/Links/LinkedinLink";
import GithubLink from "../Home/HomeLinks/Links/GithubLink";
import { Icons } from "../../../lib/icons/Icons";
import { CONTENT } from "../../../lib/content";
import "./contact.scss";
import { ScrollTopBtn } from "./ScrollTopBtn/ScrollTopBtn";

interface ContactProps extends HTMLProps<HTMLDivElement> {}

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
      <ScrollTopBtn />
      <NodeVector />
      <h2 className="contact-title">
        <span>{CONTENT.contact.number}</span>{CONTENT.contact.header}
      </h2>
      <div ref={ref} className="contact-info" {...props}>
        <div className="contact-paragraph">
          {CONTENT.contact.p1} <br/> {CONTENT.contact.p2}
        </div>
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
                aria-label={`Open email client to write an email to ${email}`}
              >
                <Icons.Envelope size={30}/>
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
