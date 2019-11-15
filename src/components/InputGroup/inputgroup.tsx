import React, { useEffect, useState } from "react";
import { Container, Icone } from "./style";
import { IInputGroup } from "./type";

export const InputGroup = (props: IInputGroup) => {
  const {
    title,
    type,
    imageIcon,
    image,
    icon,
    error,
    name,
    defaultValue,
    onChange,
    required,
    onKeyDown,
    onFocus,
    onBlur,
    ...other
  } = props;
  const [input, setInput] = useState({
    type: type === "text" ? "text" : type,
    value: "",
    // tslint:disable-next-line: object-literal-sort-keys
    icone: imageIcon !== undefined ? true : false,
    // Se existir erro o valor muda para true;
    erro: error ? error : ""
  });
  const [labelUp, setLabelUp] = useState(false);
  const [inputValue, setInputValue] = useState("");
  useEffect(() => {
    if (defaultValue) {
      setInputValue(defaultValue);
      setLabelUp(true);
    } else {
      setInputValue("");
      setLabelUp(false);
    }
  }, [defaultValue]);
  useEffect(() => {
    if (inputValue) {
      setLabelUp(true);
    }
  }, [inputValue]);

  useEffect(() => {
    if (error) {
      setInput({ ...input, erro: error });
    } else {
      setInput({ ...input, erro: "" });
    }
    // eslint-disable-next-line
  }, [error]);
  // const handleUp = {};
  const handleView = () => {
    if (type === "password") {
      if (input.type === "password") {
        setInput({
          ...input,
          type: (input.type === "password" && "text") || "password"
        });
      } else {
        setInput({
          ...input,
          type: (input.type === "text" && "password") || "text"
        });
      }
    }
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    // const keypress = inputRef.addEventListener("keyboard", );
    if (onChange) {
      onChange(e);
    }
  };
  // tslint:disable-next-line: no-any
  const handleOnPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (onKeyDown) {
      onKeyDown(e);
    }

  };
  const handleFocus = (e: React.FocusEvent) => {
    setLabelUp(true);
    if (onFocus) {
      onFocus(e);
    }
  };
  const handleBlur = (e: React.FocusEvent) => {
    setLabelUp(inputValue ? true : false);
    if (onBlur) {
      onBlur(e);
    }
  };
  return (
    <Container className={`${input.erro !== "" ? "error" : ""}`}>
      <div className="bodyInput">
        <input
          type={input.type}
          value={inputValue}
          name={name}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          required={required}
          onKeyDown={handleOnPress}
          {...other}
        />
        {(input.icone === true && (
          <>
            <span onClick={() => handleView()}>
              <Icone image={imageIcon} erro={input.erro} {...other} />
            </span>
          </>
        )) ||
          ""}
        <label className={labelUp ? "up" : ""}>{title}</label>
      </div>
      <span>{input.erro ? input.erro : ""}</span>

    </Container>
  );
};
