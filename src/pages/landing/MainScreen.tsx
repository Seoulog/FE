import React from 'react';

import Logo from '../../components/ui/logo/Logo';
import EmptyImg from '../../assets/empty_seoul.png';

const MainScreen = () => {
  const onMoveClick = () => {
    window.location.href = '/login';
  };

  return (
    <div className="h-[calc(95vh)] w-full bg-gradient-to-b md:bg-gradient-to-br from-[#548BCF] to-[#E0DFDE] flex justify-center transition-all">
      <div className="w-full h-full max-w-6xl flex-col p-6 md:flex md:flex-row md:p-10">
        <div className="py-10 flex flex-col items-center md:items-start md:h-full md:w-1/2  md:justify-between lg:w-1/3">
          <Logo size="xl" className="flex text-slate-100" />
          <h2 className="md:grow mt-10 lg:mt-20 text-center  md:text-left transition-all">
            <span className="font-extrabold text-3xl lg:text-4xl text-slate-50">
              나만의 서울 지도를
            </span>
            <p className="font-extrabold text-3xl lg:text-4xl text-slate-50 mt-2">
              만들고 자랑해 보세요.
            </p>
          </h2>

          <button
            className="mt-10 border-2 border-slate-100 rounded-full text-xl font-bold px-6 text-slate-100 hover:bg-slate-100 hover:text-slate-950 p-2 w-fit hover:-translate-y-0.5 transition-all"
            onClick={onMoveClick}
          >
            이용하러 가기
          </button>
        </div>
        <div className="h-fit md:w-2/3  md:h-full flex justify-center items-center">
          <div className="h-fit max-h-[calc(50vh)] md:max-h-none flex justify-items-center aspect-auto">
            <img
              src={EmptyImg}
              alt="seoul_map_with_pictures"
              className="object-scale-down"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainScreen;
