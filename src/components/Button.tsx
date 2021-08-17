import './Button.css';
import React from 'react';

// type HtmlButtonProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
type ButtonProps = {
  id: string;
  text: string | number;
  onClick: () => void;
};

export default function Button(props: ButtonProps) {
  return (
    <button
      style={{ gridArea: props.id }}
      className="Button"
      onClick={props.onClick}
    >
      {props.text}
    </button>
  );
}
