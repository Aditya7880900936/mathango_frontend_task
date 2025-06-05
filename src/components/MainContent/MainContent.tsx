'use client'
import { useSelector } from 'react-redux'

import type { RootState } from '../../types'
import ContentHeader from './ContentHeader'
import FilterSection from './FilterSection'
import ChapterList from './ChapterList'

export default function MainContent() {
  const selectedSubject = useSelector((state: RootState) => state.chapters.selectedSubject)

  return (
    <main className="flex-1 p-6">
      <ContentHeader subject={selectedSubject} />
      <FilterSection />
      <ChapterList />
    </main>
  )
}