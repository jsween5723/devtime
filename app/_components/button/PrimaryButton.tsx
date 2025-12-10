"use client";
import React from "react";
import styles from "./Button.module.css";
import primaryButtonStyles from "./PrimaryButton.module.css";

type Props = {
  text: string;
  onClickAction?: React.MouseEventHandler<HTMLButtonElement>;
};

export default function PrimaryButton({ text, onClickAction }: Props) {
  return (
    <button
      onClick={onClickAction}
      className={[styles.button, primaryButtonStyles.button].join(" ")}
    >
      {text}
    </button>
  );
}
