import { Currency, Store } from "assets/icons";
import { AppContext } from "context";
import React, { useContext } from "react";
import {
  IModalsTypes,
  ModalsBodyTypes,
  ModalsFields,
  ModalsHeaderTypes,
  ModalsIcon
} from "store/sideModal/types";
import {
  ContactCompany,
  ContactFinancial,
  InfoCompany,
  ModalInner
} from "./style";
export const PerfilModal = () => {
  const { actions } = useContext(AppContext.Context);
  const handleClick = (props: IModalsTypes) => {
    if (props) {
      actions.sideModalAction.setOptions({
        body: {
          field: props.body.field,
          type: props.body.type
        },
        header: {
          icon: props.header.icon,
          name: props.header.name ? props.header.name.toUpperCase() : "",
          subName: props.header.subName
            ? props.header.subName.toUpperCase()
            : "",
          type: props.header.type
        },
        state: true
      });
    }
  };
  return (
    <ModalInner>
      <InfoCompany>
        <ul>
          <li>
            <div> JN </div>
            <div>João das Neves</div>
          </li>
          <li>
            <div>Razão Social</div>
            <div>Magazine Luiza</div>
          </li>
          <li>
            <div>CNPJ</div>
            <div>08.195.647/0001-28</div>
          </li>
          <li>
            <div>Inscrição Estadual</div>
            <div>SP</div>
          </li>
          <li>
            <div>ID Contrato</div>
            <div>7230947</div>
          </li>
        </ul>
      </InfoCompany>
      <ContactCompany>
        <ul>
          <li>
            <div>
              {" "}
              <img src={Store} alt="contact-commercial" />
            </div>
            <div>CONTATO COMERCIAL</div>
          </li>
          <li>
            <div> Nome </div>
            <div>
              João das Neves <span />
            </div>
          </li>
          <li>
            <div>E-mail</div>
            <div>
              joao_dasneves_emailgrande@hotmail.com
              <span
                onClick={() => handleClick({
                  body: {
                    field: ModalsFields.NAME,
                    type: ModalsBodyTypes.EDIT
                  },
                  header: {
                    icon: ModalsIcon.CURRENCY,
                    name: "CONTATO",
                    subName: "FINANCEIRO",
                    type: ModalsHeaderTypes.CHANGES
                  },
                  state: true
                })}
              />
            </div>
          </li>
          <li>
            <div>Telefone</div>
            <div>
              (13) 99783-1609
              <span />
            </div>
          </li>
        </ul>
      </ContactCompany>
      <ContactFinancial>
        <ul>
          <li>
            <div>
              {" "}
              <img src={Currency} alt="contact-financial" />{" "}
            </div>
            <div>CONTATO FINANCEIRO</div>
          </li>
          <li>
            <div> Nome </div>
            <div>
              Gandalf, o Branco
              <span />
            </div>
          </li>
          <li>
            <div>E-mail</div>
            <div>
              gandalf_b@hotmail.com
              <span />
            </div>
          </li>
          <li>
            <div>Telefone</div>
            <div>
              (13) 99783-1609
              <span />
            </div>
          </li>
        </ul>
      </ContactFinancial>
    </ModalInner>
  );
};
