import { Routes, Route } from 'react-router-dom';
import Home from './screens/Home';
import Dashboard from './screens/Dashboard';
import PaymentSuccessful from './screens/PaymentSuccessful';
import Error from './screens/Error';

const App = () => {
   return (
      <>
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/paymentSuccessful" element={<PaymentSuccessful />} />
            <Route path="*" element={<Error />} />
         </Routes>
      </>
   );
};

export default App;
