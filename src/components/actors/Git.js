import React from 'react';
import { Popup } from 'semantic-ui-react'

const Git = () => {
  return (
    <Popup
      trigger={<i className="icon-git"></i>}
      content="Git: +40 devXP"
    />
  );
};

export default Git;