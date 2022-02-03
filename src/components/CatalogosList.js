import React, { useState } from "react";
import { Cards } from "./Cards";
import { ButtonBackToHome } from "./ButtonBackToHome";
import { ModalCatalogo } from "./ModalCatalogo";
import s from "./styles/CatalogosList.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getCataologoUrl } from "../redux/actions/";

const CatalogosList = () => {
  const [cataShow, setcataShow] = useState(false);
  const [catUrl, setCatUrl] = useState("");
  const dispatch = useDispatch();
  const companyCatalogo = useSelector((state) => state.companyCatalogo);

  console.log("companyCatalogo", companyCatalogo);

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
              <ModalCatalogo name={catUrl} closeButton={cataShow} />
            </div>
          ) : (
            <></>
          )}
        </div>
        <div className="cards-list">
          {companyCatalogo.map((el) => {
            return (
              <>
                <a
                  href={el.url}
                  target={el.name ? el.url : "_self"}
                  key={`${el.id}`}
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
              </>
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
