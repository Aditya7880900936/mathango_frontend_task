"use client";

import { useSelector, useDispatch } from "react-redux";
import { ChevronRight } from "lucide-react";
import type { RootState, Subject } from "../../types";
import { setSelectedSubject } from "@/store/slices/chapterSlice";
import { AppDispatch } from "@/store/store";

export default function Sidebar() {
  const dispatch = useDispatch<AppDispatch>();
  const selectedSubject = useSelector(
    (state: RootState) => state.chapters.selectedSubject
  );

  const subjects: Subject[] = [
    { name: "Physics PYQs", icon: "🧲", color: "slate" },
    { name: "Chemistry PYQs", icon: "🧪", color: "emerald" },
    { name: "Mathematics PYQs", icon: "📊", color: "indigo" },
  ];

  return (
    <aside className="w-full md:w-80 bg-gray-50 dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700 p-4">
      {/* Header Section */}
      <div className="mb-6">
        <div className="flex items-center space-x-2 mb-2">
            <div className="w-8 h-8 bg-transparent rounded flex items-center justify-center">
              <img
                src="/exam-logo.png"
                alt="Exam Logo"
                className="w-4 h-4 object-contain"
              />
            </div>
          <h1 className="text-xl font-bold text-gray-900 dark:text-white">
            JEE Main
          </h1>
        </div>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          2025 - 2009 | 173 Papers | 15825 Qs
        </p>
      </div>

      {/* Subject Selection */}
      <div className="space-y-2">
        {subjects.map((subject) => {
          const isSelected = selectedSubject === subject.name;
          return (
            <button
              key={subject.name}
              onClick={() => dispatch(setSelectedSubject(subject.name))}
              className={`w-full flex items-center justify-between p-3 rounded-lg border transition-all duration-200 ${
                isSelected
                  ? "bg-slate-900 dark:bg-slate-700 border-slate-800 dark:border-slate-600 shadow-md"
                  : "bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 hover:border-gray-300 dark:hover:border-gray-600"
              }`}
            >
              <div className="flex items-center space-x-3">
                <div
                  className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                    isSelected
                      ? "bg-slate-800 dark:bg-slate-600 text-white"
                      : "bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400"
                  }`}
                >
                  <span className="text-sm">{subject.icon}</span>
                </div>
                <span
                  className={`text-left text-sm md:text-base font-medium ${
                    isSelected
                      ? "text-white dark:text-gray-200"
                      : "text-gray-900 dark:text-white"
                  }`}
                >
                  {subject.name}
                </span>
              </div>
              <ChevronRight
                className={`w-4 h-4 ${
                  isSelected ? "text-white dark:text-gray-300" : "text-gray-400"
                }`}
              />
            </button>
          );
        })}
      </div>
    </aside>
  );
}
