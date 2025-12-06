"use client";

import React from "react";
import styles from "./TextFieldInput.module.css";

type Props = {
  id?: string;
  type?: "text" | "password" | "file" | "dropdown";
  onChangeAction?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  value?: any;
  children?: React.ReactNode;
};

export default function TextFieldInput({ children, ...others }: Props) {
  return (
    <section className={styles.container}>
      <label className={styles.label} htmlFor={others.id}>
        {others.id}
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
      </label>
    </section>
  );
}
