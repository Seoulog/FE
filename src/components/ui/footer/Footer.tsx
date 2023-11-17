import React from 'react';

import Logo from '../logo/Logo';

const Footer = () => {
  const onMoveClick = () => {
    window.location.href = '/login';
  };

  return (
    <footer className="w-full md:flex h-96 bg-neutral-100 justify-center items-center">
      <div className="w-full h-full flex flex-col md:flex-row justify-center items-center">
        <div className="w-full h-full max-w-3xl p-10 flex flex-col items-center md:items-start justify-between">
          <Logo withKorean size="sm" className="text-stone-400" />
          <div className="text-stone-400 font-bold">
            <p>
              <span className="font-inknut">Seoulog</span> | 서울로그 개발팀
            </p>
            <p className="mt-1 font-semibold">
              팀장 송수근 |{' '}
              <span>
                <a href="mailto:songsurl@naver.com" target="_blank">
                  songsurl@naver.com
                </a>
              </span>
            </p>
          </div>
          <div className="text-stone-400 font-extrasemibold font-inknut">
            <a href="https://github.com/Seoulog" target="_blank">
              <span>Github</span>
            </a>
            <span className="mx-1">|</span>
            <a
              href="https://seoul-log.notion.site/3ed55b62bdb94630ac05b09f87a34082?v=2ea0686aa28d4d0eaf337a297cafb7f1&pvs=4"
              target="_blank"
            >
              <span>Notion</span>
            </a>
          </div>
          <div className="text-stone-900 text-xs">
            <span>서비스 이용약관</span>
            <span className="mx-1">|</span>
            <span>개인정보 처리방침</span>
          </div>
        </div>
        <div className="pt-2 md:p-10 md:h-full flex flex-col justify-between items-end p-2 w-fit hover:-translate-y-0.5 transition-all">
          <button
            className="hidden md:flex rounded-xl text-slate-800 border border-slate-800 px-4 hover:bg-slate-800 hover:text-slate-200"
            onClick={onMoveClick}
          >
            로그인
          </button>
          <Logo />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
