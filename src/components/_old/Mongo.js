import React from 'react';
import { Popup } from 'semantic-ui-react';

const Mongo = () => {
  return (
    <Popup
      trigger={<i className="icon-mongo"></i>}
      content="Mongo: +40 devXP"
    />
  );
};

export default Mongo;