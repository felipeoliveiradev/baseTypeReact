import React, { ChangeEvent, useState } from "react";
import { Input, ModalInner } from "./style";
import { ICellphone } from "./type";

export const EmailType = (props: ICellphone) => {
  const [cellphone, setCellphone] = useState();
  const handleSubmit = () => {};
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCellphone(e.target.value);
  };
  return (
    <ModalInner>
      <h3>Editar e-mail cadastrado</h3>
      <div className="inside">
      <Input
        onChange={(e) => handleChange(e)}
        type="email"
        value={cellphone}
      />
      </div>
      <button type="button" onClick={handleSubmit}>
        Alterar
      </button>
    </ModalInner>
  );
};
