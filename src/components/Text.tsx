import { useState } from "react";

interface Props {
  children: string;
  maxChars?: number;
}

const Text = ({ children, maxChars = 100 }: Props) => {
  const [expanded, setExpanded] = useState(false);

  if (children.length <= maxChars) return <p>{children}</p>;
  const text = expanded ? children : children.substring(0, maxChars);
  return (
    <div className="p-5">
      {text}...{" "}
      <button onClick={() => setExpanded(!expanded)}>
        {expanded ? "Less" : "more"}
      </button>
    </div>
  );
};

export default Text;
