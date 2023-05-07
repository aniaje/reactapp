interface btnProps {
  children: string;
  color: string;
  onClick: () => void;
}

const Button = ({ children, onClick, color }: btnProps) => {
  return (
    <button className={"btn btn-" + color} color={color} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
