import React, { useState } from "react";
import axios from "axios";
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";

import {
  User,
  LayoutDashboard,
  FileText,
  MessageSquare,
  Settings,
  LogOut,
  Phone,
  Mail,
  MapPin,
  ChevronDown,
  Bell,
  HelpCircle,
  Check,
} from "lucide-react";

import { avatars } from "./avatars";

import { useDispatch } from "react-redux";
import { setUser } from "../../redux/authSlice";

const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL ||
  "http://psc.technocitysolutions.com/public/api";



export default function SetUserProfile() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const loginIdentifier =
    sessionStorage.getItem("login_identifier") || "";

  const loginType =
    sessionStorage.getItem("login_type") || "mobile";

  const uid =
    sessionStorage.getItem("uid") ||
    sessionStorage.getItem("user_id") ||
    "";

  const initialMobile =
    loginType === "mobile"
      ? loginIdentifier.replace(/^91/, "")
      : "";

  const initialEmail =
    loginType === "email" ? loginIdentifier : "";

  const [selectedAvatar, setSelectedAvatar] = useState(0);

  const [name, setName] = useState("");
  const [mobile, setMobile] = useState(initialMobile);
  const [email, setEmail] = useState(initialEmail);
  const [dob, setDob] = useState("");
  const [place, setPlace] = useState("");
  const [promocode, setPromocode] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!name.trim()) {
      alert("Please enter your name");
      return;
    }

    if (!mobile && !email) {
      alert("Mobile or Email is required");
      return;
    }

    if (!place) {
      alert("Please select your district");
      return;
    }

    if (!uid) {
      alert(
        "User ID missing. Please verify OTP again before setting profile."
      );

      navigate("/sendOtpLogin");
      return;
    }

    try {
      setLoading(true);

      const formData = new FormData();

      formData.append("api", "psc@Miak2022");
      formData.append("name", name);
      formData.append("email", email);
      formData.append("mobile", mobile);
      formData.append("dob", dob);
      formData.append("place", place);
      formData.append("promocode", promocode);
      formData.append("code", "91");
      formData.append("uid", uid);

      // send avatar index to backend
      formData.append("avatar", selectedAvatar + 1);

      const response = await axios.post(
        `${API_BASE_URL}/setUserProfile`,
        formData,
        {
          headers: {
            Accept: "application/json",
          },
        }
      );

      console.log("PROFILE RESPONSE:", response.data);

if (response.data.status === true) {

  const userData = {
    api: "psc@Miak2022",
    name,
    email,
    mobile,
    dob,
    place,
    promocode,
    code: "91",
    uid,

    // save avatar image directly
    avatar: avatars[selectedAvatar],
  };

  // SAVE IN REDUX
  dispatch(setUser(userData));

  // SAVE IN SESSION STORAGE
  sessionStorage.setItem(
    "user",
    JSON.stringify(userData)
  );

  alert("Profile Updated Successfully");

  navigate("/kspc_dashboard");
} else {
        alert(
          response.data.message ||
            response.data.msg ||
            "Failed to update profile"
        );
      }
    } catch (error) {
      console.log("PROFILE ERROR:", error);

      alert(
        error.response?.data?.message ||
          error.response?.data?.msg ||
          "Something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    sessionStorage.clear();
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-[#f6f8fb] flex flex-col">
      {/* HEADER */}
      <header className="h-20 bg-white border-b border-gray-200 flex items-center justify-between px-4 md:px-8">
        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt="logo"
            className="h-12 object-contain"
          />
        </div>

        <div className="flex items-center gap-6">
          <button className="hidden md:flex items-center gap-2 text-gray-600 hover:text-black transition">
            <HelpCircle size={20} />
            Help
          </button>

          <Bell
            className="text-gray-600 cursor-pointer"
            size={22}
          />

          <div className="flex items-center gap-3 cursor-pointer">
 <img
  src={avatars[selectedAvatar]}
  alt="Profile"
  className="h-12 w-12 rounded-full border border-blue-100 object-cover"
/>

            <div className="hidden md:block">
              <h3 className="font-semibold text-gray-800">
                {name || "Your Profile"}
              </h3>
            </div>
          </div>
        </div>
      </header>

      <div className="flex flex-1">
        {/* SIDEBAR */}
        <aside className="hidden lg:flex flex-col justify-between w-72 bg-white border-r border-gray-200 p-6">
          <div className="space-y-3">
            <SidebarItem
              icon={<User size={20} />}
              active
              text="Profile"
            />

            <SidebarItem
              icon={<LayoutDashboard size={20} />}
              text="Dashboard"
            />

            <SidebarItem
              icon={<FileText size={20} />}
              text="Applications"
            />

            <SidebarItem
              icon={<MessageSquare size={20} />}
              text="Messages"
            />

            <SidebarItem
              icon={<Settings size={20} />}
              text="Settings"
            />
          </div>

          <div onClick={handleLogout}>
            <SidebarItem
              icon={<LogOut size={20} />}
              text="Logout"
            />
          </div>
        </aside>

        {/* MAIN */}
        <main className="flex-1 p-4 md:p-8">
          <div className="max-w-[1500px] mx-auto grid grid-cols-1 xl:grid-cols-[1fr_350px] gap-8">
            {/* FORM */}
            <div className="bg-white rounded-3xl shadow-sm border border-gray-200 p-5 md:p-10">
              <div className="mb-10">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  Set your profile
                </h2>

                <p className="text-gray-500 mt-3 text-base md:text-lg">
                  Complete your profile to get the best experience.
                </p>
              </div>

              {/* AVATAR SECTION */}
              <div className="mb-10">
                <h3 className="font-semibold text-gray-900 mb-5 text-lg">
                  Choose profile avatar
                </h3>

                <div className="flex flex-wrap gap-5">
                  {avatars.map((avatar, index) => (
                    <div
                      key={index}
                      onClick={() => setSelectedAvatar(index)}
                      className={`relative cursor-pointer transition-all duration-300 ${
                        selectedAvatar === index
                          ? "scale-105"
                          : "hover:scale-105"
                      }`}
                    >
                      <img
                        src={avatar}
                        alt="avatar"
                        className={`w-20 h-20 rounded-full object-cover border-4 ${
                          selectedAvatar === index
                            ? "border-blue-600"
                            : "border-transparent"
                        }`}
                      />

                      {selectedAvatar === index && (
                        <div className="absolute -top-1 -right-1 w-7 h-7 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-lg">
                          <Check size={16} />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* FORM INPUTS */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <InputField
                  label="Name"
                  value={name}
                  onChange={setName}
                  placeholder="Enter your full name"
                />

                <InputField
                  label="Phone Number"
                  value={mobile}
                  onChange={setMobile}
                  placeholder="Enter mobile number"
                />

                <InputField
                  label="Email"
                  value={email}
                  onChange={setEmail}
                  placeholder="Enter email"
                  type="email"
                />

                <InputField
                  label="Date of Birth"
                  value={dob}
                  onChange={setDob}
                  type="date"
                />

                {/* PLACE */}
                <div>
                  <label className="block mb-2 font-medium text-gray-700">
                    Place
                  </label>

                  <div className="relative">
                    <select
                      value={place}
                      onChange={(e) =>
                        setPlace(e.target.value)
                      }
                      className="w-full h-14 px-5 rounded-xl border border-gray-300 outline-none appearance-none focus:border-blue-500 bg-white"
                    >
                      <option value="">
                        Select District
                      </option>

                      <option value="Kozhikode">
                        Kozhikode
                      </option>

                      <option value="Kannur">
                        Kannur
                      </option>

                      <option value="Malappuram">
                        Malappuram
                      </option>

                      <option value="Wayanad">
                        Wayanad
                      </option>

                      <option value="Kasaragod">
                        Kasaragod
                      </option>
                    </select>

                    <ChevronDown
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
                      size={20}
                    />
                  </div>
                </div>

                <InputField
                  label="Referral Code"
                  value={promocode}
                  onChange={setPromocode}
                  placeholder="Enter referral code"
                />
              </div>

              {/* BUTTON */}
              <button
                onClick={handleSubmit}
                disabled={loading}
                className="w-full mt-8 h-14 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold text-lg hover:scale-[1.01] transition-all duration-300 shadow-lg shadow-blue-200 disabled:opacity-70"
              >
                {loading
                  ? "PLEASE WAIT..."
                  : "CONTINUE"}
              </button>
            </div>

            {/* PREVIEW */}
            <div className="bg-white rounded-3xl shadow-sm border border-gray-200 p-8 h-fit">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">
                Your profile preview
              </h3>

              <div className="flex flex-col items-center text-center">
                <img
                  src={avatars[selectedAvatar]}
                  alt="preview"
                  className="w-28 h-28 rounded-full object-cover"
                />

                <h2 className="mt-5 text-2xl font-bold text-gray-900">
                  {name || "Your Name"}
                </h2>

                <p className="text-gray-500 mt-2">
                  Complete your details to get started
                </p>
              </div>

              <div className="mt-10 space-y-6">
                <InfoItem
                  icon={<Phone size={20} />}
                  label="Phone number"
                  value={mobile || "Not provided"}
                />

                <InfoItem
                  icon={<Mail size={20} />}
                  label="Email"
                  value={email || "Not provided"}
                />

                <InfoItem
                  icon={<MapPin size={20} />}
                  label="Place"
                  value={place || "Not selected"}
                />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

/* INPUT FIELD */
const InputField = ({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
}) => {
  return (
    <div>
      <label className="block mb-2 font-medium text-gray-700">
        {label}
      </label>

      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full h-14 px-5 rounded-xl border border-gray-300 outline-none focus:border-blue-500"
      />
    </div>
  );
};

/* SIDEBAR ITEM */
const SidebarItem = ({ icon, text, active }) => {
  return (
    <button
      className={`w-full flex items-center gap-4 px-5 py-4 rounded-2xl transition-all duration-300 ${
        active
          ? "bg-blue-50 text-blue-600 font-semibold"
          : "hover:bg-gray-100 text-gray-700"
      }`}
    >
      {icon}
      {text}
    </button>
  );
};

/* INFO ITEM */
const InfoItem = ({ icon, label, value }) => {
  return (
    <div className="flex items-center justify-between border-b border-gray-100 pb-4">
      <div className="flex items-center gap-3 text-gray-700">
        {icon}
        <span>{label}</span>
      </div>

      <span className="text-gray-500 text-sm">
        {value}
      </span>
    </div>
  );
};