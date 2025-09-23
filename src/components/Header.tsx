"use client";
import { ArrowLeft, Bell, User } from "lucide-react";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm border-b border-gray-200">
      <div className="flex items-center justify-between px-4 py-3 h-16">
        {/* Left side - PRO badge */}
        <div className="flex items-center">
          <div className="bg-blue-500 text-white px-3 py-1 rounded-md text-sm font-semibold">
            <span className="text-white">□</span>
            <span className="ml-1">PRO</span>
          </div>
        </div>
        {/* Seperater */}
        <hr className="bg-gray-200 w-0.5 h-5 mx-4" />
        {/* Center - Back arrow */}
        <div className="flex-1 flex justify-left">
          <button
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            onClick={() => {}}
          >
            <ArrowLeft className="w-6 h-6 text-blue-500" />
          </button>
        </div>

        {/* Right side - Notification and Profile icons */}
        <div className="flex items-center space-x-3">
          <button
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            onClick={() => {}}
          >
            <Bell className="w-6 h-6 text-blue-500" />
          </button>

          {/* Seperater */}
          <hr className="bg-gray-200 w-0.5 h-5 mx-4" />

          <button
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            onClick={() => {}}
          >
            <User className="w-6 h-6 text-blue-500" />
          </button>
        </div>
      </div>
    </header>
  );
}
