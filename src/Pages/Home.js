import React from "react";
import CardList from "../components/CardList";
import { Logo } from "../components/Logo";
import { useSelector } from "react-redux";

const Home = () => {
  const allCompanies = useSelector((state) => state.allCompanies);
  console.log("allCompanies.length", allCompanies.length);
  return (
    <div>
      <Logo />
      <hr className="hr" />
      {allCompanies === 0 ? (
        <img
          src="https://static.wixstatic.com/media/c6abac_72b300c91c794879a85fc3f8fd46ed63~mv2.gif"
          alt="waiting_gift"
        />
      ) : (
        <CardList />
      )}
    </div>
  );
};

export default Home;
