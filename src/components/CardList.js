import React, { useEffect } from "react";
// import { PropTypes } from "prop-types";
// import data from "./cards.json";
import { Cards } from "./Cards";
import { Link } from "react-router-dom";
import { getAllCompanies, getCatalogoByCompanyId } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";

const CardList = () => {
  const dispatch = useDispatch();
  const allCompanies = useSelector((state) => state.allCompanies);

  useEffect(() => {
    dispatch(getAllCompanies());
  }, [dispatch]);

  const handleClick = (id) => {
    dispatch(getCatalogoByCompanyId(id));
  };

  console.log("allCompanies", allCompanies);

  return (
    <div className="col-lg-auto cards-list">
      {allCompanies.map((data) => {
        return (
          <div key={data.id}>
            <Link
              to={`/catalogos`}
              onClick={() => {
                handleClick(data.id);
              }}
            >
              <Cards name="" img={data.image} />
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default CardList;
