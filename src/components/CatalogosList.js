import React, { useState, useEffect } from "react";
import { Cards } from "./Cards";
import { ButtonBackToHome } from "./ButtonBackToHome";
import { ModalCatalogo } from "./ModalCatalogo";
import s from "./styles/CatalogosList.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getCataologoUrl } from "../redux/actions/";
import {
  Andrea,
  Cklass,
  PriceShoes,
  Concord,
  Betterware,
} from "../localDb/catalogos";
import { useParams } from "react-router-dom";

const CatalogosList = () => {
  const { name } = useParams();
  const catalogos = { Andrea, Cklass, PriceShoes, Concord, Betterware };
  const [cataShow, setcataShow] = useState(false);
  const [catUrl, setCatUrl] = useState("");
  const dispatch = useDispatch();
  const catalogoName = useSelector((state) => state.catalogoName);
  const companyCatalogo = catalogos[`${name}`];

  useEffect(() => {}, [catalogoName]);

  console.log("name", name);

  const handleClose = () => {
    setcataShow(false);
  };

  const showCat = (url) => {
    setcataShow(true);
    setCatUrl(url);
    dispatch(getCataologoUrl(url));
  };

  return (
    <div className={`row justify-content-center`}>
      <div>
        <div className={`col-sm-12 col-md-12 col-lg-12 ${s.modalContainer}`}>
          {cataShow ? (
            <div className={`${s.modalHandler}`}>
              <div onClick={handleClose} className={`${s.button_close}`}>
                <span>X</span>
              </div>
              <ModalCatalogo
                url={catUrl}
                name={catUrl}
                closeButton={cataShow}
              />
            </div>
          ) : (
            <></>
          )}
        </div>
        <div className="cards-list">
          {companyCatalogo.map((el, index) => {
            return (
              <div key={index}>
                <a
                  href={el.url}
                  target={el.name ? el.url : "_self"}
                  name={el.url}
                  onClick={() => {
                    if (el.name) {
                      showCat(el.url);
                    } else {
                      return "";
                    }
                  }}
                >
                  <Cards name={el.name} img={el.image} url={el.url} />
                </a>
              </div>
            );
          })}
          <div className="buttonBack">
            <div className="buttons">
              <ButtonBackToHome />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CatalogosList;
