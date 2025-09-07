import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import SearchBox from "../components/SearchBox";

export default function HomePage() {
  const navigate = useNavigate();
  const [q, setQ] = useState("");

  const onKeyDown = (e) => {
    if (e.key === "Enter") {
      const query = q.trim();
      navigate(`/search${query ? `?q=${encodeURIComponent(query)}` : ""}`);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-100">
      <Navbar />
      <div className="flex flex-col items-center justify-center pt-24">
        <div className="flex items-center gap-4 mb-10">
          <img 
            src={require("../assets/Logo.png")} 
            alt="Girman Technologies Logo" 
            className="h-16 object-contain"
          />
        </div>
        <div className="w-full max-w-3xl">
          <SearchBox value={q} onChange={(e) => setQ(e.target.value)} onKeyDown={onKeyDown} />
          <p className="text-center text-xs text-gray-500 mt-3">Press Enter to search</p>
        </div>
      </div>
    </div>
  );
}
