import InputLabel from "@/app/_components/input/InputLabel";
import Input from "@/app/_components/input/Input";
import Row from "@/app/_components/wrapper/Row";
import React from "react";

export default function ImageInputForm(props: {}) {
  const [url, setUrl] = React.useState<string | null>(null);
  const [file, setFile] = React.useState<File | null>(null);
  const onChangeFile: React.ChangeEventHandler<HTMLInputElement> = (e) => {};
  return (
    <>
      <InputLabel>
        <Row>
          <Input type={"file"} onChangeAction={} value={}></Input>
          <button type={""}></button>
        </Row>
      </InputLabel>
    </>
  );
}
