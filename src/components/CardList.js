import React from "react";
// import { PropTypes } from "prop-types";
// import data from "./cards.json";
import { Cards } from "./Cards";
import { Link } from "react-router-dom";
import { getCatalogoByName } from "../redux/actions";
import { useDispatch } from "react-redux";
import companies from "./cards.json";

const CardList = () => {
  const dispatch = useDispatch();
  // const allCompanies = useSelector((state) => state.allCompanies);

  // useEffect(() => {
  //   dispatch(getAllCompanies());
  // }, [dispatch]);

  const handleClick = (name) => {
    dispatch(getCatalogoByName(name));
  };

  // console.log("allCompanies", allCompanies);

  return (
    <div className="col-lg-auto cards-list">
      {companies.map((data) => {
        return (
          <div key={data.id}>
            <Link
              to={`/catalogos/${data.name}`}
              onClick={() => {
                handleClick(data.name);
              }}
            >
              <Cards name="" img={data.img} />
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default CardList;
