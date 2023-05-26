import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { postPaymentDonationAction } from "../../redux/actions";
import DonationCards from "./DonationCards";
import DataCards from "./DataCards";

import s from "./Donation.module.css";

const Donation = () => {
  const dispatch = useDispatch();
  const donations = ["100", "200", "400", "800"];

  const [donationInput, setDonationInput] = useState();
  const handlerInput = (e) => {
    e.preventDefault();
    setDonationInput(e.target.value);
  };

  const SubmitInputDonation = (e) => {
    if (!donationInput) {
      alert("Por favor, llene el campo.");
    } else if (donationInput < 1) {
      alert("El minimo para donar es 1$ARS");
    } else {
      dispatch(postPaymentDonationAction(parseInt(donationInput)));
    }
  };

  const SubmitButtonDonation = (e) => {
    dispatch(postPaymentDonationAction(parseInt(e.target.value)));
  };

  return (
    <div className={s.background}>
      <div className={s.divBtn}>
        <Link to="/home">
          <button>GO BACK</button>
        </Link>
      </div>

      <div className={s.mainContainer}>
        <h1>DONATIONS</h1>
        <div className={s.parrafo}>
          <p>
            This section is made with Mercado Pago sandbox mode, that is, a
            testing mode.
            <br />
            This sandbox mode only accept the following card data:
          </p>
        </div>

        <div className={s.dataCardContainer}>
          <DataCards />
        </div>

        <div className={s.parrafo}>
          <p>
            If you wish to test this donation system, please use the
            aforementioned data.
          </p>
        </div>

        <div className={s.cardsContainer}>
          <DonationCards
            donations={donations}
            handlerInput={handlerInput}
            SubmitInputDonation={SubmitInputDonation}
            SubmitButtonDonation={SubmitButtonDonation}
          />
        </div>

        <h3 className={s.or}>OR...</h3>

        <div className={s.specificDonate}>
          <span>Specify your donation amount: </span>
          <input type="text" min="1" onChange={(e) => handlerInput(e)} />
          <button onClick={(e) => SubmitInputDonation(e)}> DONATE </button>
        </div>
      </div>
    </div>
  );
};

export default Donation;
