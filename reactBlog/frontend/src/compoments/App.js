import React from 'react';
import 'antd/dist/antd.css';

import Header from './HeaderV4h';
import RecordedSessions from './RecordedSessions';
import Schendule from './Schendule';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <RecordedSessions />
        <Schendule />
      </div>
    );
  };
}

