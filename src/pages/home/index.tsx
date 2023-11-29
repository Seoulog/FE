import React from 'react';

import Layout from '../../components/layout/Layout';

const Home = () => {
  return (
    <div>
      <Layout>
        <div className="w-full pt-8 lg:pt-[calc(7vh)] pb-2 pl-2 lg:sticky lg:top-0 bg-white">
          {/* 페이지 상세 상단영역  */}
        </div>
        <div className="pl-3 mt-2 min-h-[calc(90vh)]">Home</div>
      </Layout>
    </div>
  );
};

export default Home;
