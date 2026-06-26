import "./Dashboard.css";
import { motion } from "framer-motion";
import {useNavigate } from "react-router-dom";
import logo from "../assets/logo.jpeg";

function Dashboard() {
    const navigate = useNavigate();

  const categories = [
    "☕ Java",
    "🐍 Python",
    "💙 C",
    "➕ C++",
    "🌐 HTML",
    "🎨 CSS",
    "⚡ JavaScript",
    "⚛ React",
    "🟢 Node JS",
    "🗄 SQL",
    "🤖 AI",
    "☁ Cloud"
  ];

  return (
    <div className="dashboard">

      {/* Background Glow */}
      <div className="dashboard-bg">
        <div className="glow g1"></div>
        <div className="glow g2"></div>
        <div className="glow g3"></div>
      </div>

      {/* Header */}

      <motion.div
        className="header"
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >

        <img src={logo} alt="logo" />

        <div>
          <h1>CodeDevil</h1>
          <p>Ask Code. Master Coding.</p>
        </div>

      </motion.div>

      {/* Welcome */}

      <motion.div
        className="welcome"
        initial={{ scale: .8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
      >

        <h2>Welcome Developer 👋</h2>

        <p>
          Choose your favourite programming language
        </p>

      </motion.div>

      {/* Categories */}

      <div className="grid">

       {categories.map((item, index) => (

  <motion.div
    className="card"
    key={index}
    whileHover={{
      scale:1.08,
      rotate:1
    }}
    onClick={() =>
      navigate("/chat", {
        state: {
          category: item,
        },
      })
    }
  >

    <h3>{item}</h3>

  </motion.div>

))}
      </div>

      {/* Bottom */}

      <motion.div
        className="bottom"
        initial={{ y: 80 }}
        animate={{ y: 0 }}
      >

        <button>🤖 AI Chat</button>

        <button>📜 History</button>

        <button>👤 Profile</button>

        <button>⚙ Settings</button>

      </motion.div>

    </div>
  );
}

export default Dashboard;