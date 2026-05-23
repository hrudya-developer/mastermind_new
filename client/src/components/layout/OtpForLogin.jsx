import React, { useState, useEffect } from "react";
import {
  Mail,
  Send,
  ShieldCheck,
  Zap,
  CheckCircle2,
  Lock,
  Home,
} from "lucide-react";

import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function OtpForLogin() {

  const navigate = useNavigate();

  /* STATES */
  const [email, setEmail] = useState(
    sessionStorage.getItem("user_email") || ""
  );

  const [loading, setLoading] = useState(false);

  /* LOAD SAVED EMAIL */
  useEffect(() => {

    const savedEmail =
      sessionStorage.getItem("user_email");

    if (savedEmail) {
      setEmail(savedEmail);
    }

  }, []);

  /* SEND OTP */
  const sendOtp = async () => {

    if (!email) {
      alert("Enter valid email");
      return;
    }

    try {

      setLoading(true);

      const formData = new FormData();

      formData.append("api", "psc@Miak2022");
      formData.append("type", "email");
      formData.append("email", email);

      const response = await axios.post(
        "http://psc.technocitysolutions.com/public/api/sendOTPforLogin",
        formData,
        {
          headers: {
            Accept: "application/json",
          },
        }
      );

      console.log(
        "SEND OTP RESPONSE:",
        response.data
      );

      if (response.data.status === true) {

        sessionStorage.setItem(
          "login_type",
          "email"
        );

        sessionStorage.setItem(
          "user_email",
          email
        );

        sessionStorage.setItem(
          "login_identifier",
          email
        );

        if (response.data.otp) {

          sessionStorage.setItem(
            "otp",
            String(response.data.otp)
          );
        }

        navigate("/otp_verification");

      } else {

        alert(
          response.data.message ||
          response.data.msg ||
          "Failed to send OTP"
        );
      }

    } catch (error) {

      console.error(
        "SEND OTP ERROR:",
        error
      );

      alert(
        error.response?.data?.message ||
        error.response?.data?.msg ||
        "Failed to send OTP"
      );

    } finally {

      setLoading(false);
    }
  };

  return (
    <section className="w-full min-h-screen grid place-content-center bg-[#f8f8fc] py-10">

      <Link to="/">
        <button
          aria-label="Home"
          className="w-[180px] flex gap-2 items-center justify-center rounded-xl ms-auto me-8 bg-gray-100 p-3 text-[rgb(var(--secondary))] transition hover:bg-slate-100 hover:text-slate-900"
        >
          <Home size={24} />
          Home
        </button>
      </Link>

      <div className="px-4 py-6 sm:px-6 lg:px-8 flex items-center justify-center">

        <div className="relative w-full max-w-6xl overflow-hidden rounded-[2rem] bg-white shadow-2xl ring-1 ring-slate-200">

          <div className="grid grid-cols-1 lg:grid-cols-[1.08fr_0.92fr]">

            {/* LEFT SIDE */}
            <section className="hidden bg-gradient-to-br from-violet-50 via-white to-indigo-50 p-8 lg:block lg:p-12">

              <div className="mb-5 flex items-center gap-4">

                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-violet-100 text-violet-700">
                  <Mail size={30} />
                </div>

                <div>
                  <h1 className="text-2xl font-bold tracking-tight text-[rgb(var(--secondary))]">
                    Continue with Email
                  </h1>

                  <p className="mt-2 text-slate-500 text-sm">
                    Verify your email to keep your account secure
                  </p>
                </div>
              </div>

              <div className="rounded-3xl bg-white/70 p-8 shadow-sm ring-1 ring-violet-100 backdrop-blur">

                <div className="relative mx-auto mb-5 flex h-80 max-w-md items-center justify-center">

                  <div className="absolute h-56 w-56 rounded-full border-2 border-dashed border-violet-200" />

                  <div className="absolute left-8 top-16 grid h-16 w-16 place-items-center rounded-full bg-violet-600 text-white shadow-lg">
                    <Mail size={28} />
                  </div>

                  <div className="relative flex items-center justify-center">

                    <div className="relative h-52 w-56 rounded-[2rem] bg-gradient-to-br from-violet-200 via-violet-100 to-white shadow-xl">

                      <div className="absolute inset-0 grid place-items-center">

                        <div className="grid h-16 w-16 place-items-center rounded-full bg-white shadow-lg">
                          <CheckCircle2
                            size={34}
                            className="text-violet-500"
                          />
                        </div>

                      </div>

                    </div>

                  </div>

                  <div className="absolute right-8 top-24 rounded-xl bg-rose-300 px-6 py-4 text-white shadow-md">
                    •••
                  </div>

                  <div className="absolute bottom-20 right-12 grid h-12 w-12 place-items-center rounded-full bg-emerald-100 text-emerald-600">
                    <Lock size={22} />
                  </div>

                </div>

                <h2 className="text-md font-semibold text-[rgb(var(--secondary))]">
                  Secure. Simple. Seamless.
                </h2>

                <div className="mt-6 space-y-5 text-slate-600 text-sm">

                  <Benefit
                    icon={<ShieldCheck size={22} />}
                    text="Extra layer of security for your account"
                  />

                  <Benefit
                    icon={<Zap size={22} />}
                    text="Quick verification in just a few seconds"
                  />

                  <Benefit
                    icon={<CheckCircle2 size={22} />}
                    text="Access your LMS anytime, anywhere"
                  />

                </div>

              </div>

            </section>

            {/* RIGHT SIDE */}
            <section className="px-5 py-10 sm:px-10 lg:px-14 lg:py-20">

              <div className="mx-auto max-w-md">

                <div className="mb-8 text-center">

                  <div className="mx-auto mb-7 grid h-16 w-16 place-items-center rounded-2xl bg-violet-100 text-violet-700">
                    <Mail size={34} />
                  </div>

                  <h2 className="text-lg font-semibold tracking-tight text-[rgb(var(--secondary))] sm:text-xl">
                    Verify your email
                  </h2>

                  <p className="mx-auto mt-4 max-w-sm text-sm leading-7 text-slate-500">
                    We'll send you a verification code to your email address.
                  </p>

                </div>

                <form
                  className="space-y-6"
                  onSubmit={(e) => {
                    e.preventDefault();
                    sendOtp();
                  }}
                >

                  <label className="block">

                    <span className="mb-2 block font-medium text-slate-700 text-sm">
                      Enter your email address
                    </span>

                    <div className="flex min-h-12 items-center overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition focus-within:border-violet-500 focus-within:ring-4 focus-within:ring-violet-100">

                      <Mail
                        size={20}
                        className="ms-4 text-slate-500"
                      />

                      <input
                        value={email}
                        onChange={(e) =>
                          setEmail(e.target.value)
                        }
                        type="email"
                        placeholder="Enter your email"
                        className="w-full min-w-0 px-4 text-sm outline-none"
                      />

                    </div>

                  </label>

                  <button
                    type="submit"
                    disabled={loading}
                    className="flex min-h-12 w-full items-center justify-center gap-3 rounded-2xl bg-[rgb(var(--primary))] px-6 text-sm font-semibold text-white shadow-lg shadow-violet-200 transition hover:bg-violet-700 disabled:opacity-70"
                  >

                    <Send size={22} />

                    {loading
                      ? "Sending..."
                      : "Send Email OTP"}

                  </button>

                </form>

                <p className="mt-7 flex items-center justify-center gap-2 text-center text-sm text-slate-400">
                  <Lock size={18} />
                  Your information is secure and encrypted
                </p>

              </div>

            </section>

          </div>

        </div>

      </div>

    </section>
  );
}

function Benefit({ icon, text }) {
  return (
    <div className="flex items-center gap-4">

      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-violet-100 text-violet-600">
        {icon}
      </span>

      <span>{text}</span>

    </div>
  );
}