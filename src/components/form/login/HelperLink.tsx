import React from 'react';
import { Link } from 'react-router-dom';

interface IHelperTextProps {
  to: string;
  content: string;
}

const HelperLink = ({ to, content }: IHelperTextProps) => {
  return (
    <Link to={to} className="hover:underline hover:underline-offset-4">
      <p className="text-[#A5A3A4] text-sm">{content}</p>
    </Link>
  );
};

export default HelperLink;
