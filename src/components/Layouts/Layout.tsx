import React from 'react'
import {
  Stack
} from "@fluentui/react/lib/Stack";
import AppHeader from '../Header';
import GoBack from '../GoBack';
const Layout : React.FunctionComponent = ({children}) => {


    return (
      <div>
          <Stack horizontal horizontalAlign="start">
            <GoBack />
          </Stack>
          <Stack horizontal horizontalAlign="end" styles={{root:{marginTop:'-30px'}}}>
            <AppHeader />
          </Stack>
          {children}
      </div>
    );
}


export default Layout;