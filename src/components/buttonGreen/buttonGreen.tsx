import {} from 'react';
import './buttonGreen.css';

interface ButtonProps {
  label: string;
  onClick: () => void;
}

const ButtonGreen: React.FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <div className="actions">
      <button className='buttonGren' onClick={onClick}>{label}</button>
    </div>
  );
};
export default ButtonGreen; 