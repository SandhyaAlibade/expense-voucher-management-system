import { useNavigate } from "react-router-dom";
function Dashboard() {
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem("user"));

    const logout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");

        window.location.href = "/";
    };

    return (
        <div style={{ padding: "30px" }}>

            <h1>Expense Voucher Management System</h1>

            <h2>Employee Dashboard</h2>

            <p>
                Welcome, <strong>{user?.name}</strong>
            </p>

            <p>
                Role: <strong>{user?.role}</strong>
            </p>

            <hr />

            <h3>Voucher Summary</h3>

            <div>
                <p>Total Vouchers: 0</p>
                <p>Drafts: 0</p>
                <p>Pending Approval: 0</p>
                <p>Approved: 0</p>
                <p>Rejected: 0</p>
                <p>Total Amount Claimed: ₹0</p>
            </div>

            <hr />

            <h3>Quick Actions</h3>

            <button onClick={() => navigate("/create-voucher")}>
                Create Voucher
            </button>

            {" "}

            <button onClick={() => navigate("/my-vouchers")}>
                My Vouchers
            </button>

            <br />
            <br />

            <button onClick={logout}>
                Logout
            </button>

        </div>
    );
}

export default Dashboard;
