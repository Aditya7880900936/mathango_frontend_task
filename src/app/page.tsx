"use client";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Header from "@/components/Header/Header";
import Sidebar from "@/components/Sidebar/Sidebar";
import MainContent from "@/components/MainContent/MainContent";
import { AppDispatch, RootState } from "@/store/store";
import { fetchChapters } from "@/store/slices/chapterSlice";

export default function Home() {
  const dispatch = useDispatch<AppDispatch>();
  const selectedSubject = useSelector(
    (state: RootState) => state.chapters.selectedSubject
  );

  useEffect(() => {
    if (selectedSubject) {
      dispatch(fetchChapters(selectedSubject));
    }
  }, [dispatch, selectedSubject]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* <Header /> */}
      <div className="flex flex-col md:flex-row md:px-16">
        {/* Sidebar - Hidden on mobile by default, full width when shown */}
        <div className="w-full md:w-80 md:min-w-80 md:flex-shrink-0">
          <Sidebar />
        </div>
        {/* Main Content - Full width on mobile, flex-1 on desktop */}
        <div className="flex-1 min-w-0">
          <MainContent />
        </div>
      </div>
    </div>
  );
}
