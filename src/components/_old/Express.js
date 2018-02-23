import React from 'react';
import { Popup } from 'semantic-ui-react'

const Express = () => {
  return (
    <Popup
      trigger={<i className="icon-express"></i>}
      content="Express: +40 devXP"
    />
  );
};
export default Express;