import React, { Component } from "react";
import { PropTypes } from "prop-types";
import { Cards } from "./Cards";
import data from "./data.json";
import { Link } from "react-router-dom";
import { ButtonBackToHome } from "./ButtonBackToHome";

export class CatalogosList extends Component {
  constructor(props) {
    super(props);
    this.id = this.props.id;
    this.name = this.props.name;
    this.img = this.props.img;
    this.logo = this.props.logo;
    this.state = {
      data: [],
      cataShow: false,
    };
  }
  static propTypes = {
    data: PropTypes.array,
  };

  _fecthCat = (...data) => {
    // console.log(data);
    this.setState({ data });
  };
  _showCat = () => {
    this.setState({ cataShow: !this.state.cataShow });
  };

  componentDidMount() {
    // console.log(this.props);
    const { name } = this.props.match.params;
    this._fecthCat(...data[name]);
  }

  render() {
    const { data } = this.state;
    // console.log(data);
    return (
      <div className="mb-3">
        <div className="cards-list">
          {data.map((data, index) => {
            return (
              <Link key={index} to={`/${data.url}`}>
                <Cards name={data.name} img={data.image} />
              </Link>
            );
          })}
          <div className="buttonBack">
            <div className="buttons">
              <ButtonBackToHome />
            </div>
            {/* <div className="control">
            </div> */}
          </div>
        </div>
      </div>
    );
  }
}
