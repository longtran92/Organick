import React from "react";
import "./style.scss";

import _range from "lodash/range";

const Testimony = (props) => {
  const { data } = props;
  const {
    profileImg,
    stars,
    testimonyDescription,
    consumerName,
    consumerTitle,
  } = data;
  return (
    <div className="testimony">
      <div className="profile-pic">
        <img src={profileImg} alt="" />
      </div>
      <ul className="ratings">
        {_range(stars).map((star) => (
          <li className="star">
            <svg
              width="24"
              height="21"
              viewBox="0 0 24 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.9264 0.781664C11.234 -0.122033 12.5121 -0.122035 12.8197 0.781662L14.7879 6.5641C14.9259 6.96936 15.3065 7.24187 15.7346 7.24187H22.0014C22.9814 7.24187 23.3765 8.50513 22.5713 9.06359L17.5825 12.5235C17.2157 12.7779 17.0619 13.2448 17.2058 13.6674L19.13 19.3205C19.4408 20.2337 18.4061 21.0142 17.6134 20.4644L12.4429 16.8785C12.1002 16.6408 11.6459 16.6408 11.3031 16.8785L6.13263 20.4644C5.33996 21.0142 4.30524 20.2337 4.61607 19.3205L6.54027 13.6674C6.68414 13.2448 6.53039 12.7779 6.1635 12.5235L1.17474 9.06359C0.369504 8.50513 0.764692 7.24187 1.74463 7.24187H8.01146C8.43956 7.24187 8.82018 6.96936 8.95812 6.5641L10.9264 0.781664Z"
                fill="#FFA858"
              />
            </svg>
          </li>
        ))}
      </ul>
      <p className="testimony-description">{testimonyDescription}</p>
      <span className="consumer-name">{consumerName}</span>
      <span className="consumer-title">{consumerTitle}</span>
    </div>
  );
};

export default Testimony;
