import React from "react";
import DonationCard from "./DonationCard";

const DonationCards = ({
  donations,
  handlerInput,
  SubmitInputDonation,
  SubmitButtonDonation,
}) => {
  return (
    <div>
      {donations.map((donation) => (
        <DonationCard
          donation={donation}
          handlerInput={handlerInput}
          SubmitInputDonation={SubmitInputDonation}
          SubmitButtonDonation={SubmitButtonDonation}
        />
      ))}
    </div>
  );
};

export default DonationCards;
