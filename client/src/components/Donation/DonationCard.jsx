import React from "react";
import s from "./DonationCard.module.css";

const DonationCard = ({ donation, SubmitButtonDonation }) => {
  return (
    <div className={s.card}>
      <span>
        {donation} ARS<span className={s.signoPeso}>$</span>{" "}
      </span>
      <button value={donation} onClick={(e) => SubmitButtonDonation(e)}>
        {" "}
        DONATE{" "}
      </button>
    </div>
  );
};

export default DonationCard;
