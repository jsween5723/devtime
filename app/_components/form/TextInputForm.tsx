"use client";

import React, { useState } from "react";
import InputLabel from "@/app/_components/input/InputLabel";
import Input from "@/app/_components/input/Input";
import SecondaryButton from "@/app/_components/button/SecondaryButton";
import Form from "next/form";
import styles from "./TextInputForm.module.css";
import Row from "@/app/_components/wrapper/Row";
import HelperText, { HelperTextState } from "@/app/_components/text/HelperText";

type Props = {
  action: string;
  buttonText: string;
  name: string;
  placeholder?: string;
};

export default function TextInputForm({
  name,
  buttonText,
  placeholder,
  action,
}: Props) {
  const [value, setValue] = useState("");
  // TODO validation 추가후 수정
  const [helperState, setHelperState] = useState<HelperTextState | null>(null);
  const onChangeAction: React.ChangeEventHandler<HTMLInputElement> = (
    event,
  ) => {
    setValue(event.target.value);
  };
  return (
    <Form action={action} className={styles.container}>
      <InputLabel id={name}>
        <Row>
          <Input
            type="text"
            id={name}
            placeholder={placeholder}
            onChangeAction={onChangeAction}
            value={value}
          />
          <SecondaryButton type={"submit"}>{buttonText}</SecondaryButton>
        </Row>
        <HelperText state={helperState} />
      </InputLabel>
    </Form>
  );
}
