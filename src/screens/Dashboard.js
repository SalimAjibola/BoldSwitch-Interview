import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const [user, setUser] = useState(null);
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      navigate("/");
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  const isCardNumberValid = /^\d{16}$/.test(cardNumber);
  const isExpiryValid = /^(0[1-9]|1[0-2])\/\d{2}$/.test(expiryDate);
  const isCvvValid = /^\d{3,4}$/.test(cvv);

  const handlePayment = (e) => {
    e.preventDefault();
    if (isCardNumberValid && isExpiryValid && isCvvValid) {
      navigate("/paymentsuccessful");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      
      <header className="bg-white shadow-sm px-6 py-4 flex justify-between items-center sticky top-0 z-50">
        <h1 className="text-xl font-bold text-gray-800">
          Welcome, {user?.fullName}
        </h1>
        <button
          onClick={handleLogout}
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
        >
          Logout
        </button>
      </header>

      {/* Payment Form */}
      <div className="max-w-md mx-auto mt-12 bg-white p-6 rounded shadow-md">
        <h2 className="text-lg font-semibold mb-4">Credit Card Payment</h2>

        <form onSubmit={handlePayment} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Card Number
            </label>
            <input
              type="text"
              maxLength="16"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value.replace(/\D/g, ""))}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:outline-indigo-600"
              placeholder="1234 5678 9012 3456"
              required
            />
            {!isCardNumberValid && cardNumber.length > 0 && (
              <p className="text-red-500 text-sm">Card number must be 16 digits</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Expiry Date (MM/YY), Example:10/26 
            </label>
            <input
              type="text"
              value={expiryDate}
              onChange={(e) => setExpiryDate(e.target.value)}
              placeholder="MM/YY"
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:outline-indigo-600"
              required
            />
            {!isExpiryValid && expiryDate.length > 0 && (
              <p className="text-red-500 text-sm">Enter valid expiry in MM/YY</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              CVV
            </label>
            <input
              type="text"
              maxLength="4"
              value={cvv}
              onChange={(e) => setCvv(e.target.value.replace(/\D/g, ""))}
              placeholder="123"
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:outline-indigo-600"
              required
            />
            {!isCvvValid && cvv.length > 0 && (
              <p className="text-red-500 text-sm">CVV must be 3 or 4 digits</p>
            )}
          </div>

          {isCardNumberValid && isExpiryValid && isCvvValid && (
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700"
            >
              Pay Now
            </button>
          )}
        </form>
      </div>
    </div>
  );
}

export default Dashboard;
