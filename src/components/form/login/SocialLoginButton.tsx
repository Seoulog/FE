import React from 'react';
import { Link } from 'react-router-dom';

interface ISocialLoginButtonProps {
  to: string;
  additionalClassName?: string;
  src: string;
  alt: string;
}

const SocialLoginButton = ({
  to,
  additionalClassName,
  src,
  alt
}: ISocialLoginButtonProps) => {
  return (
    <Link to={to}>
      <button type="button" className={`w-16 h-16 ${additionalClassName}`}>
        <img src={src} alt={alt} />
      </button>
    </Link>
  );
};

export default SocialLoginButton;
