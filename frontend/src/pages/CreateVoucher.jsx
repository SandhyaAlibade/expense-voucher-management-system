import { useState } from "react";
import axios from "axios";

function CreateVoucher() {
    const [formData, setFormData] = useState({
        voucherDate: "",
        expenseDate: "",
        departmentName: "",
        expenseTitle: "",
        expenseCategory: "",
        expenseDescription: "",
        amount: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value
        });
    };

   const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const token = localStorage.getItem("token");

        const response = await axios.post(
            "http://localhost:5000/api/vouchers",
            formData,
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        );

        alert(
            response.data.message +
            "\nVoucher Number: " +
            response.data.voucherNumber
        );

        // Clear form after successful save
        setFormData({
            voucherDate: "",
            expenseDate: "",
            departmentName: "",
            expenseTitle: "",
            expenseCategory: "",
            expenseDescription: "",
            amount: ""
        });

    } catch (error) {
        console.error(error);

        alert(
            error.response?.data?.message ||
            "Failed to save voucher"
        );
    }
};

    return (
        <div style={{ padding: "30px" }}>

            <h1>Create Expense Voucher</h1>

            <form onSubmit={handleSubmit}>

                <div>
                    <label>Voucher Date *</label>
                    <br />
                    <input
                        type="date"
                        name="voucherDate"
                        value={formData.voucherDate}
                        onChange={handleChange}
                        required
                    />
                </div>

                <br />

                <div>
                    <label>Expense Date *</label>
                    <br />
                    <input
                        type="date"
                        name="expenseDate"
                        value={formData.expenseDate}
                        onChange={handleChange}
                        required
                    />
                </div>

                <br />

                <div>
                    <label>Department Name *</label>
                    <br />
                    <input
                        type="text"
                        name="departmentName"
                        value={formData.departmentName}
                        onChange={handleChange}
                        placeholder="Enter department"
                        required
                    />
                </div>

                <br />

                <div>
                    <label>Expense Title *</label>
                    <br />
                    <input
                        type="text"
                        name="expenseTitle"
                        value={formData.expenseTitle}
                        onChange={handleChange}
                        placeholder="Enter expense title"
                        required
                    />
                </div>

                <br />

                <div>
                    <label>Expense Category</label>
                    <br />
                    <select
                        name="expenseCategory"
                        value={formData.expenseCategory}
                        onChange={handleChange}
                    >
                        <option value="">Select Category</option>
                        <option value="Travel">Travel</option>
                        <option value="Food">Food</option>
                        <option value="Accommodation">
                            Accommodation
                        </option>
                        <option value="Office Supplies">
                            Office Supplies
                        </option>
                        <option value="Other">Other</option>
                    </select>
                </div>

                <br />

                <div>
                    <label>Expense Description</label>
                    <br />
                    <textarea
                        name="expenseDescription"
                        value={formData.expenseDescription}
                        onChange={handleChange}
                        placeholder="Describe the expense"
                        rows="4"
                        cols="40"
                    />
                </div>

                <br />

                <div>
                    <label>Amount *</label>
                    <br />
                    <input
                        type="number"
                        name="amount"
                        value={formData.amount}
                        onChange={handleChange}
                        placeholder="Enter amount"
                        min="0.01"
                        step="0.01"
                        required
                    />
                </div>

                <br />

                <button type="submit">
                    Save Draft
                </button>

            </form>

        </div>
    );
}

export default CreateVoucher;
