import React, { useState } from "react";
import DetailsDialog from "./DetailsDialog";

export default function UserCard({ user }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        style={{
          borderRadius: 12,
          background: "#fff",
          boxShadow: "0 2px 8px 0 rgba(0, 0, 0, 0.1)",
          padding: 24,
          width: "100%",
          minWidth: "280px",
          display: "flex",
          flexDirection: "column",
          gap: 20,
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 16 }}>
          <img
            src={user.profileImage}
            alt={user.firstName}
            style={{
              width: 80,
              height: 80,
              borderRadius: "50%",
              objectFit: "cover",
            }}
          />
          <div style={{ width: "100%" }}>
            <div style={{ fontWeight: 700, fontSize: 24, lineHeight: 1.2, color: "#000", marginBottom: 8, textAlign: "left" }}>
              {user.firstName} {user.lastName}
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                color: "#000",
                fontSize: 16,
              }}
            >
              <svg
                width="16"
                height="16"
                fill="none"
                style={{ marginRight: 6 }}
              >
                <path
                  d="M8 16s6-5.686 6-10A6 6 0 1 0 2 6c0 4.314 6 10 6 10Z"
                  stroke="#666"
                  strokeWidth="1.5"
                />
                <circle cx="8" cy="6" r="2" stroke="#666" strokeWidth="1.5" />
              </svg>
              {user.location}
            </div>
          </div>
        </div>
        <hr
          style={{
            border: "none",
            borderTop: "1px solid #E5E5E5",
            margin: "0 -24px",
          }}
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                fontWeight: 400,
                fontSize: 18,
                color: "#000",
              }}
            >
              <svg
                width="20"
                height="20"
                fill="none"
                style={{ marginRight: 8 }}
                viewBox="0 0 24 24"
              >
                <path
                  d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                  stroke="#000"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              {user.phone.replace(/(\d{5})(\d{5})/, "$1 $2")}
            </div>
            <div
              style={{
                color: "#999",
                fontSize: 14,
                marginTop: 4,
                marginLeft: 28,
              }}
            >
              Available on phone
            </div>
          </div>
          <button
            onClick={() => setOpen(true)}
            style={{
              background: "#333",
              color: "#fff",
              border: "none",
              borderRadius: 8,
              padding: "12px 24px",
              fontSize: 16,
              fontWeight: 400,
              cursor: "pointer",
            }}
          >
            Fetch Details
          </button>
        </div>
      </div>

      {open && <DetailsDialog user={user} onClose={() => setOpen(false)} />}
    </>
  );
}
