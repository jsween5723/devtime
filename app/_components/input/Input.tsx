"use client";

import React from "react";
import styles from "./Input.module.css";

type Props = {
  id?: string;
  type?: "text" | "password" | "file" | "dropdown";
  onChangeAction: React.ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
  value: any;
  children?: React.ReactNode;
};

export default function Input({ children, ...others }: Props) {
  return (
    <section className={styles.section}>
      <input
        name={others.id}
        type={others.type}
        className={styles.input}
        onChange={others.onChangeAction}
        value={others.value}
        placeholder={others.placeholder}
      />
      {children}
    </section>
  );
}
