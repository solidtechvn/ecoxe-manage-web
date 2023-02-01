import { CContainer } from '@coreui/react-pro';
import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);

const TheContent = () => {
  return (
    <CContainer fluid className="px-0">
      <Suspense fallback={loading}>
        <Outlet />
      </Suspense>
    </CContainer>
  );
};

export default React.memo(TheContent);
