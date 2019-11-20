import { CellPhone, Email, Profile } from "assets/icons";
import { Check } from "assets/images";
import axios from "axios";
import { AppContext } from "context";
// import { Container } from './styles';
import { mask, verifyName, verifyNumber } from "helper";
import Errors from "helper/validations/validations";
import React, { useContext, useEffect, useState } from "react";

import { InputGroup, Message } from "components";
import { Button, Form, ModalInner } from "./style";

export const RegisterModal = () => {
  const { actions, state } = useContext(AppContext.Context);

  // STATES
  const [nameInput, setNameInput] = useState("");
  const [cellphoneInput, setCellphoneInput] = useState("");
  // const [emailInput, setEmailInput] = useState(
  //   state.register.email !== "" && state.register.email !== undefined
  //     ? state.register.email
  //     : ""
  // );
  const [success, setSuccess] = useState(false);
  //// ERRORS
  const [errorEmail, setErrorEmail] = useState("");
  const [errorName] = useState("");
  const [errorCellPhone, setErrorCellPhone] = useState("");
  const [activedButton, setActivedButton] = useState(false);

  // CONSTS
  const nameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value as string;
    setNameInput(value);
  };

  const cellphoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = (mask(e.target.value, "phone") as unknown) as string;
    setCellphoneInput(value);
  };
  const emailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const emailValue: string = e.target.value;
    actions.registerAction.setRegister(emailValue);
  };
  // USER EFFECTS
  useEffect(() => {
    const error = new Errors();

    if (state.register.email) {
      const mensagem: string = error.emailValidation(state.register.email);
      if (!mensagem) {
        setErrorEmail("");
      } else {
        setErrorEmail(mensagem);
      }
    } else {
      setErrorEmail("");
    }
  }, [state.register.email]);

  // HANDLE CONSTS
  const handleDesable = () => {
    if (activedButton) {
      return false;
    } else {
      return true;
    }
  };
  const handleBlurCellphone = (e: React.FocusEvent) => {
    const error = new Errors();
    const mensagem: string = error.phone(cellphoneInput);

    if (!mensagem) {
      setErrorCellPhone("");
    } else {
      setErrorCellPhone(mensagem);
    }
  };

  const handleBlurEmail = () => {
    const error = new Errors();
    const mensagem: string = error.emailValidation(state.register.email!);
    if (!mensagem) {
      setErrorEmail("");
    } else {
      setErrorEmail(mensagem);
    }
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const error = new Errors();
    const mensagem: string = error.emailValidation(state.register.email!);
    const body = {
      Email: state.register.email,
      Nome: nameInput,
      Telefone: cellphoneInput
    };
    if (mensagem === "") {
      if (cellphoneInput && nameInput) {
        try {
          await axios
            .post(`https://api.dev-7539.euemdia.com.br/b2b/lead`, body)
            .then((response) => {
              if (response.status === 200) {
                setSuccess(true);
                setTimeout(() => {
                  actions.sideModalAction.setOptions({
                    state: false,
                    ...state.sideModal.options
                  });
                }, 3000);
                setTimeout(() => {
                  setSuccess(false);
                }, 4000);
              }
            });
        } catch (err) {
          // console.log(err);
        }
      }
    }
  };
  useEffect(() => {
    if (
      state.register.email !== "" &&
      !errorEmail &&
      nameInput !== "" &&
      !errorName &&
      cellphoneInput !== "" &&
      !errorCellPhone
    ) {
      setActivedButton(true);
    } else {
      setActivedButton(false);
    }
  }, [
    state.register.email,
    errorCellPhone,
    errorName,
    errorEmail,
    nameInput,
    cellphoneInput
  ]);
  return (
    <ModalInner>
      <>
        {(!success && (
          <>
            <h3>Preencha seus Dados abaixo.</h3>
            <Form onSubmit={handleSubmit}>
              <div className="middle">
                <InputGroup
                  title="Nome completo"
                  imageIcon={Profile}
                  type="text"
                  name="name"
                  defaultValue={nameInput}
                  onChange={nameChange}
                  onKeyDown={verifyName}
                  error={errorName}
                />
                <InputGroup
                  title="E-mail"
                  imageIcon={Email}
                  type="email"
                  name="email"
                  onChange={emailChange}
                  onBlur={handleBlurEmail}
                  defaultValue={state.register.email}
                  error={errorEmail}
                />
                <InputGroup
                  title="Telefone"
                  imageIcon={CellPhone}
                  defaultValue={cellphoneInput}
                  type="text"
                  name="celular"
                  onChange={cellphoneChange}
                  onBlur={handleBlurCellphone}
                  onKeyDown={verifyNumber}
                  error={errorCellPhone}
                />
              </div>
              <div className="bottom">
                <Button
                  type="submit"
                  disabled={handleDesable()}
                  id="stepTwoRecordEmail"
                >
                  Enviar
                </Button>
              </div>
            </Form>
          </>
        )) || (
          <Message
            title="Obrigado!"
            subtitle="Entraremos em contato com você em breve."
            image={Check}
          />
        )}
      </>
    </ModalInner>
  );
};
