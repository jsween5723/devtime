import styles from "./HelperText.module.css";
import React from "react";

export type HelperTextState = {
  type: "error" | "success" | "info";
  text: string;
};

type Props = {
  state: HelperTextState | null;
};

const styleMap = {
  error: styles.error,
  success: styles.success,
  info: styles.info,
};

export default function HelperText({ state }: Props): React.ReactElement {
  return (
    <p className={[styles.p, state && styleMap[state.type]].join(" ")}>
      {state && state.text}
    </p>
  );
}
