import React, { useState, useEffect } from "react";
import {
  Mail, Send, ShieldCheck, Zap, CheckCircle2, Lock,
  Smartphone, GraduationCap, ChevronDown, Home, ArrowLeft,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function OtpForLogin() {
const navigate = useNavigate();

/* STATES */
const [phone, setPhone] = useState(
  sessionStorage.getItem("user_mobile") || ""
);

const [email, setEmail] = useState(
  sessionStorage.getItem("user_email") || ""
);

const [loading, setLoading] = useState(false);

const [mode, setMode] = useState(
  sessionStorage.getItem("login_type") || "mobile"
);

/* LOAD SAVED DATA */
useEffect(() => {
  const savedMobile =
    sessionStorage.getItem("user_mobile");

  const savedEmail =
    sessionStorage.getItem("user_email");

  if (savedMobile) {
    setPhone(savedMobile);
  }

  if (savedEmail) {
    setEmail(savedEmail);
  }
}, []);

/* SEND OTP */
const sendOtp = async () => {
  if (mode === "mobile" && phone.length !== 10) {
    alert("Enter valid mobile number");
    return;
  }

  if (mode === "email" && !email) {
    alert("Enter valid email");
    return;
  }

  try {
    setLoading(true);

    const formData = new FormData();

    formData.append("api", "psc@Miak2022");

    if (mode === "mobile") {

      formData.append("type", "mobile");

      // SEND AS 91XXXXXXXXXX
      formData.append("mobile", "91" + phone);

      formData.append("code", "91");

      /* OPTIONAL MSG91 FIELDS */
      formData.append(
        "authkey",
        "349340AYqE85Eg35fd6f2d6P1"
      );

      formData.append("sender", "MSRMND");
      formData.append("route", "4");
      formData.append("country", "0");

      formData.append(
        "DLT_TE_ID",
        "1207174167297374178"
      );

      /* DEVICE INFO */
      formData.append("model", "web");
      formData.append("manufacture", "web");
      formData.append("brand", "web");
      formData.append("sdk", "web");
      formData.append("release", "web");
      formData.append("token", "web");

    } else {

      formData.append("type", "email");
      formData.append("email", email);
    }

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

      /* SAVE LOGIN TYPE */
      sessionStorage.setItem(
        "login_type",
        mode
      );

      /* SAVE MOBILE */
      if (mode === "mobile") {

        // SAVE ONLY 10 DIGITS
        sessionStorage.setItem(
          "user_mobile",
          phone
        );

        // SAVE FULL NUMBER FOR OTP VERIFY
        sessionStorage.setItem(
          "login_identifier",
          response.data.number ||
            "91" + phone
        );

      } else {

        /* SAVE EMAIL */
        sessionStorage.setItem(
          "user_email",
          email
        );

        sessionStorage.setItem(
          "login_identifier",
          email
        );
      }

      /* SAVE OTP */
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
                  {mode === "mobile" ? <Smartphone size={30} /> : <Mail size={30} />}
                </div>
                <div>
                  <h1 className="text-2xl font-bold tracking-tight text-[rgb(var(--secondary))]">
                    {mode === "mobile" ? "Continue with Mobile" : "Continue with Email"}
                  </h1>
                  <p className="mt-2 text-slate-500 text-sm">
                    {mode === "mobile"
                      ? "Verify your number to keep your account secure"
                      : "Verify your email to keep your account secure"}
                  </p>
                </div>
              </div>

              <div className="rounded-3xl bg-white/70 p-8 shadow-sm ring-1 ring-violet-100 backdrop-blur">
                {mode === "mobile" ? (
                  <div className="relative mx-auto mb-5 flex h-80 max-w-md items-center justify-center">
                    <div className="absolute h-56 w-56 rounded-full border-2 border-dashed border-violet-200" />
                    <div className="absolute left-8 top-16 grid h-16 w-16 place-items-center rounded-full bg-violet-600 text-white shadow-lg">
                      <GraduationCap size={30} />
                    </div>
                    <div className="absolute bottom-16 left-12 h-24 w-44 rounded-t-2xl border-8 border-slate-300 bg-white/80" />
                    <div className="relative h-72 w-40 rounded-[2rem] border-[10px] border-violet-950 bg-gradient-to-b from-violet-100 to-white shadow-xl">
                      <div className="absolute left-1/2 top-0 h-4 w-16 -translate-x-1/2 rounded-b-xl bg-violet-950" />
                      <div className="mt-16 grid place-items-center">
                        <div className="grid h-16 w-16 place-items-center rounded-2xl bg-emerald-300 text-white ring-4 ring-white">
                          <CheckCircle2 size={34} />
                        </div>
                        <div className="mt-5 flex gap-2 rounded-lg bg-white px-4 py-3 shadow-sm">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <span key={i} className="h-2 w-2 rounded-full bg-violet-500" />
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="absolute right-8 top-24 rounded-xl bg-rose-300 px-6 py-4 text-white shadow-md">•••</div>
                    <div className="absolute bottom-20 right-12 grid h-12 w-12 place-items-center rounded-full bg-emerald-100 text-emerald-600">
                      <Lock size={22} />
                    </div>
                  </div>
                ) : (
                  <div className="relative mx-auto mb-5 flex h-80 max-w-md items-center justify-center">
                    <div className="absolute h-56 w-56 rounded-full border-2 border-dashed border-violet-200" />
                    <div className="absolute left-8 top-16 grid h-16 w-16 place-items-center rounded-full bg-violet-600 text-white shadow-lg">
                      <Mail size={28} />
                    </div>
                    <div className="relative flex items-center justify-center">
                      <div className="relative h-52 w-56 rounded-[2rem] bg-gradient-to-br from-violet-200 via-violet-100 to-white shadow-xl">
                        <div className="absolute inset-0 grid place-items-center">
                          <div className="grid h-16 w-16 place-items-center rounded-full bg-white shadow-lg">
                            <CheckCircle2 size={34} className="text-violet-500" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute right-8 top-24 rounded-xl bg-rose-300 px-6 py-4 text-white shadow-md">•••</div>
                    <div className="absolute bottom-20 right-12 grid h-12 w-12 place-items-center rounded-full bg-emerald-100 text-emerald-600">
                      <Lock size={22} />
                    </div>
                  </div>
                )}

                <h2 className="text-md font-semibold text-[rgb(var(--secondary))]">
                  Secure. Simple. Seamless.
                </h2>
                <div className="mt-6 space-y-5 text-slate-600 text-sm">
                  <Benefit icon={<ShieldCheck size={22} />} text="Extra layer of security for your account" />
                  <Benefit icon={<Zap size={22} />} text="Quick verification in just a few seconds" />
                  <Benefit icon={<CheckCircle2 size={22} />} text="Access your LMS anytime, anywhere" />
                </div>
              </div>
            </section>

            {/* RIGHT SIDE */}
            <section className="px-5 py-10 sm:px-10 lg:px-14 lg:py-20">
              <div className="mx-auto max-w-md">
                <div className="mb-8 text-center">
                  <div className="mx-auto mb-7 grid h-16 w-16 place-items-center rounded-2xl bg-violet-100 text-violet-700">
                    {mode === "mobile" ? <Smartphone size={34} /> : <Mail size={34} />}
                  </div>
                  <h2 className="text-lg font-semibold tracking-tight text-[rgb(var(--secondary))] sm:text-xl">
                    {mode === "mobile" ? "Verify your mobile number" : "Verify your email"}
                  </h2>
                  <p className="mx-auto mt-4 max-w-sm text-sm leading-7 text-slate-500">
                    {mode === "mobile"
                      ? "We'll send you a 4-digit code on the mobile number you provide."
                      : "We'll send you a 6-digit code to your email address."}
                  </p>
                </div>

                <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); sendOtp(); }}>
                  {mode === "mobile" ? (
                    <label className="block">
                      <span className="mb-2 block font-medium text-slate-700 text-sm">Enter your mobile number</span>
                      <div className="flex min-h-12 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition focus-within:border-violet-500 focus-within:ring-4 focus-within:ring-violet-100">
                        <button type="button" className="flex items-center gap-3 border-r border-slate-200 px-4 text-slate-800 text-sm sm:px-5">
                          <span>🇮🇳</span>
                          <span className="font-semibold">91</span>
                          <ChevronDown size={18} />
                        </button>
                        <input
                          value={phone}
                          onChange={(e) => setPhone(e.target.value.replace(/\D/g, "").slice(0, 10))}
                          inputMode="numeric"
                          placeholder="Enter mobile number"
                          className="w-full min-w-0 px-4 text-sm outline-none"
                        />
                      </div>
                    </label>
                  ) : (
                    <label className="block">
                      <span className="mb-2 block font-medium text-slate-700 text-sm">Enter your email address</span>
                      <div className="flex min-h-12 items-center overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition focus-within:border-violet-500 focus-within:ring-4 focus-within:ring-violet-100">
                        <Mail size={20} className="ms-4 text-slate-500" />
                        <input
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          type="email"
                          placeholder="Enter your email"
                          className="w-full min-w-0 px-4 text-sm outline-none"
                        />
                      </div>
                    </label>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="flex min-h-12 w-full items-center justify-center gap-3 rounded-2xl bg-[rgb(var(--primary))] px-6 text-sm font-semibold text-white shadow-lg shadow-violet-200 transition hover:bg-violet-700 disabled:opacity-70"
                  >
                    <Send size={22} />
                    {loading ? "Sending..." : mode === "mobile" ? "Send OTP" : "Send Email OTP"}
                  </button>
                </form>

                <div className="my-7 flex items-center gap-5 text-sm font-medium text-slate-400">
                  <div className="h-px flex-1 bg-slate-200" />OR<div className="h-px flex-1 bg-slate-200" />
                </div>

                {mode === "mobile" ? (
                  <button onClick={() => setMode("email")} className="flex min-h-12 w-full items-center justify-center gap-3 rounded-2xl border border-slate-200 bg-white px-6 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-slate-50">
                    <Mail size={22} />Continue with Email
                  </button>
                ) : (
                  <button onClick={() => setMode("mobile")} className="flex min-h-12 w-full items-center justify-center gap-3 rounded-2xl border border-slate-200 bg-white px-6 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-slate-50">
                    <Smartphone size={22} />Continue with Mobile
                  </button>
                )}

                <p className="mt-7 flex items-center justify-center gap-2 text-center text-sm text-slate-400">
                  <Lock size={18} />Your information is secure and encrypted
                </p>

                {mode === "email" && (
                  <button onClick={() => setMode("mobile")} className="mx-auto mt-10 flex items-center gap-2 text-sm font-medium text-[rgb(var(--secondary))]">
                    <ArrowLeft size={18} />Back to sign in options
                  </button>
                )}
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
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-violet-100 text-violet-600">{icon}</span>
      <span>{text}</span>
    </div>
  );
}
