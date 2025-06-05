"use client";
import type { Chapter } from "../../types";
import {
  Airplay,
  Book,
  Lightning,
  Code,
  Cpu,
  ChartBar,
  PuzzlePiece,
  Brain,
  FileText,
  Globe,
  FloppyDisk,
  Gear,
} from "@phosphor-icons/react";

interface ChapterCardProps {
  chapter: Chapter;
  index: number;
  onClick: () => void; 
}

interface YearChange {
  type: "increase" | "decrease" | "same";
  value: number;
}

const icons = [
  Airplay,
  Book,
  Lightning,
  Code,
  Cpu,
  ChartBar,
  PuzzlePiece,
  Brain,
  FileText,
  Globe,
  FloppyDisk,
  Gear,
];

export default function ChapterCard({ chapter, index, onClick }: ChapterCardProps) {
  const IconComponent = icons[index % icons.length];

  const getYearChange = (year: string): YearChange => {
    const current = chapter.yearWiseQuestionCount[year] || 0;
    const prevYear = (parseInt(year) - 1).toString();
    const previous = chapter.yearWiseQuestionCount[prevYear] || 0;

    if (current > previous) return { type: "increase", value: current - previous };
    if (current < previous) return { type: "decrease", value: previous - current };
    return { type: "same", value: 0 };
  };

  const totalQuestions = Object.values(chapter.yearWiseQuestionCount).reduce(
    (sum, count) => sum + count,
    0
  );
  const solvedQuestions = chapter.questionSolved || 0;
  const change2025 = getYearChange("2025");

  return (
    <div    onClick={onClick} className="card p-4 hover:border-orange-200 dark:hover:border-orange-800 transition-all cursor-pointer border border-gray-600/35 rounded-xl w-full">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-0">
        {/* Left: Icon + Title */}
        <div className="flex items-start sm:items-center space-x-3">
          <div className="w-10 h-10 bg-transparent rounded-lg flex items-center justify-center">
            <IconComponent size={28} />
          </div>
          <h3 className="font-semibold text-gray-900 dark:text-white text-lg">
            {chapter.chapter}
          </h3>
        </div>

        {/* Right: Stats */}
        <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-gray-600 dark:text-gray-400 sm:justify-end sm:text-right">
          <div className="flex items-center gap-1">
            <span>2025: {chapter.yearWiseQuestionCount["2025"] || 0}Qs</span>
            {change2025.type === "increase" && (
              <span className="text-green-600 dark:text-green-400 font-medium">↑</span>
            )}
            {change2025.type === "decrease" && (
              <span className="text-red-600 dark:text-red-400 font-medium">↓</span>
            )}
          </div>

          <span className="text-gray-300 dark:text-gray-600 hidden sm:inline">|</span>

          <span>2024: {chapter.yearWiseQuestionCount["2024"] || 0}Qs</span>

          <span className="text-gray-300 dark:text-gray-600 hidden sm:inline">|</span>

          <span className="text-[#505d79] dark:text-white font-medium">
            {solvedQuestions}/{totalQuestions} Qs
          </span>
        </div>
      </div>
    </div>
  );
}
