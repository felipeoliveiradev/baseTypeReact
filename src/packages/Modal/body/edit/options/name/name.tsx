import React from "react";
import { Input, ModalInner } from "./style";

export const NameType = () => {
  const handleSubmit = () => {};
  return (
    <ModalInner>
      <h3>Editar Name</h3>
      <div className="inside">
      <Input />
      </div>
      <button type="button" onClick={handleSubmit}>
        Alterar
      </button>
    </ModalInner>
  );
};
