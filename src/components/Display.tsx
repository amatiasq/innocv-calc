import React from 'react';
import './Display.css';

interface DisplayProps {
  content: string;
}

export function Display(props: DisplayProps) {
  return <pre className="Display">{props.content}</pre>;
}
