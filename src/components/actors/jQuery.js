import React from 'react';
import { Popup } from 'semantic-ui-react';

const Jquery = () => {
  return (
    <Popup
      trigger={<i className="icon-jquery"></i>}
      content="jQuery: +10 devXP"
    />
  );
};

export default Jquery;