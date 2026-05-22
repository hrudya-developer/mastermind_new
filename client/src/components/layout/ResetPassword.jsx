import { useParams, useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import api from "@/utils/api";
import { toast } from "react-toastify";
import { ModalContext } from "@/context/ModalContext";

const ResetPassword = () => {

  const { token } = useParams();
  const navigate = useNavigate();
  const { openLogin } = useContext(ModalContext);

  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      const res = await api.post(`/user/reset-password/${token}`, {
        password
      });

      toast.success(res.data.message || "Password reset successfully");

      navigate("/");

      setTimeout(() => {
        openLogin();
      }, 1000);

    } catch (err) {
      toast.error(err.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow">

        <h2 className="text-xl mb-4">Reset Password</h2>

        <input
          type="password"
          placeholder="New Password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          className="border p-2 w-full mb-4"
        />

        <button
          type="submit"
          className="bg-[rgb(var(--secondary))] text-white py-2 px-4 rounded"
        >
          Reset Password
        </button>

      </form>
    </div>
  );
};

export default ResetPassword;