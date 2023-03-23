import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { postPaymentDonation } from "../../redux/actions";
import DonationCards from "./DonationCards";

const Donation = () => {
  const dispatch = useDispatch();
  const donations = ["100", "200", "400", "800", "input"];

  const [donationInput, setDonationInput] = useState();
  const handlerInput = (e) => {
    e.preventDefault();
    setDonationInput(e.target.value);
  };

  const SubmitInputDonation = (e) => {
    if (!donationInput) {
      alert("Por favor, llene el campo.");
    } else if (donationInput < 1) {
      alert("El minimo para donar es 1$");
    } else {
      dispatch(postPaymentDonation(parseInt(donationInput)));
    }
  };

  const SubmitButtonDonation = (e) => {
    dispatch(postPaymentDonation(parseInt(e.target.value)));
  };

  return (
    <div>
      <div>
        <h1>DONACIONES</h1>
        <h5>
          **Este apartado integra mercado pago en forma de test de checkout,
          porfavor, no ingresar datos reales.**
        </h5>
        <h3>Opciones de donacion:</h3>
      </div>

      <div>
        <DonationCards
          donations={donations}
          handlerInput={handlerInput}
          SubmitInputDonation={SubmitInputDonation}
          SubmitButtonDonation={SubmitButtonDonation}
        />
      </div>
    </div>
  );
};

export default Donation;
