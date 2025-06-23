import React, { useState } from "react";

/**
 * Color palette & theme variables
 */
const theme = {
  primary: "#bb1b89",
  secondary: "#FFC107",
  accent: "#2196F3",
  background: "#f7f8fa",
  sidebarBg: "#fff",
  sidebarText: "#333",
  sidebarActiveBg: "#f3e6f0",
  contentBg: "#fafafd",
  border: "#ededed",
  cardBg: "#fff",
  shadow: "0 2px 8px #0001",
};

const NAV_ITEMS = [
  { key: "dashboard", label: "Dashboard", icon: "🏠" },
  { key: "track", label: "Income & Expense Tracking", icon: "💸" },
  { key: "reporting", label: "Reporting & Analytics", icon: "📊" },
  { key: "data", label: "Data Management", icon: "🗂️" },
  { key: "users", label: "User Management", icon: "👤" },
  { key: "api", label: "Reporting API", icon: "🔗" },
];

/* ---------------- Subcomponents ------------------- */

// PUBLIC_INTERFACE
function Sidebar({ activeNav, onChangeNav }) {
  /** Sidebar component for the dashboard navigation. */
  return (
    <aside
      style={{
        background: theme.sidebarBg,
        borderRight: `1px solid ${theme.border}`,
        minWidth: 220,
        maxWidth: 240,
        padding: "32px 0",
        minHeight: "100vh",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          fontWeight: 700,
          fontSize: 22,
          color: theme.primary,
          padding: "0 28px 32px 32px",
          letterSpacing: 1,
        }}
      >
        SmallBizFinance
      </div>
      <nav>
        {NAV_ITEMS.map((item) => (
          <div
            key={item.key}
            role="button"
            tabIndex={0}
            onClick={() => onChangeNav(item.key)}
            onKeyDown={(e) => e.key === 'Enter' && onChangeNav(item.key)}
            style={{
              background: activeNav === item.key ? theme.sidebarActiveBg : "transparent",
              color: theme.sidebarText,
              padding: "12px 32px",
              fontWeight: activeNav === item.key ? 600 : 400,
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
              borderLeft: activeNav === item.key ? `4px solid ${theme.primary}` : "4px solid transparent",
              transition: "background 0.14s, border-left 0.15s",
              marginBottom: 2,
              fontSize: 16,
            }}
            aria-label={item.label}
          >
            <span style={{ fontSize: 20, marginRight: 12 }}>{item.icon}</span>
            {item.label}
          </div>
        ))}
      </nav>
    </aside>
  );
}

// PUBLIC_INTERFACE
function Header({ onLogout, username }) {
  /** Dashboard header bar with user menu. */
  return (
    <header
      style={{
        width: "100%",
        background: "#fff",
        borderBottom: `1px solid ${theme.border}`,
        padding: "0 40px",
        height: 62,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        boxSizing: "border-box",
        boxShadow: theme.shadow,
        position: "sticky",
        top: 0,
        zIndex: 10,
      }}
    >
      <span style={{ fontWeight: 700, fontSize: 20, letterSpacing: 1, color: theme.primary }}>
        📋 SmallBizFinance
      </span>
      <div>
        <span style={{ marginRight: 18, color: "#888" }}>
          {username ? `Welcome, ${username}` : ""}
        </span>
        {username ? (
          <button
            style={{
              background: theme.primary,
              color: "#fff",
              border: "none",
              borderRadius: 5,
              padding: "6px 16px",
              fontWeight: 500,
              cursor: "pointer",
            }}
            onClick={onLogout}
          >
            Logout
          </button>
        ) : null}
      </div>
    </header>
  );
}

