import React from "react";
import "./style.scss";

import _range from "lodash/range";

const ProductCard = (props) => {
  const { cardData } = props;
  const { badge, cardImg, cardTitle, oldPrice, newPrice, stars } = cardData;
  return (
    <div className="product-card">
      <span className="badge">{badge}</span>
      <div className="card-img">
        <img src={cardImg} alt="" />
      </div>
      <h5 className="card-title">{cardTitle}</h5>
      <div className="card-footer">
        <div className="price">
          <span className="old-price">{oldPrice}</span>
          <span className="new-price">{newPrice}</span>
        </div>
        <ul className="ratings">
          {_range(stars).map((star) => (
            <li className="star">
              <svg
                width="15"
                height="14"
                viewBox="0 0 15 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.42611 1.09367C6.73371 0.189974 8.01183 0.189977 8.31943 1.09367L9.30295 3.98313C9.4409 4.3884 9.82151 4.66091 10.2496 4.66091H13.3298C14.3098 4.66091 14.705 5.92416 13.8997 6.48263L11.489 8.15456C11.1221 8.40901 10.9683 8.87584 11.1122 9.29851L12.0517 12.0586C12.3625 12.9718 11.3278 13.7523 10.5351 13.2025L7.94266 11.4046C7.59991 11.1668 7.14562 11.1668 6.80288 11.4046L4.2104 13.2025C3.41773 13.7523 2.38301 12.9718 2.69384 12.0586L3.63333 9.29851C3.77719 8.87584 3.62344 8.40901 3.25656 8.15456L0.84582 6.48263C0.0405819 5.92416 0.435769 4.66091 1.41571 4.66091H4.49592C4.92402 4.66091 5.30464 4.3884 5.44259 3.98313L6.42611 1.09367Z"
                  fill="#FFA858"
                />
              </svg>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductCard;
