export default function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center py-24">
      <div className="w-48 h-48 rounded-2xl border-2 border-dashed grid place-items-center mb-6">
        <svg width="96" height="96" viewBox="0 0 24 24" fill="none">
          <path d="M3 7h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7z" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M3 7l3-3h12l3 3" stroke="currentColor" strokeWidth="1.5"/>
          <circle cx="9" cy="12" r="2" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M22 22l-4.5-4.5" stroke="currentColor" strokeWidth="1.5"/>
        </svg>
      </div>
      <p className="text-gray-600">No results found.</p>
    </div>
  );
}
