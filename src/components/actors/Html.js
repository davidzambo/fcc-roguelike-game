import React from 'react';
import { Popup } from 'semantic-ui-react';

const Html = () => {
  return (
      <Popup
        trigger={<i className="icon-html5"></i>}
        content="HTML5: +1 devXP"
      />
  );
};

export default Html;