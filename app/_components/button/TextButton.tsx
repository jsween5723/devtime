"use client";

import React from "react";
import styles from "./TextButton.module.css";

type Props = {
  children?: React.ReactNode;
  onClickAction?: React.MouseEventHandler<HTMLButtonElement>;
  disabled: boolean;
};

export default function TextButton({
  children,
  onClickAction,
  disabled,
}: Props) {
  return (
    <button
      className={styles.button}
      onClick={onClickAction}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
