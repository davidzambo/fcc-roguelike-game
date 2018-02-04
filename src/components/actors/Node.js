import React from 'react';
import { Popup } from 'semantic-ui-react';

const NodeJs = () => {
  return (
    <Popup
      trigger={<i className="icon-nodejs"></i>}
      content="NodeJS: +40 devXP"
    />
  );
};

export default NodeJs;