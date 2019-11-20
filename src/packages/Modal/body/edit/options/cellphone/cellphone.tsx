import { mask, verifyNumber } from "helper";
import React, { ChangeEvent, useState } from "react";
import { Input, ModalInner } from "./style";
import { ICellphone } from "./type";

export const CellPhoneType = (props: ICellphone) => {
  const [cellphone, setCellphone] = useState();
  const handleSubmit = () => {};
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = (mask(e.target.value, "phone") as unknown) as string;
    setCellphone(value);
  };
  return (
    <ModalInner>
      <h3>Editar telefone cadastrado</h3>
      <div className="inside">
      <Input
        onKeyDown={verifyNumber}
        onChange={(e) => handleChange(e)}
        max="16"
        value={cellphone}
      />
      </div>
      <button type="button" onClick={handleSubmit}>
        Alterar
      </button>
    </ModalInner>
  );
};
