interface ContentHeaderProps {
  subject: string;
}

export default function ContentHeader({ subject }: ContentHeaderProps) {
  function getSubjectIcon(subj: string) {
    switch (subj.toLowerCase()) {
      case "physics pyqs":
        return "🧲";
      case "chemistry pyqs":
        return "🧪"; 
      case "maths":
      case "mathematics pyqs":
        return "📊"; 
      default:
        return "📚"; 
    }
  }

  // Function to get description based on subject
  function getDescription(subj: string) {
    switch (subj.toLowerCase()) {
      case "physics pyqs":
        return "Chapter-wise Collection of Physics PYQs";
      case "chemistry pyqs":
        return "Chapter-wise Collection of Chemistry PYQs";
      case "maths":
      case "mathematics pyqs":
        return "Chapter-wise Collection of Maths PYQs";
      default:
        return "Chapter-wise Collection of PYQs";
    }
  }

  return (
    <div className="mb-6 flex items-center justify-center flex-col">
      <div className="flex items-center space-x-2 mb-2">
        <div className="w-8 h-8 bg-transparent rounded-lg flex items-center justify-center">
          <span className="text-orange-600 dark:text-orange-400 text-xl">
            {getSubjectIcon(subject)}
          </span>
        </div>
        <h2 className="text-2xl font-bold">{subject}</h2>
      </div>
      <p className="text-gray-600 dark:text-gray-400">{getDescription(subject)}</p>
    </div>
  );
}
