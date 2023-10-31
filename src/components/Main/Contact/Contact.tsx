import { forwardRef } from 'react';
import './_contact.scss';
import EmailSVG from './contact_icons/email_svg';
import LinkedinSVG from './contact_icons/linkedin_svg';
import GithubSVG from './contact_icons/github_svg';

interface ContactProps extends React.HTMLProps<HTMLDivElement> {}

const Contact = forwardRef<HTMLDivElement, ContactProps>((props, ref) => {

  return (
    <section ref={ref} className="contact-container" {...props}>
      <h2 className="contact-title"><span>.04</span>Contact</h2>
      <div className="contact-selection">
        <div className="contact-top">
          <div className="contact-email-address">markymelnik@gmail.com</div>
        </div>
        <div className="contact-bottom">
          <div className="contact-option">
            <a
              href="https://www.example.com/"
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
    </section>
  );
});

export default Contact;