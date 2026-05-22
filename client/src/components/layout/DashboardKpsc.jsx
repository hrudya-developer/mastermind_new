import React from "react";
import {
  Bell,
  BookOpen,
  Bookmark,
  ChartNoAxesColumn,
  ChevronDown,
  ChevronRight,
  ClipboardCheck,
  Download,
  FileText,
  Filter,
  Home,
  MonitorPlay,
  Settings,
  Target,
  Trophy,
  Clock3,
  HelpCircle,
  ArrowRight,
} from "lucide-react";
import { useLocation } from "react-router-dom";
import logo from "../../assets/logo.png";

const navItems = [
  { label: "Dashboard", icon: Home, active: true },
  { label: "Mock Test", icon: ClipboardCheck },
  { label: "Current Affairs", icon: FileText },
  { label: "Syllabus", icon: BookOpen },
  { label: "Video Classes", icon: MonitorPlay },
  { label: "Study Materials", icon: FileText, purple: true },
];

// const bottomNav = [
//   { label: "My Performance", icon: ChartNoAxesColumn },
//   { label: "Bookmarks", icon: Bookmark },
//   { label: "Downloads", icon: Download },
//   { label: "Settings", icon: Settings },
// ];

const levels = [
  { title: "10th Level", text: "SSLC and Equivalent", accent: "from-sky-100 to-blue-50", icon: "text-blue-600" },
  { title: "12th Level", text: "Higher Secondary and Equivalent", accent: "from-purple-100 to-violet-50", icon: "text-violet-600" },
  { title: "Degree Level", text: "Graduation Level Exams", accent: "from-sky-100 to-blue-50", icon: "text-sky-600" },
  { title: "Post Graduate Level", text: "Post Graduation Level Exams", accent: "from-cyan-100 to-sky-50", icon: "text-blue-600" },
];

const tools = [
  {
    title: "Mock Tests",
    text: "Practice with exam-like mock tests and improve your performance.",
    icon: ClipboardCheck,
    button: "Start Practice",
    buttonClass: "from-blue-700 to-blue-500",
    iconClass: "text-blue-600 bg-blue-100",
  },
  {
    title: "Current Affairs",
    text: "Stay updated with the latest current affairs and important events.",
    icon: FileText,
    button: "Explore Now",
    buttonClass: "from-violet-700 to-purple-500",
    iconClass: "text-violet-600 bg-purple-100",
  },
  {
    title: "Study Materials",
    text: "Access comprehensive study materials and notes for all topics.",
    icon: BookOpen,
    button: "View Materials",
    buttonClass: "from-sky-500 to-cyan-500",
    iconClass: "text-sky-600 bg-sky-100",
  },
  {
    title: "Video Classes",
    text: "Learn with expert faculty through interactive video lessons.",
    icon: MonitorPlay,
    button: "Watch Now",
    buttonClass: "from-blue-700 to-blue-500",
    iconClass: "text-blue-600 bg-blue-100",
  },
];

const stats = [
  { title: "Tests Attempted", value: "12", note: "+2 this week", icon: ClipboardCheck, color: "text-blue-600", bg: "bg-blue-100" },
  { title: "Average Score", value: "85%", note: "+5% improvement", icon: Target, color: "text-violet-600", bg: "bg-purple-100" },
  { title: "Total Study Time", value: "24h 30m", note: "+3h this week", icon: Clock3, color: "text-blue-600", bg: "bg-blue-100" },
  { title: "Badges Earned", value: "7", note: "Keep it up!", icon: Trophy, color: "text-violet-600", bg: "bg-purple-100" },
];

function SidebarItem({ item }) {
  const Icon = item.icon;
  return (
    <button
      className={`flex w-full items-center gap-4 rounded-xl px-5 py-4 text-left text-sm font-semibold transition ${
        item.active
          ? "bg-gradient-to-r from-sky-500 to-blue-700 text-white shadow-lg shadow-blue-950/20"
          : "text-blue-50 hover:bg-white/10"
      }`}
    >
      <Icon className={`h-5 w-5 ${item.purple && !item.active ? "text-purple-300" : ""}`} />
      {item.label}
    </button>
  );
}

function Logo() {
  return (
    <div className="flex flex-col items-center gap-2 py-7 text-white">
      <div className="relative h-auto w-auto bg-white rounded-lg shadow-lg grid place-content-center p-3">
        <img src={logo} />
      </div>
      <div className="text-center leading-tight">
        <h1 className="text-xl font-medium tracking-wide">MASTER MIND</h1>
        <p className="text-xs font-semibold tracking-wider text-blue-100">PSC MOBILE APP</p>
      </div>
    </div>
  );
}

function LevelCard({ level }) {
  return (
    <button className={`group flex min-h-28 items-center justify-between rounded-xl border border-blue-100 bg-gradient-to-br ${level.accent} p-5 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-xl`}>
      <div className="flex items-center gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/60">
          <BookOpen className={`h-7 w-7 ${level.icon}`} />
        </div>
        <div>
          <h3 className="font-bold text-slate-950">{level.title}</h3>
          <p className="mt-2 max-w-40 text-sm leading-5 text-slate-700">{level.text}</p>
        </div>
      </div>
      <ChevronRight className="h-6 w-6 text-blue-950 transition group-hover:translate-x-1" />
    </button>
  );
}

