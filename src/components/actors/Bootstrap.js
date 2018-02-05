import React from 'react';
import { Popup } from 'semantic-ui-react';


const Bootstrap = () => {
  return (
    <Popup
      trigger={<i className="icon-bootstrap"></i>}
      content="Bootstrap: +5 devXP"
    />
  );
};

export default Bootstrap;