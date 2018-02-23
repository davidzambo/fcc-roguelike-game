import React from 'react';
import { Popup } from 'semantic-ui-react';

const Js = () => {
  return (
    <Popup
      trigger={<i className="icon-js"></i>}
      content="JavaScript: +20 devXP"
    />
  );
};

export default Js;