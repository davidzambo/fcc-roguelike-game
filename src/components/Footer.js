import React from 'react';
import {Image} from 'semantic-ui-react';

const Footer = () => {
  const footerStyle = {
    fontSize: 12,
    letterSpacing: '-1px',
    color: 'white',
    position: 'absolute',
    bottom: 0,
    left: '50%',
  }
  return(
    <footer style={footerStyle}>
      <span>codedBy</span><Image src="https://www.dcmf.hu/images/dcmf-letters.png" href="https://www.dcmf.hu" size="mini" inline verticalAlign="middle"/>
    </footer>
  );
}

export default Footer;