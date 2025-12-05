"use client";
import styles from "./Button.module.css";
import secondaryButtonStyles from "./SecondaryButton.module.css";

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
      className={[styles.button, secondaryButtonStyles.button].join(" ")}
    >
      {text}
    </button>
  );
}
