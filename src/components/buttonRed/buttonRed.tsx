import {} from 'react';
import './buttonRed.css';

interface ButtonProps {
  label: string;
  onClick: () => void;
}

const ButtonRed: React.FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <div className="actions">
      <button className='buttonRed' onClick={onClick}>{label}</button>
    </div>
  );
};
export default ButtonRed;