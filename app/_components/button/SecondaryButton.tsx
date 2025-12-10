"use client";
import styles from "./Button.module.css";
import secondaryButtonStyles from "./SecondaryButton.module.css";
import React from "react";

type Props = {
  children?: React.ReactNode;
  onClickAction?: React.MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "submit" | "reset";
};

export default function SecondaryButton({
  children,
  onClickAction,
  type,
}: Props) {
  return (
    <button
      onClick={onClickAction}
      className={[styles.button, secondaryButtonStyles.button].join(" ")}
      type={type}
    >
      {children}
    </button>
  );
}
