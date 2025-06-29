import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, LineElement, PointElement, LinearScale, CategoryScale } from "chart.js";

ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale);

const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "Revenue",
      data: [12000, 15000, 11000, 17000, 19000, 22000],
      borderColor: "#6366f1", // Indigo-500
      backgroundColor: "rgba(139, 92, 246, 0.3)", // Purple-500/30
      fill: true,
      tension: 0.4,
    },
  ],
};

const chartOptions = {
  plugins: {
    legend: {
      labels: {
        color: "#E5E7EB", // text-gray-200
      },
    },
  },
  scales: {
    y: {
      grid: {
        color: "rgba(75, 85, 99, 0.2)", // gray-600/20
      },
      ticks: {
        color: "#9CA3AF", // text-gray-400
      },
    },
    x: {
      grid: {
        color: "rgba(75, 85, 99, 0.2)", // gray-600/20
      },
      ticks: {
        color: "#9CA3AF", // text-gray-400
      },
    },
  },
  responsive: true,
  maintainAspectRatio: false,
};

export default function AnalyticsProDashboard() {
  return (
    <div className="min-h-screen bg-[#0F172A] text-gray-300 font-sans relative overflow-x-hidden">
      {/* Floating Glow Elements */}
      <div className="fixed top-[-150px] left-[-150px] w-[500px] h-[500px] bg-gradient-to-r from-purple-500/20 via-indigo-500/20 to-blue-500/20 rounded-full blur-[100px] animate-pulse" />
      <div className="fixed bottom-[-100px] right-[-100px] w-[400px] h-[400px] bg-gradient-to-r from-indigo-500/20 to-pink-500/20 rounded-full blur-[80px] animate-pulse delay-1000" />
      <div className="fixed top-[30%] right-[20%] w-[300px] h-[300px] bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-[60px] animate-pulse delay-700" />

      {/* Sidebar */}
      <aside className="hidden lg:flex flex-col w-64 h-screen fixed bg-[#0A0A23]/90 backdrop-blur-xl text-white p-6 z-20 border-r border-indigo-500/20">
        <div className="flex items-center space-x-3 mb-10">
          <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg animate-pulse" />
          <h2 className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            Analytics Pro
          </h2>
        </div>
        
        <nav className="space-y-6 text-lg">
          {["Dashboard", "Upload", "Insights", "Settings"].map((item) => (
            <a
              key={item}
              href="#"
              className="flex items-center space-x-3 px-4 py-2 rounded-lg hover:bg-indigo-500/10 hover:text-indigo-400 transition-all group"
            >
              <span className="w-2 h-2 rounded-full bg-indigo-500 group-hover:scale-150 transition-transform" />
              <span>{item}</span>
            </a>
          ))}
        </nav>

        <div className="mt-auto">
          <div className="p-4 rounded-xl bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/20">
            <p className="text-sm text-gray-400">Pro Plan Active</p>
            <div className="mt-2 h-2 bg-gray-700 rounded-full overflow-hidden">
              <div className="w-3/4 h-full bg-gradient-to-r from-indigo-500 to-purple-500 animate-pulse" />
            </div>
          </div>
        </div>
      </aside>

      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 bg-[#0A0A23]/90 backdrop-blur-xl z-20 border-b border-indigo-500/20">
        <div className="flex items-center justify-between p-4">
          <h2 className="text-xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            Analytics Pro
          </h2>
          <button className="text-gray-400 hover:text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <main className="lg:ml-64 px-4 md:px-8 py-8 lg:py-10 space-y-8 relative z-10">
        {/* Header */}
        <div className="mt-16 lg:mt-0">
          <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Welcome to <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Analytics Pro</span>
          </h1>
          <p className="text-gray-400 max-w-2xl">Transform your data into actionable insights with our AI-powered analytics platform.</p>
        </div>

        {/* Upload Box */}
        <div className="group relative bg-[#1E2533]/50 backdrop-blur-sm rounded-xl p-8 border-2 border-dashed border-indigo-500/50 text-center hover:bg-indigo-900/10 transition-all cursor-pointer">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 to-purple-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="relative z-10 flex flex-col items-center">
            <div className="w-16 h-16 mb-4 rounded-full bg-indigo-500/20 flex items-center justify-center">
              <svg className="w-8 h-8 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
              </svg>
            </div>
            <p className="text-gray-300 mb-2">Drop your CSV/Excel files here or click to upload</p>
            <p className="text-sm text-gray-500">Supports CSV, XLS, XLSX up to 50MB</p>
          </div>
        </div>

        {/* Chart Section */}
        <div className="bg-[#1E2533]/50 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-indigo-500/10">
          <div className="flex flex-wrap items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-white">Revenue Overview</h2>
            <div className="flex space-x-2">
              {["1D", "1W", "1M", "1Y"].map((period) => (
                <button
                  key={period}
                  className="px-3 py-1 rounded-lg text-sm bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-400 transition-colors"
                >
                  {period}
                </button>
              ))}
            </div>
          </div>
          <div className="h-[300px]">
            <Line data={data} options={chartOptions} />
          </div>
        </div>

        {/* AI Insight Box */}
        <div className="bg-[#1A202E]/50 backdrop-blur-sm rounded-xl p-6 border border-indigo-500/10">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-white mb-2">AI Insight</h3>
              <p className="text-indigo-300 leading-relaxed">
                Revenue increased 18% in May, primarily driven by weekend traffic and returning users. 
                Key growth factors include improved user retention (↑12%) and higher average order value (↑15%).
              </p>
            </div>
            <button className="flex items-center space-x-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 px-4 py-2 rounded-lg text-white transition-all shadow-lg hover:shadow-indigo-500/25">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              <span>Regenerate</span>
            </button>
          </div>
        </div>

        {/* Multiple Dashboards */}
        <div className="space-y-4">
          <div className="flex items-center space-x-4 overflow-x-auto pb-4 scrollbar-thin">
            <button className="px-4 py-2 bg-indigo-500/20 text-indigo-400 rounded-lg font-medium whitespace-nowrap">
              Main Dashboard
            </button>
            {["Marketing KPIs", "Finance Report", "User Analytics"].map((dash) => (
              <button
                key={dash}
                className="px-4 py-2 text-gray-400 hover:text-white hover:bg-indigo-500/10 rounded-lg transition-colors whitespace-nowrap"
              >
                {dash}
              </button>
            ))}
            <button className="ml-auto flex items-center space-x-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 px-4 py-2 rounded-lg text-white transition-all whitespace-nowrap shadow-lg hover:shadow-indigo-500/25">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              <span>New Dashboard</span>
            </button>
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center py-8 border-t border-indigo-500/20 mt-12">
          <div className="flex flex-col items-center space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg animate-pulse" />
              <span className="text-lg font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                Analytics Pro
              </span>
            </div>
            <p className="text-gray-500 text-sm">
              © 2025 Imperiality. Designed with 
              <span className="mx-1 text-red-500">♥</span> 
              by Yeshwanth
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}