import styles from "./Button.module.css";

interface btnProps {
  children: string;
  color?: "primary" | "secondary";
  onClick: () => void;
}

const Button = ({ children, color = "primary", onClick }: btnProps) => {
  return (
    <button
      className={[styles.btn, styles["btn-" + color]].join()}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
