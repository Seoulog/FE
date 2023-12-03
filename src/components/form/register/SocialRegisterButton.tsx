import React from 'react';
import { Link } from 'react-router-dom';

interface ISocialRegisterButtonProps {
  to: string;
  className?: string;
  src: string;
  alt: string;
}

const SocialRegisterButton = ({
  to,
  className,
  src,
  alt
}: ISocialRegisterButtonProps) => {
  return (
    <Link to={to}>
      <button type="button" className={`w-16 h-16 ${className}`}>
        <img src={src} alt={alt} />
      </button>
    </Link>
  );
};

export default SocialRegisterButton;
