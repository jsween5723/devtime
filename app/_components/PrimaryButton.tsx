"use client";
import styles from "./PrimaryButton.module.css";

export default function PrimaryButton({
  text,
  onClickAction,
}: {
  text: string;
  onClickAction?: () => void;
}) {
  return (
    <button onClick={onClickAction} className={styles.button}>
      {text}
    </button>
  );
}
