"use client";

import TextButton from "@/app/_components/button/TextButton";
import React from "react";
import TextFieldInput from "@/app/_components/input/TextFieldInput";

type Props = {
  name?: string;
  onSubmitAction?: React.MouseEventHandler<HTMLButtonElement>;
  onChangeAction?: React.ChangeEventHandler<HTMLInputElement>;
  value?: string | number;
  buttonText?: string;
  placeholder?: string;
};

export default function TagInput({
  name = "name",
  onSubmitAction,
  onChangeAction,
  value,
  buttonText = "제출",
  placeholder = "Placeholder",
}: Props) {
  return (
    <TextFieldInput
      id={name}
      type={"text"}
      placeholder={placeholder}
      value={value}
      onChangeAction={onChangeAction}
    >
      <TextButton
        onClickAction={onSubmitAction}
        disabled={value === "" || value === undefined}
      >
        {buttonText}
      </TextButton>
    </TextFieldInput>
  );
}
