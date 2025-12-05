"use client";

import styles from "./Button.module.css";
import tertiaryButtonStyles from "./TertiaryButton.module.css";

export default function TertiaryButton({
  text,
  onClickAction,
}: {
  text: string;
  onClickAction?: () => void;
}) {
  return (
    <button
      onClick={onClickAction}
      className={[styles.button, tertiaryButtonStyles.button].join(" ")}
    >
      {text}
    </button>
  );
}
