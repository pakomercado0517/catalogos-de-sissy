import React, { Component } from "react";
import { PropTypes } from "prop-types";
import { Cards } from "./Cards";
import data from "./data.json";
// import { Link } from "react-router-dom";
import { ButtonBackToHome } from "./ButtonBackToHome";
import { ModalCatalogo } from "./ModalCatalogo";
import s from "./styles/CatalogosList.module.css";

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
      cat_url: "",
    };
  }
  static propTypes = {
    data: PropTypes.array,
  };

  _fecthCat = (...data) => {
    // console.log(data);
    this.setState({ data });
  };
  _showCat = (e) => {
    e.preventDefault();
    this.setState({
      cataShow: !this.state.cataShow,
      cat_url: e.target.name,
    });
  };

  _handleClose = () => {
    this.setState({ cataShow: false });
  };

  componentDidMount() {
    // console.log(this.props);
    const { name } = this.props.match.params;
    this._fecthCat(...data[name]);
    this.setState({ cat_url: this.state.cat_url });
  }

  render() {
    const { data } = this.state;
    // console.log(data);
    console.log("this.state.cat_url", this.state.cat_url);
    console.log("this.state.cataShow", this.state.cataShow);
    return (
      <div className={`row justify-content-center`}>
        <div>
          <div className={`col-sm-12 col-md-12 col-lg-12 ${s.modalContainer}`}>
            {this.state.cataShow ? (
              <div className={`${s.modalHandler}`}>
                <div
                  onClick={this._handleClose}
                  className={`${s.button_close}`}
                >
                  <span>X</span>
                </div>
                <ModalCatalogo
                  name={this.state.cat_url}
                  closeButton={this.state.cataShow}
                />
              </div>
            ) : (
              <></>
            )}
          </div>
          <div className="cards-list">
            {data.map((el, index) => {
              return (
                // <Link key={index} to={`/${data.url}`}>
                //   <Cards name={data.name} img={data.image} />
                // </Link>
                <>
                  <a
                    href={el.url}
                    target={el.name ? this.state.cat_url : "_self"}
                    key={`${index} ${el.name}`}
                    name={el.url}
                    onClick={el.name ? this._showCat : ""}
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
              {/* <div className="control">
              </div> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
