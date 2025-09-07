import React, { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import usersData from "../data/users.json";
import UserCard from "../components/UserCard";

export default function SearchResults() {
  const navigate = useNavigate();
  const [params, setParams] = useSearchParams();
  const [input, setInput] = useState(params.get("q") || "");
  const [users, setUsers] = useState([]);
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    setUsers(usersData);
    setFiltered(usersData);
  }, []);

  useEffect(() => {
    setInput(params.get("q") || "");
  }, [params]);

  useEffect(() => {
    const q = (params.get("q") || "").toLowerCase();
    if (!q) {
      setFiltered(users);
    } else {
      setFiltered(
        users.filter(
          (u) =>
            `${u.firstName} ${u.lastName}`.toLowerCase().includes(q) ||
            (u.location || "").toLowerCase().includes(q)
        )
      );
    }
  }, [users, params]);

  const onKeyDown = (e) => {
    if (e.key === "Enter") {
      const next = input.trim();
      const url = next ? { q: next } : {};
      setParams(url, { replace: true });
    }
  };

  return (
    <div className="min-h-screen" style={{ background: "linear-gradient(to bottom, #FFFFFF, #B1CBFF)" }}>
      {/* Search Bar */}
      <div className="max-w-3xl mx-auto pt-10">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={onKeyDown}
          placeholder="Search"
          className="w-full border rounded-lg px-4 py-3 text-lg shadow"
        />
      </div>

      {/* Results Section */}
      <div className="max-w-6xl mx-auto px-4" style={{ marginTop: 40 }}>
        {filtered.length === 0 ? (
          <div className="flex flex-col items-center py-16 opacity-80">
            <img
              src={require("../assets/image.png")}
              alt="No results"
              className="mx-auto mb-4"
              style={{ width: 320, maxWidth: "90%" }}
            />
            <p className="text-lg mt-4 text-gray-600">No results found.</p>
            <button
              onClick={() => navigate("/")}
              className="mt-6 text-blue-600 hover:underline font-medium"
            >
              Back to Home
            </button>
          </div>
        ) : (
          <div
  className="grid"
  style={{
    display: "grid",
    gridTemplateColumns: "repeat(2, 240px)", // FORCE 2 columns with fixed width
    gap: "22px",                    // 22px gap between cards
    maxWidth: "502px",              // make sure only 2 cards fit nicely (240px + 22px + 240px)
    margin: "40px auto 0",          // 40px top margin (from search bar)
    width: "100%",
    justifyContent: "center"
  }}
>
  {filtered.map((user, idx) => (
    <UserCard key={idx} user={user} />
  ))}
</div>

        )}
      </div>
    </div>
  );
}