function ToolCard({ tool }) {
  const Icon = tool.icon;
  return (
    <article className="relative overflow-hidden rounded-xl border border-blue-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
      <div className="absolute -bottom-8 -right-8 h-28 w-28 rounded-full bg-sky-100/60" />
      <div className="relative flex gap-4">
        <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-full ${tool.iconClass}`}>
          <Icon className="h-7 w-7" />
        </div>
        <div>
          <h3 className="font-bold text-blue-950">{tool.title}</h3>
          <p className="mt-2 min-h-16 text-sm leading-6 text-slate-700">{tool.text}</p>
        </div>
      </div>
      <button className={`relative mt-4 flex w-40 items-center justify-center gap-3 rounded-lg bg-gradient-to-r ${tool.buttonClass} px-4 py-3 text-sm font-bold text-white shadow-lg shadow-blue-900/10`}>
        {tool.button}
        <ArrowRight className="h-5 w-5" />
      </button>
    </article>
  );
}

function StatCard({ stat }) {
  const Icon = stat.icon;
  return (
    <div className="rounded-xl border border-blue-100 bg-white p-5 shadow-sm">
      <div className="flex items-center gap-4">
        <div className={`flex h-14 w-14 items-center justify-center rounded-full ${stat.bg} ${stat.color}`}>
          <Icon className="h-7 w-7" />
        </div>
        <div>
          <p className="text-xs font-medium text-slate-600">{stat.title}</p>
          <h3 className="mt-1 text-2xl font-extrabold text-blue-950">{stat.value}</h3>
          <p className="mt-2 text-xs font-semibold text-cyan-600">{stat.note}</p>
        </div>
      </div>
      <div className="mt-3 flex h-8 items-end gap-1 opacity-70">
        {[20, 35, 28, 45, 40, 60, 52, 75].map((h, i) => (
          <span key={i} className="w-full rounded-full bg-gradient-to-t from-blue-600 to-sky-300" style={{ height: `${h}%` }} />
        ))}
      </div>
    </div>
  );
}

export default function DashboardKpsc() {
  const { state } = useLocation();

  const userInfo =
    state || JSON.parse(localStorage.getItem("userInfo"));
  return (
    <div className="min-h-screen bg-[#f8fbff] font-sans text-blue-950">
      <aside className="fixed left-0 top-0 flex h-screen w-72 flex-col bg-gradient-to-b from-[#061b4d] via-[#082c76] to-[#003a99] px-4 shadow-2xl">
        <Logo />

        <nav className="space-y-2">
          {navItems.map((item) => (
            <SidebarItem key={item.label} item={item} />
          ))}
        </nav>

        <div className="my-6 h-px bg-white/20" />

        {/* <nav className="space-y-2">
          {bottomNav.map((item) => (
            <SidebarItem key={item.label} item={item} />
          ))}
        </nav> */}

        <div className="mt-auto rounded-2xl border border-white/15 bg-white/10 p-5 text-white shadow-lg backdrop-blur-sm mb-5">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/50">
              <HelpCircle className="h-7 w-7" />
            </div>
            <div>
              <h3 className="font-bold">Need Help?</h3>
              <p className="text-xs text-blue-100">We are here to help you</p>
            </div>
          </div>
          <button className="mt-5 flex w-full items-center justify-center gap-3 rounded-xl border border-white/25 px-4 py-3 text-sm font-semibold hover:bg-white/10">
            Contact Support
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </aside>

      <main className="ml-72 min-h-screen">
        <header className="flex h-20 items-center justify-end gap-6 border-b border-blue-100 bg-white px-8">
          <div className="flex gap-2">
     
      <p>Email: {userInfo?.email}</p>
      <p>Mobile: {userInfo?.mobile}</p>
    
    </div>
          <div className="relative">
            <Bell className="h-7 w-7 text-blue-950" />
            <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white">3</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="h-12 w-12 rounded-full border border-blue-100 bg-gradient-to-br from-slate-100 to-slate-300" />
            <span className="font-bold">John Doe</span>
            <ChevronDown className="h-5 w-5" />
          </div>
        </header>

        <section className="p-8">
          <div className="rounded-3xl border border-blue-100 bg-white p-5 shadow-xl shadow-blue-950/5">
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-white via-sky-50 to-purple-100 p-8 md:p-10">
              
              

              <div className="relative z-10 max-w-2xl">
                <p className="text-lg text-slate-600">Welcome back, {userInfo.name} 👋</p>
                <h2 className="mt-6 text-3xl font-black leading-tight tracking-tight text-[#071c59]">
                  Ace Your <span className="text-sky-500"> Kerala PSC</span>
                   Exams with Confidence
                </h2>
                <p className="mt-5 max-w-xl text-md leading-8 text-slate-700">
                  Your one-stop destination for all study resources, mock tests, and exam preparation.
                </p>
              </div>

           
            </div>

            <div className="mt-7 flex items-center justify-between">
              <h2 className="flex items-center gap-3 text-xl font-extrabold">
                <ChartNoAxesColumn className="h-6 w-6 text-blue-600" />
                Choose Your Level
              </h2>
              <button className="flex items-center gap-2 rounded-lg border border-blue-300 px-4 py-2 font-semibold text-blue-600 hover:bg-blue-50">
                <Filter className="h-5 w-5" />
                Filter
              </button>
            </div>

            <div className="mt-4 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {levels.map((level) => (
                <LevelCard key={level.title} level={level} />
              ))}
            </div>

            <h2 className="mt-8 text-xl font-extrabold">Quick Access</h2>
            <div className="mt-4 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {tools.map((tool) => (
                <ToolCard key={tool.title} tool={tool} />
              ))}
            </div>

            <div className="mt-8 flex items-center justify-between">
              <h2 className="text-xl font-extrabold">Your Progress</h2>
              <button className="flex items-center gap-2 text-sm font-semibold text-blue-600">
                View Detailed Performance
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
            <div className="mt-4 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {stats.map((stat) => (
                <StatCard key={stat.title} stat={stat} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
