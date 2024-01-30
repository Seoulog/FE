import React, { type ReactElement } from 'react';
import { NavLink } from 'react-router-dom';

const BottomMenu = () => {
  return (
    <div className="lg:hidden fixed bottom-0 w-full h-20 bg-gradient-to-b from-[#6089CA] via-[#4755D3] to-[#5A2FD4] rounded-t-xl items-center justify-around">
      <nav className="w-full h-full">
        <ul className="w-full h-full flex items-center justify-around">
          <BottomMenuBtn
            to="/home"
            title="Home"
            icon={
              <svg
                width="32"
                height="30"
                viewBox="0 0 32 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  id="Vector"
                  d="M20.2 19.2H25.8L30 29H2L6.2 19.2H11.8M17.4 9.4C17.4 9.7713 17.2525 10.1274 16.9899 10.3899C16.7274 10.6525 16.3713 10.8 16 10.8C15.6287 10.8 15.2726 10.6525 15.0101 10.3899C14.7475 10.1274 14.6 9.7713 14.6 9.4C14.6 9.0287 14.7475 8.6726 15.0101 8.41005C15.2726 8.1475 15.6287 8 16 8C16.3713 8 16.7274 8.1475 16.9899 8.41005C17.2525 8.6726 17.4 9.0287 17.4 9.4ZM7.6 9.4C7.6 16.4 16 23.4 16 23.4C16 23.4 24.4 16.4 24.4 9.4C24.4 4.6162 20.6396 1 16 1C11.3604 1 7.6 4.6162 7.6 9.4Z"
                  stroke="#F2F2F2"
                  strokeWidth="2"
                />
              </svg>
            }
          />

          <BottomMenuBtn
            to="/pictures"
            title="Pictures"
            icon={
              <svg
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="Group">
                  <path
                    id="Vector"
                    d="M26.6667 1H3.33333C2.71449 1 2.121 1.24583 1.68342 1.68342C1.24583 2.121 1 2.71449 1 3.33333V26.6667C1 27.2855 1.24583 27.879 1.68342 28.3166C2.121 28.7542 2.71449 29 3.33333 29H26.6667C27.2855 29 27.879 28.7542 28.3166 28.3166C28.7542 27.879 29 27.2855 29 26.6667V3.33333C29 2.71449 28.7542 2.121 28.3166 1.68342C27.879 1.24583 27.2855 1 26.6667 1Z"
                    stroke="#F2F2F2"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    id="Vector_2"
                    d="M10.3332 14.2222C11.3646 14.2222 12.3538 13.8125 13.0831 13.0832C13.8124 12.3539 14.2221 11.3647 14.2221 10.3333C14.2221 9.30195 13.8124 8.3128 13.0831 7.58349C12.3538 6.85418 11.3646 6.44446 10.3332 6.44446C9.30183 6.44446 8.31267 6.85418 7.58337 7.58349C6.85406 8.3128 6.44434 9.30195 6.44434 10.3333C6.44434 11.3647 6.85406 12.3539 7.58337 13.0832C8.31267 13.8125 9.30183 14.2222 10.3332 14.2222ZM17.9477 16.7267C18.0951 16.5293 18.2872 16.3698 18.5083 16.2613C18.7294 16.1527 18.9731 16.0982 19.2194 16.1022C19.4657 16.1062 19.7075 16.1687 19.9249 16.2844C20.1423 16.4001 20.3291 16.5659 20.47 16.7679L27.295 26.5547C28.0137 27.586 27.2756 29 26.0194 29H8.77767L17.9477 16.7267Z"
                    stroke="#F2F2F2"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
              </svg>
            }
          />

          <BottomMenuBtn
            to="/albums"
            title="Albums"
            icon={
              <svg
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="Group">
                  <path
                    id="Vector"
                    d="M22.7778 1H2.55556C1.69645 1 1 1.69645 1 2.55556V22.7778C1 23.6369 1.69645 24.3333 2.55556 24.3333H22.7778C23.6369 24.3333 24.3333 23.6369 24.3333 22.7778V2.55556C24.3333 1.69645 23.6369 1 22.7778 1Z"
                    stroke="#F2F2F2"
                    strokeWidth="2"
                    strokeLinejoin="round"
                  />
                  <path
                    id="Vector_2"
                    d="M29 5.66666V26.6667C29 27.2855 28.7542 27.879 28.3166 28.3166C27.879 28.7542 27.2855 29 26.6667 29H5.66667M1 15.7778L6.95467 10.4842C7.24165 10.2291 7.61284 10.0892 7.99679 10.0914C8.38075 10.0935 8.75034 10.2376 9.03444 10.4959L16.5556 17.3333"
                    stroke="#F2F2F2"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    id="Vector_3"
                    d="M13.4444 14.2222L17.1661 11.1204C17.4352 10.8964 17.772 10.7696 18.122 10.7607C18.4721 10.7519 18.8149 10.8613 19.095 11.0714L24.3333 15M1 11.1111V17.3333M24.3333 11.1111V17.3333"
                    stroke="#F2F2F2"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
              </svg>
            }
          />

          <BottomMenuBtn
            to="profile"
            title="Profile"
            icon={
              <svg
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="Group">
                  <path
                    id="Vector"
                    d="M15 12.2C18.866 12.2 22 9.69279 22 6.6C22 3.50721 18.866 1 15 1C11.134 1 8 3.50721 8 6.6C8 9.69279 11.134 12.2 15 12.2Z"
                    stroke="#F2F2F2"
                    strokeWidth="2"
                  />
                  <path
                    id="Vector_2"
                    d="M28.9947 23.4C29 23.1704 29 22.9366 29 22.7C29 19.221 22.7315 16.4 15 16.4C7.2685 16.4 1 19.221 1 22.7C1 26.179 1 29 15 29C18.9042 29 21.72 28.7802 23.75 28.3882"
                    stroke="#F2F2F2"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </g>
              </svg>
            }
          />
        </ul>
      </nav>
    </div>
  );
};

export default BottomMenu;

interface Props {
  to: string;
  icon: ReactElement;
  title: string;
}

const BottomMenuBtn = ({ to, title, icon }: Props) => {
  return (
    <li>
      <NavLink
        to={to}
        className={({ isActive }) =>
          'flex flex-col w-16 h-16 items-center p-2 px-3 rounded-2xl hover:bg-cyan-300/20 hover:-translate-y-0.5 transition-all' +
          (isActive
            ? ' border-t-2 border-slate-50 border-b-2 border-b-slate-400'
            : '')
        }
      >
        {icon}
        <span className="font-inknut text-xs mt-1 text-white">{title}</span>
      </NavLink>
    </li>
  );
};
