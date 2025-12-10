"use client";

import styles from "./Button.module.css";
import tertiaryButtonStyles from "./TertiaryButton.module.css";
import React from "react";

type Props = {
  text: string;
  onClickAction?: React.MouseEventHandler<HTMLButtonElement>;
};

export default function TertiaryButton({ text, onClickAction }: Props) {
  return (
    <button
      onClick={onClickAction}
      className={[styles.button, tertiaryButtonStyles.button].join(" ")}
    >
      {text}
    </button>
  );
}