// PUBLIC_INTERFACE
function DashboardHome() {
  /** Home dashboard widget with summary. */
  return (
    <div>
      <h2>Welcome to SmallBizFinance</h2>
      <p>This lightweight dashboard helps you track financial records, generate reports, and manage users for your small business.</p>

      <div style={{ display: "flex", gap: 28, flexWrap: "wrap", margin: "40px 0" }}>
        <div style={{
          background: theme.cardBg,
          boxShadow: theme.shadow,
          borderRadius: 9,
          padding: 24,
          minWidth: 220,
          flex: 1,
        }}>
          <div style={{
            color: theme.primary,
            fontSize: 26,
            fontWeight: 700,
            marginBottom: 6,
          }}>
            💰
          </div>
          <div style={{ fontWeight: 600, fontSize: 18 }}>Income</div>
          <div style={{ color: "#888", fontSize: 16 }}>$12,000</div>
        </div>
        <div style={{
          background: theme.cardBg,
          boxShadow: theme.shadow,
          borderRadius: 9,
          padding: 24,
          minWidth: 220,
          flex: 1,
        }}>
          <div style={{
            color: theme.secondary,
            fontSize: 26,
            fontWeight: 700,
            marginBottom: 6,
          }}>
            🧾
          </div>
          <div style={{ fontWeight: 600, fontSize: 18 }}>Expenses</div>
          <div style={{ color: "#888", fontSize: 16 }}>$4,200</div>
        </div>
        <div style={{
          background: theme.cardBg,
          boxShadow: theme.shadow,
          borderRadius: 9,
          padding: 24,
          minWidth: 220,
          flex: 1,
        }}>
          <div style={{
            color: theme.accent,
            fontSize: 26,
            fontWeight: 700,
            marginBottom: 6,
          }}>
            📊
          </div>
          <div style={{ fontWeight: 600, fontSize: 18 }}>Reports</div>
          <div style={{ color: "#888", fontSize: 16 }}>3 Available</div>
        </div>
      </div>
    </div>
  );
}

// PUBLIC_INTERFACE
function IncomeExpenseTracking() {
  /** Income & Expense Tracking stub. Replace with real data/integration. */
  return (
    <div>
      <h2>Income & Expense Tracking</h2>
      <p>Track and categorize your business transactions below. (Feature stub)</p>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ background: theme.primary, color: "#fff" }}>
            <th style={{ padding: "8px 14px", textAlign: "left" }}>Date</th>
            <th style={{ padding: "8px 14px", textAlign: "left" }}>Type</th>
            <th style={{ padding: "8px 14px", textAlign: "left" }}>Category</th>
            <th style={{ padding: "8px 14px", textAlign: "left" }}>Amount</th>
            <th style={{ padding: "8px 14px", textAlign: "left" }}>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ padding: 8 }}>2024-06-10</td>
            <td style={{ padding: 8 }}>Income</td>
            <td style={{ padding: 8 }}>Consulting</td>
            <td style={{ padding: 8 }}>$2000</td>
            <td style={{ padding: 8 }}>June invoice</td>
          </tr>
          <tr>
            <td style={{ padding: 8 }}>2024-06-02</td>
            <td style={{ padding: 8 }}>Expense</td>
            <td style={{ padding: 8 }}>Supplies</td>
            <td style={{ padding: 8 }}>-$120</td>
            <td style={{ padding: 8 }}>Printer toner</td>
          </tr>
          {/* Add more static rows or integrate with backend */}
        </tbody>
      </table>
    </div>
  );
}

// PUBLIC_INTERFACE
function ReportingAndAnalytics() {
  /** Reporting & Analytics dashboard stub. */
  return (
    <div>
      <h2>Reporting & Analytics</h2>
      <p>Visualize your financial data. (Charts/integration stub)</p>
      {/* Placeholder for charts */}
      <div style={{ background: theme.cardBg, borderRadius: 8, padding: 36, margin: "32px 0 16px 0", textAlign: "center", color: "#888" }}>
        [Chart visualizations will appear here.]
      </div>
      <ul>
        <li>Income vs Expense</li>
        <li>Monthly Trends</li>
        <li>Report Export (PDF/CSV coming soon)</li>
      </ul>
    </div>
  );
}

// PUBLIC_INTERFACE
function DataManagement() {
  /** Data Management stub (CRUD for records). */
  return (
    <div>
      <h2>Data Management</h2>
      <p>Manage and maintain your financial records. (CRUD operations stub)</p>
      <button
        style={{
          background: theme.accent,
          color: "#fff",
          border: "none",
          borderRadius: 4,
          padding: "8px 20px",
          fontWeight: 500,
          marginTop: 18,
          cursor: "pointer",
        }}
      >
        + Add New Record
      </button>
    </div>
  );
}

