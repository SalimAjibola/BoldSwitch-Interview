import React from 'react';
import Gif from './../assets/paymentConfirm.gif'

function PaymentSuccessful() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-green-50 p-6">
      <img 
        src={Gif} 
        alt="Payment Successful"
        className="w-28 h-28 mb-6"
      />

      <h1 className="text-3xl font-bold text-green-600 mb-2">Payment Successful!</h1>

      <p className="text-gray-700 text-center max-w-md">
        Your transaction has been completed successfully. Thank you for your payment!
      </p>

      <button 
        className="mt-6 px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
        onClick={() => window.location.href = '/dashboard'}
      >
        Go to Dashboard
      </button>
    </div>
  );
}

export default PaymentSuccessful;
