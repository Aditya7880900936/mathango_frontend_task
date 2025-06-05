"use client";

import { useState } from "react";
import { useSelector } from "react-redux";
import { AnimatePresence } from "framer-motion";
import type { RootState, Chapter } from "../../types";
import ChapterCard from "./ChapterCard";
import ChapterDetailCard from "./ChapterDetailsCard";

export default function ChapterList() {
  const { data: chapters, loading, error } = useSelector(
    (state: RootState) => state.chapters
  );
  const filters = useSelector((state: RootState) => state.filters);
  const [selectedChapter, setSelectedChapter] = useState<Chapter | null>(null);

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-orange-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <p className="text-red-600 dark:text-red-400">
          Error loading chapters: {error}
        </p>
      </div>
    );
  }

  // Updated filtering to handle statusFilter as array of selected statuses
  const filteredChapters = chapters.filter((chapter) => {
    const matchesClass =
      filters.selectedClass === "all" || chapter.class === filters.selectedClass;

    const matchesUnit =
      filters.selectedUnits === "all" ||
      chapter.unit.toLowerCase() === filters.selectedUnits.toLowerCase();

    // If no status filters selected, show all chapters
    if (filters.statusFilter.length === 0) {
      return matchesClass && matchesUnit;
    }

    // Otherwise check if chapter matches any selected status
    const matchesStatus = filters.statusFilter.some((status) => {
      if (status === "Not Started") return chapter.status === "Not Started";
      if (status === "weak") return chapter.isWeakChapter === true;
      return false;
    });

    return matchesClass && matchesUnit && matchesStatus;
  });

  const sortedChapters = [...filteredChapters].sort((a, b) => {
    if (filters.sortBy === "name") {
      return a.chapter.localeCompare(b.chapter);
    } else {
      return b.questionSolved - a.questionSolved;
    }
  });

  return (
    <>
      <div className="space-y-3">
        {sortedChapters.map((chapter, idx) => (
          <ChapterCard
            key={idx}
            chapter={chapter}
            index={idx}
            onClick={() => setSelectedChapter(chapter)}
          />
        ))}
      </div>

      <AnimatePresence>
        {selectedChapter && (
          <ChapterDetailCard
            chapter={selectedChapter}
            onClose={() => setSelectedChapter(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