// PUBLIC_INTERFACE
function UserManagement() {
  /** User Management dashboard stub. */
  return (
    <div>
      <h2>User Management</h2>
      <p>View and manage user accounts and permissions. (Feature stub)</p>
      <ul>
        <li>Admin (Owner) - owner@email.com</li>
        <li>Manager - manager@email.com</li>
        {/* Add more static users or integrate with backend */}
      </ul>
    </div>
  );
}

// PUBLIC_INTERFACE
function ReportingAPI() {
  /** Reporting API docs/info stub. */
  return (
    <div>
      <h2>Reporting API</h2>
      <p>Download reports programmatically via API. (Docs stub)</p>
      <code
        style={{
          display: "block",
          background: "#f5f5f7",
          color: "#333",
          borderRadius: 6,
          padding: 14,
          margin: "18px 0",
          fontFamily: "monospace",
          fontSize: 15,
        }}
      >
        GET /api/report?month=2024-06
      </code>
      <div style={{ color: "#888", fontSize: 15 }}>
        <strong>NOTE:</strong> Backend Flask route must be implemented.
      </div>
    </div>
  );
}

// PUBLIC_INTERFACE
function AuthStub({ onSignIn }) {
  /** Public interface for stubbed sign-in screen. */
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  return (
    <div style={{
      background: "#fff",
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}>
      <div style={{
        borderRadius: 10,
        boxShadow: theme.shadow,
        padding: 36,
        background: "#fff",
        minWidth: 350,
        maxWidth: 400,
      }}>
        <div style={{ textAlign: "center" }}>
          <span style={{ fontWeight: 700, fontSize: 30, color: theme.primary }}>
            📋 SmallBizFinance
          </span>
        </div>
        <h2 style={{ marginBottom: 4 }}>Sign In</h2>
        <input
          type="email"
          placeholder="Email"
          style={{ width: "100%", padding: 9, marginBottom: 15, borderRadius: 5, border: "1px solid #ddd" }}
          value={email}
          onChange={e => setEmail(e.target.value)}
          autoFocus
        />
        <input
          type="password"
          placeholder="Password"
          style={{ width: "100%", padding: 9, marginBottom: 24, borderRadius: 5, border: "1px solid #ddd" }}
          value={pass}
          onChange={e => setPass(e.target.value)}
        />
        <button
          style={{
            width: "100%",
            background: theme.primary,
            color: "#fff",
            border: "none",
            borderRadius: 5,
            padding: "10px 0",
            fontWeight: 600,
            fontSize: 15,
            cursor: "pointer",
          }}
          onClick={() => onSignIn(email)}
        >
          Sign In
        </button>
      </div>
    </div>
  );
}

/* ---------------- Main Container ------------------- */

// PUBLIC_INTERFACE
function SmallBizFinanceContainer() {
  /**
   * Main dashboard container and feature integration for SmallBizFinance.
   * Handles sidebar navigation and renders relevant component for selected feature.
   */
  // Authentication (stub)
  const [user, setUser] = useState(null);
  const [nav, setNav] = useState("dashboard");

  // Simulated sign-in
  function handleSignIn(email) {
    setUser({ email }); // Replace this with backend authentication!
    setNav("dashboard");
  }
  function handleLogout() {
    setUser(null);
    setNav("dashboard");
  }

  let mainContent;
  switch (nav) {
    case "track":
      mainContent = <IncomeExpenseTracking />;
      break;
    case "reporting":
      mainContent = <ReportingAndAnalytics />;
      break;
    case "data":
      mainContent = <DataManagement />;
      break;
    case "users":
      mainContent = <UserManagement />;
      break;
    case "api":
      mainContent = <ReportingAPI />;
      break;
    default:
      mainContent = <DashboardHome />;
  }

  // Auth flow
  if (!user) {
    return <AuthStub onSignIn={handleSignIn} />;
  }

  return (
    <div style={{ display: "flex", minHeight: "100vh", background: theme.background }}>
      {/* Sidebar */}
      <Sidebar activeNav={nav} onChangeNav={setNav} />

      {/* Main area */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <Header onLogout={handleLogout} username={user.email} />
        <main
          style={{
            background: theme.contentBg,
            flex: 1,
            padding: "40px 48px",
            boxSizing: "border-box",
            minHeight: 0,
          }}
        >
          {mainContent}
        </main>
      </div>
    </div>
  );
}

export default SmallBizFinanceContainer;
