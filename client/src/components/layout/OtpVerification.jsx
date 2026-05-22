import React, { useRef, useState, useEffect } from "react";
import {
  ArrowLeft,
  ShieldCheck,
  CircleHelp,
  RotateCcw,
  Lock,
  MoveRight,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

const RESEND_SECONDS = 45;

const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL ||
  "https://psc.technocitysolutions.com/public/api";

export default function OtpVerification() {
  const navigate = useNavigate();

  const [otp, setOtp] = useState(["", "", "", ""]);
  const inputRefs = useRef([]);

  const [loading, setLoading] = useState(false);
  const [resendLoading, setResendLoading] = useState(false);
  const [timer, setTimer] = useState(RESEND_SECONDS);
  const [canResend, setCanResend] = useState(false);
  const [error, setError] = useState("");

  const identifier = sessionStorage.getItem("login_identifier") || "";
  const loginType = sessionStorage.getItem("login_type") || "mobile";

  const maskedDisplay =
    loginType === "mobile"
      ? `+91 ${identifier.replace(/^91/, "").slice(0, 5)} ${"*".repeat(5)}`
      : identifier.replace(/(.{3}).*(@.*)/, "$1***$2");

  useEffect(() => {
    if (timer <= 0) {
      setCanResend(true);
      return;
    }

    const t = setTimeout(() => {
      setTimer((s) => s - 1);
    }, 1000);

    return () => clearTimeout(t);
  }, [timer]);

  const formatTimer = (s) =>
    `${String(Math.floor(s / 60)).padStart(2, "0")}:${String(
      s % 60
    ).padStart(2, "0")}`;

  const handleChange = (value, index) => {
    if (!/^\d?$/.test(value)) return;

    setError("");

    const updated = [...otp];
    updated[index] = value;
    setOtp(updated);

    if (value && index < 3) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();

    const pasted = e.clipboardData
      .getData("text")
      .replace(/\D/g, "")
      .slice(0, 4);

    const updated = [...otp];

    pasted.split("").forEach((char, i) => {
      updated[i] = char;
    });

    setOtp(updated);
    inputRefs.current[Math.min(pasted.length, 3)]?.focus();
  };

  const saveVerifyData = (data) => {
    console.log("FULL VERIFY RESPONSE:", data);

    const user =
      data.user ||
      data.data ||
      data.result ||
      data.details ||
      {};

    const uid =
      data.uid ||
      data.user_id ||
      data.id ||
      user.uid ||
      user.user_id ||
      user.id ||
      "";

    if (uid) {
      sessionStorage.setItem("uid", String(uid));
    } else {
      console.warn("UID not returned by backend. Check VerifyOTP API response.");
    }

    if (loginType === "mobile") {
      sessionStorage.setItem("mobile", identifier.replace(/^91/, ""));
      sessionStorage.removeItem("email");
    } else {
      sessionStorage.setItem("email", identifier);
      sessionStorage.removeItem("mobile");
    }

    if (data.token) {
      sessionStorage.setItem("token", String(data.token));
    }

    if (Object.keys(user).length > 0) {
      sessionStorage.setItem("user", JSON.stringify(user));
    }

    sessionStorage.setItem("is_verified", "true");
  };

  const handleVerify = async () => {
    const enteredOtp = otp.join("");

    if (enteredOtp.length < 4) {
      setError("Please enter the 4-digit OTP");
      return;
    }

    if (!identifier) {
      setError("Login details missing. Please try login again.");
      return;
    }

    try {
      setLoading(true);
      setError("");

      const formData = new FormData();

      formData.append("api", "psc@Miak2022");
      formData.append("type", loginType);
      formData.append("otp", enteredOtp);

      if (loginType === "mobile") {
        formData.append("mobile", identifier);
        formData.append("code", "91");
      } else {
        formData.append("email", identifier);
      }

      formData.append("model", "web");
      formData.append("manufacture", "web");
      formData.append("brand", "web");
      formData.append("sdk", "web");
      formData.append("release", "web");
      formData.append("token", "web");

      const response = await axios.post(`${API_BASE_URL}/VerifyOTP`, formData, {
        headers: {
          Accept: "application/json",
        },
      });
      console.log("----------->",response.data);

      console.log("VERIFY OTP RESPONSE:", response.data);
      console.log("VERIFY RESPONSE KEYS:", Object.keys(response.data || {}));

if (response.data.status === true) {

  saveVerifyData(response.data);

  const uid = response.data.uid;

  // save uid
  sessionStorage.setItem("uid", uid);

  try {

    // CHECK USER PROFILE USING UID
    const profileForm = new FormData();
    profileForm.append("api", "psc@Miak2022");
    profileForm.append("uid", uid);

    const profileResponse = await axios.post(
      `${API_BASE_URL}/getStudentProfile`,
      profileForm,
      {
        headers: {
          Accept: "application/json",
        },
      }
    );

    console.log("PROFILE RESPONSE:", profileResponse.data);

    // EXISTING USER
    if (
      profileResponse.data.status === true &&
      profileResponse.data.data
    ) {

      Swal.fire({
        icon: "success",
        title: "Login Successful",
        text: "Welcome back",
        confirmButtonText: "Continue",
        confirmButtonColor: "#7c3aed",
      }).then(() => {
        navigate("/dashboard");
      });

    }

    // NEW USER
    else {

      Swal.fire({
        icon: "success",
        title: "Verification Successful",
        text: "Complete your profile",
        confirmButtonText: "Continue",
        confirmButtonColor: "#7c3aed",
      }).then(() => {
        navigate("/setUserProfile");
      });

    }

  } catch (profileError) {

    console.error("PROFILE CHECK ERROR:", profileError);

    navigate("/setUserProfile");

  }

}
      else {
        setError(
          response.data.message ||
            response.data.msg ||
            "OTP verification failed"
        );
      }
    } catch (err) {
      console.error("VERIFY OTP ERROR:", err);

      setError(
        err.response?.data?.message ||
          err.response?.data?.msg ||
          "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleResend = async () => {
    if (!canResend) return;

    if (!identifier) {
      setError("Login details missing. Please try login again.");
      return;
    }

    try {
      setResendLoading(true);
      setError("");

      const formData = new FormData();

      formData.append("api", "psc@Miak2022");

      if (loginType === "mobile") {
        formData.append("type", "mobile");
        formData.append("mobile", identifier);
        formData.append("code", "91");
        formData.append("authkey", "349340AYqE85Eg35fd6f2d6P1");
        formData.append("sender", "MSRMND");
        formData.append("route", "4");
        formData.append("country", "0");
        formData.append("DLT_TE_ID", "1207174167297374178");
      } else {
        formData.append("type", "email");
        formData.append("email", identifier);
      }

      const response = await axios.post(
        `${API_BASE_URL}/sendOTPforLogin`,
        formData,
        {
          headers: {
            Accept: "application/json",
          },
        }
      );

      console.log("RESEND OTP RESPONSE:", response.data);

      if (response.data.status === true) {
        setOtp(["", "", "", ""]);
        inputRefs.current[0]?.focus();
        setTimer(RESEND_SECONDS);
        setCanResend(false);

        Swal.fire({
          icon: "success",
          title: "OTP Sent",
          text: "New OTP sent successfully",
          timer: 1800,
          showConfirmButton: false,
        });
      } else {
        setError(
          response.data.message ||
            response.data.msg ||
            "Failed to resend OTP"
        );
      }
    } catch (err) {
      console.error("RESEND ERROR:", err);

      setError(
        err.response?.data?.message ||
          err.response?.data?.msg ||
          "Failed to resend OTP. Please try again."
      );
    } finally {
      setResendLoading(false);
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-violet-50 via-white to-indigo-50 px-4 py-8 sm:px-6 lg:px-10 flex items-center justify-center overflow-hidden">
      <div className="w-full max-w-7xl overflow-hidden rounded-[40px] border border-violet-100 bg-white shadow-[0_20px_80px_rgba(124,58,237,0.12)]">
        <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="relative hidden lg:flex flex-col justify-between overflow-hidden bg-gradient-to-br from-violet-50 via-white to-violet-100 p-12 xl:p-14">
            <div className="absolute -top-28 -left-28 h-80 w-80 rounded-full bg-violet-200/30 blur-3xl" />
            <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-indigo-100/40 blur-3xl" />

            <Link to="/sendOtpLogin">
              <button className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-slate-700 shadow-lg transition hover:scale-105">
                <ArrowLeft size={26} />
              </button>
            </Link>

            <div className="relative z-10 flex flex-col items-center">
              <div className="relative mb-10">
                <div className="absolute inset-0 rounded-full bg-violet-300 blur-3xl opacity-30" />

                <div className="relative flex h-40 w-40 items-center justify-center rounded-[45px] bg-gradient-to-br from-violet-600 to-indigo-600 shadow-[0_25px_60px_rgba(124,58,237,0.45)]">
                  <ShieldCheck className="text-white" size={38} />
                </div>

                <div className="absolute -bottom-3 -right-3 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-400 text-white shadow-xl ring-8 ring-white text-3xl font-bold">
                  ✓
                </div>
              </div>

              <h2 className="text-xl font-bold leading-tight text-slate-900 text-center">
                Your security,
                <br />
                our priority.
              </h2>

              <p className="mt-6 max-w-md text-lg leading-8 text-slate-500 text-center">
                We've sent a secure 4-digit verification code to your{" "}
                {loginType === "mobile" ? "mobile number" : "email"} to
                complete authentication.
              </p>
            </div>

            <div className="relative z-10 flex items-center gap-3 text-slate-500">
              <Lock size={18} />
              Your information is secure and encrypted
            </div>
          </div>

          <div className="relative flex flex-col justify-center px-5 py-10 sm:px-10 lg:px-16 xl:px-20 lg:py-14">
            <div className="mb-8 flex items-center justify-between lg:hidden">
              <Link to="/sendOtpLogin">
                <button className="flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-50 text-slate-700 shadow-sm">
                  <ArrowLeft size={22} />
                </button>
              </Link>

              <button className="flex items-center gap-2 rounded-full bg-violet-50 px-5 py-3 text-sm font-semibold text-violet-600">
                <CircleHelp size={18} />
                Help
              </button>
            </div>

            <div className="mb-8 hidden justify-end lg:flex">
              <button className="flex items-center gap-2 rounded-full bg-violet-50 px-5 py-3 text-sm font-semibold text-violet-600">
                <CircleHelp size={18} />
                Help
              </button>
            </div>

            <div className="mb-8 flex justify-center lg:hidden">
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-violet-300 blur-3xl opacity-30" />

                <div className="relative flex h-28 w-28 items-center justify-center rounded-[28px] bg-gradient-to-br from-violet-600 to-indigo-600 shadow-[0_15px_40px_rgba(124,58,237,0.35)]">
                  <ShieldCheck className="text-white" size={50} />
                </div>
              </div>
            </div>

            <div>
              <h1 className="text-3xl sm:text-4xl xl:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
                Complete verification
              </h1>

              <p className="mt-5 text-base sm:text-lg leading-8 text-slate-500">
                Enter the 4-digit code sent to
              </p>

              <h3 className="mt-2 text-2xl sm:text-3xl font-bold text-violet-600 break-all">
                {maskedDisplay}
              </h3>
            </div>

            <div className="mt-10 flex items-center justify-between gap-3 sm:gap-5 max-w-md">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  ref={(el) => (inputRefs.current[index] = el)}
                  type="text"
                  inputMode="numeric"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleChange(e.target.value, index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  onPaste={index === 0 ? handlePaste : undefined}
                  className={`h-16 w-16 sm:h-20 sm:w-20 rounded-3xl border-2 bg-white text-center text-2xl sm:text-3xl font-bold text-violet-700 shadow-sm outline-none transition-all focus:ring-4 focus:ring-violet-100 ${
                    error
                      ? "border-red-400 focus:border-red-400"
                      : "border-violet-200 focus:border-violet-500"
                  }`}
                />
              ))}
            </div>

            {error && (
              <p className="mt-3 text-sm font-medium text-red-500">{error}</p>
            )}

            <div className="mt-8 rounded-3xl border border-violet-100 bg-violet-50/60 p-5 sm:p-6 max-w-xl">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-violet-600 shadow-sm">
                  <RotateCcw size={24} />
                </div>

                <div>
                  {canResend ? (
                    <p className="text-sm sm:text-base text-violet-600 font-semibold">
                      Ready to resend
                    </p>
                  ) : (
                    <>
                      <p className="text-sm sm:text-base text-slate-500">
                        Resend code in
                      </p>

                      <h2 className="text-2xl font-bold text-violet-600">
                        {formatTimer(timer)}
                      </h2>
                    </>
                  )}
                </div>
              </div>
            </div>

            <div className="mt-8 text-center lg:text-left">
              <p className="text-sm sm:text-base text-slate-400">
                Didn't receive the code?
              </p>

              <div className="mt-4 flex flex-col items-center gap-5 sm:flex-row sm:justify-start sm:gap-8 text-violet-600 font-semibold">
                <button
                  onClick={handleResend}
                  disabled={!canResend || resendLoading}
                  className="flex items-center gap-2 transition hover:text-violet-800 disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  <RotateCcw size={18} />
                  {resendLoading ? "Sending..." : "Resend OTP"}
                </button>

                <div className="hidden sm:block h-5 w-px bg-slate-300" />

                <button className="flex items-center gap-2 transition hover:text-violet-800">
                  <CircleHelp size={18} />
                  Help me
                </button>
              </div>
            </div>

            <button
              onClick={handleVerify}
              disabled={loading || otp.join("").length < 4}
              className="mt-10 flex h-16 w-full items-center justify-center gap-3 rounded-3xl bg-gradient-to-r from-violet-600 to-indigo-500 text-lg font-bold text-white shadow-[0_15px_40px_rgba(124,58,237,0.35)] transition-all hover:scale-[1.01] hover:shadow-[0_20px_50px_rgba(124,58,237,0.45)] active:scale-[0.99] disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              {loading ? "Verifying..." : "VERIFY"}
              {!loading && <MoveRight size={24} />}
            </button>

            <div className="mt-8 flex items-center justify-center gap-2 text-center text-sm text-slate-400 lg:hidden">
              <Lock size={16} />
              Your information is secure and encrypted
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}    