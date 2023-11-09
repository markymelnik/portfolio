import { forwardRef, useState } from 'react';
import './_contact.scss';
import EmailSVG from './contact_icons/email_svg';
import LinkedinSVG from './contact_icons/linkedin_svg';
import GithubSVG from './contact_icons/github_svg';
import EmailTip from './EmailTip/EmailTip';
import NodeVectorSVG from './NodeVector/NodeVectorSVG';

interface ContactProps extends React.HTMLProps<HTMLDivElement> {}

const Contact = forwardRef<HTMLDivElement, ContactProps>((props, ref) => {

  const email = `markymelnik@gmail.com`;

  const [tipText, setTipText] = useState<string>('Copy');

  const handleMouseEnter = () => setTipText('Copy');

  const handleMouseLeave = () => setTipText('');

  const handleEmailCopy = () => {
    navigator.clipboard.writeText(email).then(() => {
      setTipText("Copied!");
      setTimeout(() => {
        setTipText('');
      }, 1500);
    });
  };

  return (
    <section  className="contact-container" >
      <NodeVectorSVG />
      <h2 className="contact-title">
        <span>.03</span>Contact Me
      </h2>
      <div ref={ref} className="contact-info" {...props}>
        <p className="contact-paragraph">
          Feel free to reach out! I am currently seeking a full-time software
          role, internship, or any industry experience. I would love to talk
          about my projects!
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
                <EmailSVG />
              </a>
            </div>
            <div className="contact-option">
              <a
                href="https://www.linkedin.com/in/markmelnik/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-linkedin"
              >
                <LinkedinSVG />
              </a>
            </div>
            <div className="contact-option">
              <a
                href="https://www.github.com/markymelnik/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-github"
              >
                <GithubSVG />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default Contact;