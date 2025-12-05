"use client";
import styles from "./Button.module.css";
import primaryButtonStyles from "./PrimaryButton.module.css";

export default function PrimaryButton({
  text,
  onClickAction,
}: {
  text: string;
  onClickAction?: () => void;
}) {
  return (
    <button
      onClick={onClickAction}
      className={[styles.button, primaryButtonStyles.button].join(" ")}
    >
      {text}
    </button>
  );
}
