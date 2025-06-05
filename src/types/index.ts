export type Chapter = {
    subject: string
    chapter: string
    class: string
    unit: string
    yearWiseQuestionCount: {
      [year: string]: number
    }
    questionSolved: number
    status: string
    isWeakChapter: boolean
  }
  
  export interface ChaptersState {
    data: Chapter[]
    loading: boolean
    error: string | null
    selectedSubject: string
  }
  
  export interface Subject {
    name: string;
    icon: string;
    color: string;
  }
  
  export interface FilterState {
    selectedClass: string;
    selectedUnits: string;
    statusFilter: string[];  // change here to array
    sortBy: 'name' | 'questions';
  }
  
  
  export interface ChaptersState {
    data: Chapter[];
    loading: boolean;
    error: string | null;
    selectedSubject: string;
  }
  
  export interface RootState {
    chapters: ChaptersState;
    filters: FilterState;
  }
  
  export interface ThemeContextType {
    darkMode: boolean;
    toggleDarkMode: () => void;
  }
  
  export interface FilterOption {
    value: string;
    label: string;
  }