"use client";

import { motion } from "framer-motion";
import { X } from "lucide-react";
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

function getIconForChapter(chapterName: string) {
  // Hash chapter name to get a stable index
  let hash = 0;
  for (let i = 0; i < chapterName.length; i++) {
    hash = chapterName.charCodeAt(i) + ((hash << 5) - hash);
  }
  const index = Math.abs(hash) % icons.length;
  return icons[index];
}

export default function ChapterDetailCard({
  chapter,
  onClose,
}: {
  chapter: Chapter;
  onClose: () => void;
}) {
  const totalQuestions = Object.values(chapter.yearWiseQuestionCount).reduce(
    (a, b) => a + b,
    0
  );
  const progress =
    totalQuestions === 0 ? 0 : Math.round((chapter.questionSolved / totalQuestions) * 100);

  const IconComponent = getIconForChapter(chapter.chapter);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 50, scale: 0.95 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      className="fixed inset-0 z-50 flex items-center justify-center px-4 sm:px-6 py-8 bg-black/40 backdrop-blur-md"
    >
      <section className="relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-red-500 focus:outline-none focus:ring-2 focus:ring-red-500 rounded-full"
          aria-label="Close"
        >
          <X size={24} />
        </button>

        {/* Header with Icon */}
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 flex items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 shrink-0">
            <IconComponent size={40} weight="duotone" />
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white">
              {chapter.chapter}
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Subject:{" "}
              <span className="font-medium text-gray-800 dark:text-gray-200">
                {chapter.subject}
              </span>
            </p>
          </div>
        </div>

        {/* Progress */}
        <div className="mb-6">
          <div className="flex justify-between text-sm mb-1">
            <span className="text-gray-600 dark:text-gray-300">
              Progress: {chapter.questionSolved} / {totalQuestions}
            </span>
            <span className="text-gray-600 dark:text-gray-300">{progress}%</span>
          </div>
          <div className="w-full bg-gray-200 dark:bg-gray-800 rounded-full h-3">
            <div
              className="bg-green-500 h-3 rounded-full transition-all"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Info */}
        <div className="space-y-4 text-sm sm:text-base text-gray-700 dark:text-gray-300">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <p>
              <strong>Class:</strong> {chapter.class}
            </p>
            <p>
              <strong>Unit:</strong> {chapter.unit}
            </p>
            <p>
              <strong>Status:</strong> {chapter.status}
            </p>
            <p>
              <strong>Weak Chapter:</strong> {chapter.isWeakChapter ? "Yes" : "No"}
            </p>
          </div>

          <div>
            <strong>Year-wise Breakdown:</strong>
            <ul className="list-disc list-inside pl-4 mt-1 space-y-1">
              {Object.entries(chapter.yearWiseQuestionCount).map(([year, count]) => (
                <li key={year}>
                  <span className="font-medium">{year}:</span> {count} question
                  {count !== 1 ? "s" : ""}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <button className="w-full sm:w-auto px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition">
            Practice Now
          </button>
          <button className="w-full sm:w-auto px-5 py-2 border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl font-medium transition">
            Mark as Complete
          </button>
        </div>
      </section>
    </motion.div>
  );
}
