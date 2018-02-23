import React from 'react';
import PropTypes from 'prop-types';
import { Message } from 'semantic-ui-react';

const MAXLOGNUMBER = 5;

const Logger = (props) => {
  const logLength = (props.length > MAXLOGNUMBER) ? MAXLOGNUMBER : props.length;
  const logs = props.logs.map((log, i) => {
    return <Message key={i} color={log.color}>{log.message}</Message>
  }).reverse().slice(0,MAXLOGNUMBER);
 
  return (
    <div>
      {logs}
    </div>
  );
}

export default Logger;
Logger.defaultProps = {
  logs: []
}