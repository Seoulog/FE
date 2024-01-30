import React, { type ReactElement } from 'react';
import { NavLink } from 'react-router-dom';

import Logo from '../logo/Logo';

const LeftMenu = () => {
  const nickname = 'wnduq';
  const percentage = '24.7';
  return (
    <div className="hidden lg:flex fixed left-0 h-screen min-w-[calc(180px)] w-[calc(20vw)] max-w-[calc(200px)] bg-transparent items-center ">
      <div className="w-full h-5/6 bg-gradient-to-b from-[#6089CA] via-[#4755D3] to-[#5A2FD4] rounded-r-xl shadow-2xl">
        <div className="w-full h-full py-4 flex flex-col justify-between items-center">
          <div className="w-full py-4 flex flex-col items-center">
            <h1>
              <Logo size="lg" className="text-white" />
            </h1>
            <div className="mt-8 p-2 rounded-full bg-slate-100/10">
              <h3>
                <span className="text-white text-sm">
                  {nickname}님, {percentage}% 완성
                </span>
              </h3>
            </div>
          </div>
          <nav className="w-full transition-all">
            <ul className="w-full h-full flex flex-col items-start justify-start gap-8">
              <LeftMenuBtn
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
              <LeftMenuBtn
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
              <LeftMenuBtn
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
              <LeftMenuBtn
                to="/profile"
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
          <div className="flex items-center p-2 px-3 rounded-2xl">
            <button className="flex group items-center transition-all">
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="group-hover:-translate-x-0.5 transition-all"
              >
                <path
                  id="Vector"
                  d="M11.3195 27.1071C11.3195 27.3442 11.2253 27.5715 11.0577 27.739C10.8901 27.9066 10.6628 28.0008 10.4258 28.0008H2.08517C1.53214 28.0008 1.00178 27.7811 0.610731 27.3901C0.219687 26.999 0 26.4686 0 25.9156V2.08517C0 1.53214 0.219687 1.00178 0.610731 0.610731C1.00178 0.219687 1.53214 0 2.08517 0H10.4258C10.6628 0 10.8901 0.0941512 11.0577 0.261742C11.2253 0.429332 11.3195 0.656633 11.3195 0.893642C11.3195 1.13065 11.2253 1.35795 11.0577 1.52554C10.8901 1.69313 10.6628 1.78728 10.4258 1.78728H2.08517C2.00616 1.78728 1.93039 1.81867 1.87453 1.87453C1.81867 1.93039 1.78728 2.00616 1.78728 2.08517V25.9156C1.78728 25.9946 1.81867 26.0704 1.87453 26.1263C1.93039 26.1821 2.00616 26.2135 2.08517 26.2135H10.4258C10.6628 26.2135 10.8901 26.3077 11.0577 26.4752C11.2253 26.6428 11.3195 26.8701 11.3195 27.1071ZM27.7387 13.3689L21.781 7.41127C21.6116 7.25342 21.3876 7.16748 21.1561 7.17157C20.9245 7.17565 20.7037 7.26944 20.5399 7.43317C20.3762 7.5969 20.2824 7.81779 20.2783 8.04931C20.2742 8.28082 20.3602 8.50488 20.518 8.67429L24.949 13.1068H10.4258C10.1888 13.1068 9.96152 13.2009 9.79393 13.3685C9.62633 13.5361 9.53218 13.7634 9.53218 14.0004C9.53218 14.2374 9.62633 14.4647 9.79393 14.6323C9.96152 14.7999 10.1888 14.894 10.4258 14.894H24.949L20.518 19.3265C20.4302 19.4083 20.3598 19.507 20.311 19.6166C20.2621 19.7262 20.2359 19.8445 20.2337 19.9645C20.2316 20.0845 20.2537 20.2037 20.2986 20.315C20.3436 20.4263 20.4105 20.5273 20.4953 20.6122C20.5802 20.6971 20.6813 20.764 20.7926 20.8089C20.9038 20.8538 21.023 20.8759 21.143 20.8738C21.263 20.8717 21.3813 20.8454 21.4909 20.7966C21.6006 20.7477 21.6992 20.6773 21.781 20.5895L27.7387 14.6319C27.906 14.4643 28 14.2372 28 14.0004C28 13.7636 27.906 13.5364 27.7387 13.3689Z"
                  fill="#E0DFDE"
                />
              </svg>
              <span className="text-sm ml-4 text-white group-hover:font-bold group-hover:text-md transition-all">
                Logout
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftMenu;

interface Props {
  to: string;
  icon: ReactElement;
  title: string;
}

const LeftMenuBtn = ({ to, title, icon }: Props) => {
  return (
    <li className="w-full pr-4">
      <NavLink
        to={to}
        className={({ isActive, isPending }) =>
          'w-full h-full flex items-center p-3 pl-6 rounded-r-full hover:bg-slate-200/40 ' +
          (isActive ? 'bg-slate-200/25' : '')
        }
      >
        {icon}

        <span className="font-inknut text-lg ml-4 text-white">{title}</span>
      </NavLink>
    </li>
  );
};
