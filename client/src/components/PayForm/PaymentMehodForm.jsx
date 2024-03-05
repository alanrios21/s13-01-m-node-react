import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Efectivo from "../../assets/Efectivo.png";
import MercadoPago from "../../assets/MercadoPago.png";
import Tarjeta from "../../assets/Tarjeta.png";
import paypal from "../../assets/paypal.png";
import chulo from "../../assets/chulo.png";

const PaymentMethodForm = () => {
  const [selectedPayment, setSelectedPayment] = useState(null);
  const [showMessage, setShowMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();

  const paymentMethods = [
    { name: "Efectivo", imageSrc: Efectivo },
    { name: "PayPal", imageSrc: paypal },
    { name: "MercadoPago", imageSrc: MercadoPago },
    { name: "Tarjeta de crédito - débito", imageSrc: Tarjeta },
  ];

  const handlePaymentSelect = (index) => {
    setSelectedPayment(index);
  };

  const handleConfirm = async () => {
    if (selectedPayment !== null) {
      switch (selectedPayment) {
        case 0:
        case 1:
        case 2:
          navigate("/NotPay");
          break;
        case 3:
          try {
            navigate("/Pay");
          } catch (error) {
            console.error(error);
          }
          break;
        default:
          break;
      }
    } else {
      setShowMessage(true);
      setTimeout(() => setShowMessage(false), 2000);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="w-full max-w-md mx-2">
        <div className="bg-white flex flex-col p-6 rounded-md">
          <p className="text-lg mb-2  text-center text-[#2B1A4E] font-bold">
            ELEGIR MÉTODO DE DONACION
          </p>
          {paymentMethods.map((method, index) => (
            <div
              key={index}
              className={`flex items-center my-2 bg-gray-200 rounded-md p-4 ${
                index === selectedPayment
                  ? "border border-verdeMarino cursor-pointer"
                  : ""
              }`}
              onClick={() => handlePaymentSelect(index)}
            >
              <img
                src={method.imageSrc}
                alt={method.name}
                className="w-6 h-6"
              />
              <p className="ml-2 ">{method.name}</p>
              {index === selectedPayment && (
                <img src={chulo} alt="Selected" className="w-6 h-6 ml-auto" />
              )}
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-4">
          <button
            onClick={handleConfirm}
            className="bg-[#2B1A4E] text-white px-4 py-2 w-[298px] h-[43px] rounded-2xl"
          >
            Confirmar
          </button>
        </div>
        {showMessage && (
          <div className="text-red-500 text-center mt-4">
            Seleccione una de la forma de donación.
          </div>
        )}
        {errorMessage && (
          <div className="text-red-500 text-center mt-4">{errorMessage}</div>
        )}
      </div>
    </div>
  );
};

export default PaymentMethodForm;