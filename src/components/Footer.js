import React from "react";
import { Link } from "react-router-dom";
import { Container, Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Footer = () => {
  return (
    <Col className="Footer pt-5 pb-5 mt-5">
      <Container>
        <Row>
          <Col lg={5} xs={12} className="about-company">
            {/* <h2>Sissy-Catálogos</h2> */}
            <img alt="logo" src="./logo-white.png" />
          </Col>
          <Col lg={3} xs={12} className="links">
            <h4 className="mt-lg-0 mt-sm-3">Links</h4>
            <ul className="m-0 p-0">
              <li>
                <FontAwesomeIcon icon={["fas", "home"]} className="mr-2" />{" "}
                <Link to="/">Inicio</Link>
              </li>
              <li>
                <FontAwesomeIcon icon={["fas", "edit"]} className="mr-2" />{" "}
                <Link to="/cotizacion">Cotiza tus productos</Link>
              </li>
            </ul>
          </Col>
          <Col lg={4} xs={12} className="location">
            <h4 className="mt-lg-0 mt-sm-4">Contáctanos</h4>
            <p>
              <FontAwesomeIcon
                icon={["fas", "map-marked-alt"]}
                className="mr-3"
              />
              Tuxpan, Ver
            </p>
            <p className="mb-0">
              <FontAwesomeIcon icon={["fa", "phone"]} className="mr-3" />
              (783) 136-2077
            </p>
            <p>
              <FontAwesomeIcon icon={["fa", "envelope"]} className="mr-3" />
              sissy_ayle14@hotmail.com shirsava14@gmail.com
            </p>
          </Col>
        </Row>
        <Row mt={5}>
          <Col className="copyright">
            <p className="">
              <small className="text-white-50">
                © 2020. All Rights Reserved.
              </small>
            </p>
          </Col>
        </Row>
      </Container>
    </Col>

    // <footer className="footer footerApp">
    //   <div className="content has-text-centered">
    //     <p>Esta es una aplicación exclusivamente para la venta de Sissy SSV</p>
    //   </div>
    // </footer>
  );
};
