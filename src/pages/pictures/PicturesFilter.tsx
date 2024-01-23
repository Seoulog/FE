import React, { useState } from 'react';

interface PicturesFilterProps {
  handleFilter: () => void;
}

const PicturesFilter = ({ handleFilter }: PicturesFilterProps) => {
  const [onClick, setOnClick] = useState(false);

  const handleButtonClick = () => {
    setOnClick(!onClick);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="relative flex items-center">
        <p className="text-xl text-[#5b4642] fond-semibold">정렬기준</p>
        <div className="flex items-center px-1 ml-2 rounded-lg hover:bg-slate-100">
          <button
            className="flex items-center transition-all"
            onClick={handleButtonClick}
          >
            <svg
              width="38"
              height="38"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                id="Vector"
                d="M2 7a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1zm0 5a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1zm1 4a1 1 0 1 0 0 2h10a1 1 0 1 0 0-2H3z"
                fill="#5B4642"
              />
            </svg>
          </button>
        </div>
      </div>
      <div
        className={`${
          onClick ? 'opacity-100' : 'opacity-0'
        } absolute mt-10 right-5 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-40 transition-opacity`}
        onClick={handleButtonClick}
      >
        <ul className="py-2 text-lg">
          <FilterBtn title="최신순" value="Latest" onClick={handleFilter} />
          <FilterBtn
            title="오래된 순"
            value="Earliest"
            onClick={handleFilter}
          />
        </ul>
      </div>
    </div>
  );
};

export default PicturesFilter;

interface Props {
  title: string;
  value: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const FilterBtn = ({ title, value, onClick }: Props) => {
  return (
    <li className="w-full">
      <button
        className="w-full px-4 py-2 hover:bg-slate-100 text-left text-[#5b4642]"
        value={value}
        onClick={onClick}
      >
        {title}
      </button>
    </li>
  );
};
