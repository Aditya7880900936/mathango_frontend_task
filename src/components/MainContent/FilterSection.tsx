"use client";
import { useSelector, useDispatch } from "react-redux";
import { ChevronDown, ArrowUpDown, X } from "lucide-react";
import type { RootState, FilterOption } from "../../types";
import {
  setClassFilter,
  setSortBy,
  setStatusFilter,
  setUnitsFilter,
} from "@/store/slices/filterSlice";
import { AppDispatch } from "@/store/store";

export default function FilterSection() {
  const dispatch = useDispatch<AppDispatch>();
  const filters = useSelector((state: RootState) => state.filters);
  const chapters = useSelector((state: RootState) => state.chapters.data);

  const uniqueUnits = Array.from(
    new Set(chapters.map((ch) => ch.unit.toLowerCase()))
  );

  const unitOptions: FilterOption[] = [
    { value: "all", label: "All Units" },
    ...uniqueUnits.map((unit) => ({
      value: unit,
      label: unit.charAt(0).toUpperCase() + unit.slice(1),
    })),
  ];

  // Filtered chapters count logic
  const filteredChapters = chapters.filter((chapter) => {
    const matchesClass =
      filters.selectedClass === "all" || chapter.class === filters.selectedClass;

    const matchesUnit =
      filters.selectedUnits === "all" ||
      chapter.unit.toLowerCase() === filters.selectedUnits.toLowerCase();

    const matchesStatus =
      filters.statusFilter.length === 0 ||
      filters.statusFilter.includes("all") ||
      (filters.statusFilter.includes("Not Started") &&
        chapter.status === "Not Started") ||
      (filters.statusFilter.includes("weak") && chapter.isWeakChapter);

    return matchesClass && matchesUnit && matchesStatus;
  });

  const clearFilters = () => {
    dispatch(setClassFilter("all"));
    dispatch(setUnitsFilter("all"));
    dispatch(setStatusFilter("all"));
  };

  return (
    <div className="mb-6 space-y-3">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="flex flex-wrap gap-3">
          <FilterDropdown
            label="Class"
            value={filters.selectedClass}
            onChange={(value) => dispatch(setClassFilter(value))}
            options={[
              { value: "all", label: "All Classes" },
              { value: "Class 11", label: "Class 11" },
              { value: "Class 12", label: "Class 12" },
            ]}
          />

          <FilterDropdown
            label="Units"
            value={filters.selectedUnits}
            onChange={(value) => dispatch(setUnitsFilter(value))}
            options={unitOptions}
          />

          <FilterButton
            active={filters.statusFilter.includes("Not Started")}
            onClick={() => dispatch(setStatusFilter("Not Started"))}
          >
            Not Started
          </FilterButton>

          <FilterButton
            active={filters.statusFilter.includes("weak")}
            onClick={() => dispatch(setStatusFilter("weak"))}
          >
            Weak Chapters
          </FilterButton>

          {(filters.selectedClass !== "all" ||
            filters.selectedUnits !== "all" ||
            filters.statusFilter.length > 0) && (
            <button
              onClick={clearFilters}
              className="flex items-center text-sm text-red-500 border border-red-400 px-3 py-1.5 rounded-lg hover:bg-red-100 transition"
            >
              <X className="w-4 h-4 mr-1" />
              Clear Filters
            </button>
          )}
        </div>

        <button
          onClick={() =>
            dispatch(
              setSortBy(filters.sortBy === "name" ? "questions" : "name")
            )
          }
          className="flex items-center space-x-2 px-3 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
        >
          <ArrowUpDown className="w-4 h-4" />
          <span>Sort</span>
        </button>
      </div>

      <div className="text-sm text-gray-600 dark:text-gray-400">
        {filteredChapters.length === 0 ? (
          <span className="text-red-500 font-medium">No chapters found</span>
        ) : (
          `Showing chapters (${filteredChapters.length})`
        )}
      </div>

      {/* Optional: show pills for active filters */}
      <div className="flex flex-wrap gap-2 text-sm">
        {filters.selectedClass !== "all" && (
          <span className="bg-orange-100 text-orange-700 px-2 py-1 rounded-full">
            Class: {filters.selectedClass}
          </span>
        )}
        {filters.selectedUnits !== "all" && (
          <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded-full">
            Unit: {filters.selectedUnits}
          </span>
        )}
        {filters.statusFilter.includes("Not Started") && (
          <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
            Not Started
          </span>
        )}
        {filters.statusFilter.includes("weak") && (
          <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full">
            Weak
          </span>
        )}
      </div>
    </div>
  );
}

// --- Supporting Components ---

interface FilterDropdownProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: FilterOption[];
}

function FilterDropdown({ value, onChange, options }: FilterDropdownProps) {
  return (
    <div className="relative">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="appearance-none bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
    </div>
  );
}

interface FilterButtonProps {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}

function FilterButton({ active, onClick, children }: FilterButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
        active
          ? "bg-black text-white dark:bg-white dark:text-black"
          : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
      }`}
    >
      {children}
    </button>
  );
}
