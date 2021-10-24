import React from "react";
import formatNumberToPrice from "../../utils/helper";
import { Link } from "react-router-dom";

// List View Details === one List
const ListViewDetail = ({ items }) => {
  const { image, name, description, price, id } = items;
  return (
    <article>
      <img src={image} alt={name} />
      <div>
        <h4>{name}</h4>
        <h5 className="price">{formatNumberToPrice(price)}</h5>
        <p>{description}...</p>
        <Link className="btn" to={`/product/${id}`}>
          Details
        </Link>
      </div>
    </article>
  );
};

export default ListViewDetail;
