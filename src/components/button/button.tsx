import {} from 'react';
import './button.css';

type ButtonColor = "green" | "blue" | "red" | "yellow"

interface ButtonProps {
  color: ButtonColor;
  onClick: () => void;
  children?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ color, onClick, children }) => {
  return (
    <button className={`button ${color}`} onClick={onClick}>
        {children}
    </button>
  );
};