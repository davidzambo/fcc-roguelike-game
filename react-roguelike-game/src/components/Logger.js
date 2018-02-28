import React from 'react';
import { Segment } from 'semantic-ui-react';

const MAXLOGNUMBER = 3;

const Logger = (props) => {
  const logs = props.logs.map((log, i) => {
    return <Segment key={i} inverted raised color={log.color}>{log.message}</Segment>
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