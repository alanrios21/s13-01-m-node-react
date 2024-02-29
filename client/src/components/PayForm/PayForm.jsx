import React, { useState, useEffect } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useNavigate } from "react-router-dom";

const PayForm = () => {
  const [clientSecret, setClientSecret] = useState("");
  const [donationAmount, setDonationAmount] = useState(""); // Estado para almacenar el monto de la donación
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate(); 
  const [cancelMessage, setCancelMessage] = useState("");
  const [processingMessage, setProcessingMessage] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);

  useEffect(() => {
    const stripePromise = loadStripe(
      "pk_test_51O4gkgD3YXfw7A9OCrcmMR7KH5RB0lHjigzLXqtap7qigk2Le0kh9Q0OGTjSaYpdSTRTcJS1yIFA9jIVML956B9O00NqWfPeG6"
    );

    stripePromise.then((stripe) => {
      stripe.paymentIntents
        .create({
          amount: 1000, // Este es el monto en centavos (1000 centavos = $10)
          currency: "USD",
        })
        .then((data) => {
          setClientSecret(data.client_secret);
        });
    });
  }, []);

  const handleCancel = () => {
    setCancelMessage("Cancelando proceso de pago...");

    setTimeout(() => {
      setCancelMessage("");
      window.history.back();
    }, 1000);
  };

  const handlePayment = async () => {
    if (!stripe || !elements) {
      return;
    }

    setProcessingMessage(true);

    // Simulación de procesamiento de pago
    await new Promise((resolve) => setTimeout(resolve, 3000));

    setProcessingMessage(false);
    setSuccessMessage(true);

    // Navegar a una nueva ruta después de procesar el pago
    setTimeout(() => {
      navigate("/");
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="w-full max-w-md">
        <div className="text-center lg:absolute lg:top-1/2 lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:-translate-y-[120px]">
          <h2 className="text-xl font-bold mt-4 text-[#2B1A4E]">DONAR CON TARJETA</h2>
        </div>
        <h2 className="text-xl font-semibold text-center mb-8">
          INGRESA LOS DATOS DE TU TARJETA
        </h2>
        <CardElement className="p-3 border border-gray-300 rounded mb-8 mt-[80px]" />
        <div className="flex items-center mb-4 p-2 justify-center">
          {/* <h1 className="mr-4 text-center">Ingresa el valor a donar</h1> */}
          <div className="relative">
            <input
              type="text"
              value={donationAmount}
              onChange={(e) => setDonationAmount(e.target.value)} 
              inputMode="numeric"
              pattern="[0-9]*" 
              className="p-3 border border-gray-300 rounded mb-4 pl-10 w-[220px] bg-gray-100"
              placeholder="Valor a donar (USD)"
            />
            <span className="absolute left-3 top-3 text-gray-400">$</span>
          </div>
        </div>
        {processingMessage && (
          <p className="text-center text-gray-700 font-semibold">Realizando proceso de donación...</p>
        )}
        {successMessage && (
          <p className="text-center text-green-600 font-semibold">Donación realizada exitosamente...</p>
        )}
        <div>
          {cancelMessage && (
            <p className="text-black font-bold text-center mb-2 text-xl">
              {cancelMessage}
            </p>
          )}
        </div>
        <div className="flex justify-center">
          <button
            className="bg-gray-700 text-white rounded-md px-4 py-2 mr-16 hover-bg-gray-700"
            onClick={handleCancel}
          >
            Cancelar
          </button>
          <button
            className="bg-[#2B1A4E] text-white rounded-md px-4 py-2 hover-bg-[#41BCAC]"
            onClick={handlePayment}
          >
            Realizar Pago
          </button>
        </div>
      </div>
    </div>
  );
};

export default PayForm;