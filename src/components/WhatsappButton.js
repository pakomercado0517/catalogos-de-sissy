import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const WhatsappButton = (props) => {
  const { empresa, catalogo, pagina, modelo, talla, color } = props;
  return (
    <div>
      <a
        href={`https://api.whatsapp.com/send?phone=527831362077&text=Hola%20,%20quiero%20saber%20el%20precio%20del%20catalogo:%20${empresa}%20-%20${catalogo},%20la%20página:%20${pagina},%20modelo:%20${modelo},%20talla:%20${talla},%20color:%20${color}`}
        className="button is-success is-outlined"
        target="_blank"
        rel="noreferrer noopener">
        <span className="icon is-medium">
          <FontAwesomeIcon icon={["fab", "whatsapp"]} />
        </span>
        <span>Cotiza tu pedido</span>
      </a>
    </div>
  );
};
