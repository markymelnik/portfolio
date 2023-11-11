import "./_email-tip.scss";

type EmailTipProps = {
  tipText: string;
};

const EmailTip = ({ tipText }: EmailTipProps) => {
  return <span className="email-tip">{tipText}</span>;
};

export default EmailTip;
