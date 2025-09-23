"use client";
import { ArrowLeft, Bell, User } from "lucide-react";

export default function Header() {
  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm border-b border-gray-200"
      role="banner"
    >
      <div className="flex items-center justify-between px-4 py-3 h-16">
        {/* Left side - PRO badge */}
        <div className="flex items-center">
          <div
            className="bg-blue-500 text-white px-3 py-1 rounded-md text-sm font-semibold"
            role="status"
            aria-label="PRO subscription badge"
          >
            <span className="text-white" aria-hidden="true">
              □
            </span>
            <span className="ml-1">PRO</span>
          </div>
        </div>

        {/* Separator */}
        <hr
          className="bg-gray-200 w-0.5 h-5 mx-4"
          role="separator"
          aria-hidden="true"
        />

        {/* Center - Back arrow */}
        <div className="flex-1 flex justify-left">
          <button
            className="p-2 hover:bg-gray-100 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            onClick={() => {}}
            aria-label="Go back"
          >
            <ArrowLeft
              className="w-6 h-6 text-blue-500"
              aria-hidden="true"
              focusable="false"
            />
          </button>
        </div>

        {/* Right side - Notification and Profile icons */}
        <div className="flex items-center space-x-3">
          <button
            className="p-2 hover:bg-gray-100 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            onClick={() => {}}
            aria-label="View notifications"
          >
            <Bell
              className="w-6 h-6 text-blue-500"
              aria-hidden="true"
              focusable="false"
            />
          </button>

          {/* Separator */}
          <hr
            className="bg-gray-200 w-0.5 h-5 mx-4"
            role="separator"
            aria-hidden="true"
          />

          <button
            className="p-2 hover:bg-gray-100 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            onClick={() => {}}
            aria-label="Open user profile"
          >
            <User
              className="w-6 h-6 text-blue-500"
              aria-hidden="true"
              focusable="false"
            />
          </button>
        </div>
      </div>
    </header>
  );
}
