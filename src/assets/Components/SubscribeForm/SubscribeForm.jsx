import React from "react";

export default function SubscribeForm() {
  return (
    <div className="flex flex-col w-[280px]  gap-3 bg-black mb-6 rounded-md">
      <input
        type="email"
        placeholder="Enter Email..."
        className="w-full px-4 py-3 rounded-full border border-gray-500 bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
      />
      <button
        className="w-full px-8 py-3 rounded-full bg-orange-600 text-white font-medium hover:bg-orange-700 transition"
      >
        Subscribe Now
      </button>
    </div>
  );
}
