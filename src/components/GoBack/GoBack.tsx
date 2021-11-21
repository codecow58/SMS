import * as React from 'react';
import {useNavigate} from 'react-router-dom'

import { IconButton } from "@fluentui/react";

const GoBack: React.FunctionComponent = () => {
  const navigate = useNavigate();

  return (
    <IconButton
      onClick={() => navigate("/home")}
      iconProps={{ iconName: "ChromeBack" }}
    />
  );
};


export default GoBack;