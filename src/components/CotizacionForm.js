import React, { Component } from "react";
import { WhatsappButton } from "./WhatsappButton";
import { PropTypes } from "prop-types";

export class CotizacionForm extends Component {
  static propTypes = {
    empresa: PropTypes.array,
    catalogo: PropTypes.array,
    pagina: PropTypes.array,
    modelo: PropTypes.array,
    talla: PropTypes.array,
    color: PropTypes.array,
  };
  state = {
    empresa: "",
    catalogo: "",
    pagina: "",
    modelo: "",
    talla: "",
    color: "",
    list: {},
  };

  _handleChange = (e) => {
    e.preventDefault();
    let nam = e.target.name;
    let val = e.target.value;
    this.setState({ [nam]: val });
  };

  render() {
    const { empresa, catalogo, pagina, modelo, talla, color } = this.state;
    return (
      <div className="form-control border-primary">
        <div className="field">
          <label className="label">Empresa</label>
          <div className="control select is-rounded is-info">
            <select onChange={this._handleChange} name="empresa">
              <option>Seleccione una opción</option>
              <option>Andrea</option>
              <option>Cklass</option>
              <option>PriceShoes</option>
              <option>Concord</option>
            </select>
          </div>
        </div>
        <div className="field">
          <label className="label">Catálogo</label>
          <div className="control">
            <input
              className="input is-medium is-rounded is-info"
              type="text"
              name="catalogo"
              onChange={this._handleChange}
              placeholder="e.j. Importados  "
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Página</label>
          <div className="control">
            <input
              className="input is-medium is-rounded is-info"
              onChange={this._handleChange}
              type="number"
              name="pagina"
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Modelo</label>
          <div className="control">
            <input
              className="input is-medium is-rounded is-info"
              onChange={this._handleChange}
              type="text"
              name="modelo"
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Talla</label>
          <div className="control">
            <input
              className="input is-medium is-rounded is-info"
              onChange={this._handleChange}
              type="number"
              name="talla"
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Color</label>
          <div className="control">
            <input
              className="input is-medium is-rounded is-info"
              onChange={this._handleChange}
              type="text"
              name="color"
            />
          </div>
        </div>
        <WhatsappButton
          className="pl-4 mb-5"
          empresa={empresa}
          catalogo={catalogo}
          pagina={pagina}
          modelo={modelo}
          talla={talla}
          color={color}
        />
      </div>
    );
  }
}
