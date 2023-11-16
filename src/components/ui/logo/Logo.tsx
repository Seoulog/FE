import React from 'react';

export interface Props {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  withKorean?: boolean;
  className?: string;
}

const Logo = ({ size = 'md', withKorean = false, className }: Props) => {
  const fontSize = (size: string) => {
    switch (size) {
      case 'sm':
        return 'text-[18px]';
      case 'md':
        return 'text-[24px]';
      case 'lg':
        return 'text-[30px]';
      case 'xl':
        return 'text-[44px]';
    }
  };

  return (
    <a className={className} href="/">
      <span className={`font-inknut ${fontSize(size)} align-middle font-bold`}>
        Seoulog
        {withKorean && <span className="font-sans"> | 서울로그</span>}
      </span>
    </a>
  );
};

export default Logo;
