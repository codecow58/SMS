import React from 'react';
import { RecoilRoot } from 'recoil';
import RoutesRoot from './Routes';
const Root: React.FunctionComponent = () => {
    return (
      <RecoilRoot>
        <RoutesRoot/>
      </RecoilRoot>
    );
}

export default Root;