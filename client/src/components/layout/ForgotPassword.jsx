import { useState } from "react";
import api from "@/utils/api";
import { toast } from "react-toastify";

const ForgotPassword = () => {

  const [email, setEmail] = useState("");
  const [emailSent, setEmailSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      const res = await api.post("/user/forgot-password", { email });

      toast.success(res.data.message);
      setEmailSent(true);

    } catch (err) {

      toast.error(err.response?.data?.message || "Something went wrong");

    }
  };

  return (

    <div className="flex justify-center items-center h-screen">

      {!emailSent ? (

        <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow w-87.5">

          <h2 className="text-xl mb-4 text-center">Forgot Password</h2>

          <input
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border p-2 w-full mb-4 rounded"
          />

          <button
            type="submit"
            className="bg-[rgb(var(--secondary))] text-white py-2 px-4 rounded w-full hover:bg-[rgb(var(--primary))]"
          >
            Send Reset Link
          </button>

        </form>

      ) : (

        <div className="bg-white p-6 rounded shadow text-center w-87.5">

          <h2 className="text-xl mb-2">Check your email</h2>

          <p className="text-gray-600 mb-2">
            We sent a password reset link to
          </p>

          <b>{email}</b>

        </div>

      )}

    </div>

  );

};

export default ForgotPassword;