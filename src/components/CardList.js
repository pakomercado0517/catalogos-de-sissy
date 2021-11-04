import React, { Component } from "react";
import { PropTypes } from "prop-types";
import data from "./cards.json";
import { Cards } from "./Cards";
import { Link } from "react-router-dom";

export class CardList extends Component {
  constructor(props) {
    super(props);
    this.name = this.props.name;
    this.img = this.props.img;
  }

  static propTypes = {
    data: PropTypes.array,
  };

  render() {
    return (
      <div className="col-lg-auto cards-list">
        {data.map((data) => {
          return (
            <div key={data.id}>
              <Link to={`/catalogos/${data.name}`}>
                <Cards name="" img={data.img} />
              </Link>
            </div>
          );
        })}
      </div>
    );
  }
}
