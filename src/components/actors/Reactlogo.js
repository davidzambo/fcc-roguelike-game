import React from 'react';
import { Popup } from 'semantic-ui-react';

const Reactlogo = () => {
  return (
    <Popup
      trigger={<i className="icon-react"></i>}
      content="React: +40 devXP"
    />
  );
};

export default Reactlogo;