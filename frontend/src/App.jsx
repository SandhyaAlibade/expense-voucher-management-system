import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import CreateVoucher from "./pages/CreateVoucher";
import MyVouchers from "./pages/MyVouchers";
import VoucherDetails from "./pages/VoucherDetails";
import EditVoucher from "./pages/EditVoucher";
import DirectorDashboard from "./pages/DirectorDashboard";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
    return (
        <BrowserRouter>
            <Routes>

                <Route
                    path="/"
                    element={<Login />}
                />

                <Route
                    path="/dashboard"
                    element={
                        <ProtectedRoute>
                            <Dashboard />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/create-voucher"
                    element={
                        <ProtectedRoute>
                            <CreateVoucher />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/my-vouchers"
                    element={
                        <ProtectedRoute>
                            <MyVouchers />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/voucher/:id"
                    element={
                        <ProtectedRoute>
                            <VoucherDetails />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/voucher/:id/edit"
                    element={
                        <ProtectedRoute>
                            <EditVoucher />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/director-dashboard"
                    element={
                        <ProtectedRoute>
                            <DirectorDashboard />
                        </ProtectedRoute>
                    }
                />

            </Routes>
        </BrowserRouter>
    );
}

export default App;
