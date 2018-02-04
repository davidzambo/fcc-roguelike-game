import React from 'react';
import { Popup } from 'semantic-ui-react'

const Html = () => {
  return (
    <div>
      <Popup
        trigger={<i className="icon-html5"></i>}
        content="HTML5: +1 devXP"
      />
      
    </div>
  );
};

export default Html;