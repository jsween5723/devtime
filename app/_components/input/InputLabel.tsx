"use client";

import React from "react";
import styles from "./InputLabel.module.css";

type Props = {
  id?: string;
  children?: React.ReactNode;
};

export default function InputLabel({ children, ...others }: Props) {
  return (
    <label className={styles.label} htmlFor={others.id}>
      {others.id}
      {children}
    </label>
  );
}
