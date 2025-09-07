import { useEffect, useMemo, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import SearchBox from "../components/SearchBox";
import UserCard from "../components/UserCard";
import { Button } from "../components/ui/button";
import { useApp } from "../context/AppContext";

export default function SearchPage() {
  const navigate = useNavigate();
  const { users, loading } = useApp();
  const [params, setParams] = useSearchParams();
  const [input, setInput] = useState(params.get("q") || "");

  useEffect(() => setInput(params.get("q") || ""), [params]);

  const results = useMemo(() => {
    const q = (params.get("q") || "").toLowerCase();
    if (!q) return users;
    return users.filter(
      (u) =>
        `${u.firstName} ${u.lastName}`.toLowerCase().includes(q) ||
        u.firstName.toLowerCase().includes(q) ||
        u.lastName.toLowerCase().includes(q) ||
        (u.location || "").toLowerCase().includes(q)
    );
  }, [users, params]);

  const onKeyDown = (e) => {
    if (e.key === "Enter") {
      const next = input.trim();
      const url = next ? { q: next } : {};
      setParams(url, { replace: true });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-100">
      <Navbar />
      <div className="max-w-3xl mx-auto pt-10">
        <SearchBox
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={onKeyDown}
        />
      </div>

      <div className="mt-8 max-w-6xl mx-auto px-4">
        {loading ? (
          <p className="text-center text-gray-500">Loading users…</p>
        ) : results.length === 0 ? (
          // 🔥 Custom empty state replaces <EmptyState />
          <div className="flex flex-col items-center py-16 opacity-80">
            <img
              src={require("../assets/image.png")}
              alt="No results"
              className="mx-auto mb-4"
              style={{ width: 320, maxWidth: "90%" }}
            />
            <p className="text-lg mt-4 text-gray-600">No results found.</p>
            <Button variant="ghost" className="mt-6" onClick={() => navigate("/")}>
              Back to Home
            </Button>
          </div>
        ) : (
          <div 
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "24px",
              maxWidth: "800px",
              margin: "40px auto 0",
              width: "100%"
            }}
          >
            {results.map((u) => (
              <UserCard key={u.id} user={u} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
