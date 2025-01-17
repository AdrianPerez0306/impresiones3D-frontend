import {} from 'react';
import './buttonRed.css';

interface ButtonProps {
  label: string;
  onClick: () => void;
}

const ButtonRed: React.FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <div className="actions">
      <button className='button' onClick={onClick}>{label}</button>
    </div>
  );
};
export default ButtonRed;