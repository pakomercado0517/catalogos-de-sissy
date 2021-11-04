import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Header = () => {
  return (
    <div className="header">
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          <img
            src="/logo-white.png"
            width="60"
            height="60"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Nav className="ml-auto ">
          <NavLink to="/" className="header-link">
            <FontAwesomeIcon icon={["fas", "home"]} className="mr-2" /> Inicio
          </NavLink>
        </Nav>
        <Nav className="mr-auto"></Nav>
        <Nav className="mr-auto ">
          <NavLink to="/cotizacion" className="header-link">
            <FontAwesomeIcon icon={["fas", "edit"]} /> Cotizaciones
          </NavLink>
        </Nav>
      </Navbar>
    </div>
  );
};
