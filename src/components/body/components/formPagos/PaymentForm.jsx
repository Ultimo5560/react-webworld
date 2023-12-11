import React, { useState } from "react";

export const PaymentForm = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [cardName, setCardName] = useState("");
  const [cardExpDate, setCardExpDate] = useState("");
  const [cardCvv, setCardCvv] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí iría la lógica para procesar el pago
  };

  return (
    <form onSubmit={handleSubmit} className="formPayment">
      <label className="labelPayment" htmlFor="cardNumber">Número de tarjeta:</label>
      <input
        type="text"
        id="cardNumber"
        value={cardNumber}
        onChange={(event) => setCardNumber(event.target.value)}
        required
        className="inputPayment"
      />
      <br />
      <label className="labelPayment" htmlFor="cardName">Nombre en la tarjeta:</label>
      <input
        type="text"
        id="cardName"
        value={cardName}
        onChange={(event) => setCardName(event.target.value)}
        required
        className="inputPayment"
      />
      <br />
      <label className="labelPayment" htmlFor="cardExpDate">Fecha de vencimiento:</label>
      <input
        type="text"
        id="cardExpDate"
        value={cardExpDate}
        onChange={(event) => setCardExpDate(event.target.value)}
        required
        className="inputPayment"
      />
      <br />
      <label className="labelPayment" htmlFor="cardCvv">CVV:</label>
      <input
        type="text"
        id="cardCvv"
        value={cardCvv}
        onChange={(event) => setCardCvv(event.target.value)}
        required
        className="inputPayment"
      />
      <br />
      <button className="buttonPayment" type="submit">Pagar</button>
    </form>
  );
}