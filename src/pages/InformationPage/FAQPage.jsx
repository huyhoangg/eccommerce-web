import { Routes, Route } from "react-router-dom";
import PaymentMethod from "~/components/Information/PaymentMethod";
import Policy from "~/components/Information/Policy";
import Refund from "~/components/Information/Refund";

function FAQPage() {
    return (
    <Routes>
        <Route path="/payment" element={<PaymentMethod />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="/refund" element={<Refund />} />
    </Routes>
    )
}

export default FAQPage;
