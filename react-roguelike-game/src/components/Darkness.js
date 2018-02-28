import React from 'react';

const Darkness = (props) => {
  const color = (props.light) ? 'transparent' : '#1B1C1D';
  const darknessStyle = {
    backgroundImage: 'radial-gradient(circle 100px at ' + props.position.x * 25 +'px ' + props.position.y * 25 + 'px, transparent, ' + color + ')',
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    zIndex: 10,
    pointerEvents: 'none',
  }
  return (
    <div style={darknessStyle}>
    </div>
  );
}

export default Darkness;
Darkness.defaultProps = {
  x: 0,
  y: 0,
}