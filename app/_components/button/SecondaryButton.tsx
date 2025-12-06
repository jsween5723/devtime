"use client";
import styles from "./Button.module.css";
import secondaryButtonStyles from "./SecondaryButton.module.css";
import React from "react";

type Props = {
  text: string;
  onClickAction?: React.MouseEventHandler<HTMLButtonElement>;
};

export default function PrimaryButton({ text, onClickAction }: Props) {
  return (
    <button
      onClick={onClickAction}
      className={[styles.button, secondaryButtonStyles.button].join(" ")}
    >
      {text}
    </button>
  );
}
