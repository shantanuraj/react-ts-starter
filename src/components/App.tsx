/**
 * App component
 */

import * as React from 'react';

import { classes, style } from 'typestyle';

import { ITimerState } from '../stores/timer';

import { normalizeEl } from '../utils/styles';

import RenderIf from '../utils/RenderIf';

import Time from './Time';

const mainContainer = style({
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
});

interface IAppProps extends ITimerState {
  startTimer();
  stopTimer();
}

const App = ({ isRunning, startTimer, stopTimer, time }: IAppProps) => (
  <div className={classes(normalizeEl, mainContainer)}>
    <main className={mainContainer}>
      <Time time={time} />
      <RenderIf
        cond={isRunning}
        ifComp={<button onClick={stopTimer}>Stop</button>}
        elseComp={<button onClick={startTimer}>Start</button>}
      />
    </main>
  </div>
);

export default App;
