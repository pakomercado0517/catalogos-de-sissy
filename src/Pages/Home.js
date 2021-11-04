import React, { Component } from "react";
import { CardList } from "../components/CardList";
import { Logo } from "../components/Logo";

export class Home extends Component {
  render() {
    return (
      <div>
        <Logo />
        <hr className="hr" />
        <CardList />
      </div>
    );
  }
}
