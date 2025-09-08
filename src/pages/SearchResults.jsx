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
    <div
      className="min-h-screen"
      style={{ background: "linear-gradient(to bottom, #FFFFFF, #B1CBFF)" }}
    >
      
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

      
      <div style={{ marginTop: 40 }}>
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
            id="custom-grid-container"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "24px",
              maxWidth: "600px",
              margin: "40px auto 0",
              width: "100%"
            }}
          >
             {filtered.slice(0, 2).map((user, idx) => (
               <UserCard key={idx} user={user} />
             ))}
          </div>
        )}
      </div>
    </div>
  );
}
