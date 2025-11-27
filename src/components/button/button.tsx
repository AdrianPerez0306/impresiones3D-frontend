import {} from 'react';
import './button.css';

type ButtonColor = "lighted" | "opaque" | "options" | 'add-remove' | 'action__delete' | 'action__search' | 'action__emptyCart' | 'action__confirm';

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