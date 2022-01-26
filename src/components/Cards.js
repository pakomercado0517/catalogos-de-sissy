import React, { Component } from "react";
import PropTypes from "prop-types";

export class Cards extends Component {
  static propTypes = {
    name: PropTypes.string,
    img: PropTypes.string,
    url: PropTypes.string,
  };
  render() {
    let { name, img, url } = this.props;
    return (
      <div className="card">
        <div className="card_image">
          <img src={img} alt={name} name={url} />
        </div>
        <div className="card_title title-white">
          <p>{name}</p>
        </div>
      </div>
    );
  }
}
