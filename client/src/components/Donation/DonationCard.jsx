import React from "react";

const DonationCard = ({
  donation,
  handlerInput,
  SubmitInputDonation,
 SubmitButtonDonation,
}) => {
  return (
    <div>
      {donation !== "input" ? (
        <div>
          <span>{donation} ARS$ </span>
          <button
            value={donation}
            onClick={(e) => SubmitButtonDonation(e)}
          >
            {" "}
            Donar{" "}
          </button>
          <hr />
        </div>
      ) : (
        <div>
          <span>Cantidad en concreto: </span>
          <input type="number" onChange={(e) => handlerInput(e)} />
          <button onClick={(e) => SubmitInputDonation(e)}>
            {" "}
            Donar{" "}
          </button>
        </div>
      )}
    </div>
  );
};

export default DonationCard;
