import React from 'react';
import { Popup } from 'semantic-ui-react';

const Sass = () => {
  return (
    <Popup
      trigger={<i className="icon-sass"></i>}
      content="Sass: +25 devXP"
    />
  );
};

export default Sass;