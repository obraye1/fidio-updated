/* eslint-disable react-hooks/rules-of-hooks */
// If you want to use this as a template for another page, copy entire file and rename "pageName". Use pageDefault variable in app.config.js appropriately.

import React from 'react';
// import { PageContainer } from '/modules/internal';
import { pageDefaults } from '/app.config';
import { getServerSidePropsDefault } from '/modules/utility.js';
import { termsOfServicePageData } from '../../customModules/features/seo-data';

const pageName = 'Terms';

export const page = (props) => {
  const useMenu = true;
  const useAppConfigLayout = true;
  return (
    <React.Fragment>
      {/* <PageContainer
        {...props}
        pageName={pageName}
        useMenu={useMenu}
        useAppConfigLayout={useAppConfigLayout}
      /> */}
      <HomeLayout
        props={useProps}
        pageName={pageName}
        pageData={termsOfServicePageData}
      >
        {components}
      </HomeLayout>
    </React.Fragment>
  );
};

export const getServerSideProps = async (context) => {
  return await getServerSidePropsDefault(context, pageDefaults[pageName]);
};

export default page;
