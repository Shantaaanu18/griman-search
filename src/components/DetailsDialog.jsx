import React from "react";

const fallbackImg = "https://via.placeholder.com/160x192.png?text=No+Image";

export default function DetailsDialog({ user, onClose }) {
  return (
    <div 
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000
      }}
      onClick={onClose}
    >
      <div 
        style={{
          backgroundColor: "#fff",
          borderRadius: 12,
          padding: 32,
          maxWidth: 400,
          width: "90%",
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.15)",
          position: "relative"
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <h2 style={{ 
          fontSize: 24, 
          fontWeight: 700, 
          marginBottom: 8,
          color: "#000"
        }}>
          Fetch Details
        </h2>
        <p style={{ 
          fontSize: 16, 
          color: "#666", 
          marginBottom: 24,
          lineHeight: 1.4
        }}>
          Here are the details of following employee.
        </p>
        
        <div style={{ marginBottom: 16 }}>
          <strong style={{ color: "#000" }}>Name:</strong> {user.firstName} {user.lastName}
        </div>
        <div style={{ marginBottom: 16 }}>
          <strong style={{ color: "#000" }}>Location:</strong> {user.location}
        </div>
        <div style={{ marginBottom: 16 }}>
          <strong style={{ color: "#000" }}>Contact Number:</strong> {user.phone}
        </div>
        <div style={{ marginBottom: 8 }}>
          <strong style={{ color: "#000" }}>Profile Image:</strong>
        </div>
        <img
          src={user.profileImage || fallbackImg}
          alt={`${user.firstName} ${user.lastName}`}
          style={{
            width: 160,
            height: 192,
            objectFit: "cover",
            borderRadius: 8,
            border: "1px solid #E5E5E5",
            marginBottom: 24
          }}
        />
        
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <button
            onClick={onClose}
            style={{
              backgroundColor: "#F5F5F5",
              color: "#000",
              border: "none",
              borderRadius: 8,
              padding: "12px 24px",
              fontSize: 16,
              fontWeight: 500,
              cursor: "pointer"
            }}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
