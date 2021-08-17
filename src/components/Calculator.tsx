import React, { useMemo, useState } from 'react';
import { Command, commands, operateCalculation } from '../logic';
import Button from './Button';
import './Calculator.css';
import { Display } from './Display';

const buttons = Object.entries(commands) as [Command, string | number][];

export default function Calculator() {
  const [commands, setCommands] = useState<Command[]>([]);

  const result = useMemo(() => {
    try {
      return operateCalculation(commands);
    } catch (error) {
      return `ERROR: ${error.message}`;
    }
  }, [commands]);

  return (
    <div className="Calculator">
      <Display content={result} />
      <Button id="reset" text="CE" onClick={() => setCommands([])}></Button>

      {buttons.map(([key, text]) => (
        <Button
          key={key}
          id={key}
          text={text}
          onClick={() => setCommands([...commands, key])}
        ></Button>
      ))}
    </div>
  );
}
