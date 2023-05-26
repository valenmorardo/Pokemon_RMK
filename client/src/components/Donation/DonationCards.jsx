import React from "react";
import DonationCard from "./DonationCard";

const DonationCards = ({ donations, SubmitButtonDonation }) => {
  return (
    <>
      {donations.map((donation) => (
        <DonationCard
          donation={donation}
          SubmitButtonDonation={SubmitButtonDonation}
        />
      ))}
    </>
  );
};

export default DonationCards;
