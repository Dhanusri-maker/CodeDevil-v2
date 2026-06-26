import "./AIChat.css";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import jsPDF from "jspdf";

function AIChat() {
  const location = useLocation();

  const category = location.state?.category || "Coding";

  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  const generateAnswer = async () => {
    if (question.trim() === "") {
      alert("Please enter your question");
      return;
    }

    setLoading(true);

    try {
      const res = await axios.post(
        "http://localhost:5000/api/ai/chat",
        {
          category,
          question,
        }
      );

      setAnswer(res.data.answer);
    } catch (error) {
      console.error(error);
      setAnswer("❌ Failed to generate answer.");
    } finally {
      setLoading(false);
    }
  };

  const copyAnswer = async () => {
    if (!answer) return;

    await navigator.clipboard.writeText(answer);
    alert("✅ Answer copied successfully!");
  };
const copyAnswer = async () => {
  if (!answer) return;

  await navigator.clipboard.writeText(answer);
  alert("✅ Answer copied successfully!");
};

const downloadPDF = () => {
  const doc = new jsPDF();

  doc.setFontSize(18);
  doc.text(`${category} AI Answer`, 10, 15);

  doc.setFontSize(12);

  const lines = doc.splitTextToSize(answer, 180);
  doc.text(lines, 10, 30);

  doc.save(`${category}-AI-Answer.pdf`);
};
  return (
    <div className="chat-page">
      <div className="chat-card">
        <h1>{category} AI Assistant</h1>

        <p>Ask Code. Master Coding.</p>

        <textarea
          placeholder={`Ask any ${category} question...`}
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />

        <button
          onClick={generateAnswer}
          disabled={loading}
        >
          {loading ? (
            <>
              <span className="spinner"></span>
              Generating Answer...
            </>
          ) : (
            "🚀 Generate Answer"
          )}
        </button>

        {answer && (
          <>
            <button
              onClick={() => {
                setQuestion("");
                setAnswer("");
              }}
            >

              ➡️ Next Question
            </button>

            <button onClick={copyAnswer}>
              📋 Copy Answer
            </button>
          </>
        )}
        {answer && (
  <button onClick={downloadPDF}>
    📄 Download PDF
  </button>
)}

        <div className="answer-box">
          <ReactMarkdown
            components={{
              code({ inline, className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || "");

                return !inline && match ? (
                  <>
                    <div className="code-header">
                      <span>💻 Code</span>

                      <button
                        className="copy-btn"
                        onClick={() =>
                          navigator.clipboard.writeText(
                            String(children).replace(/\n$/, "")
                          )
                        }
                      >
                        📋 Copy Code
                      </button>
                    </div>

                    <SyntaxHighlighter
                      style={oneDark}
                      language={match[1]}
                      PreTag="div"
                      {...props}
                    >
                      {String(children).replace(/\n$/, "")}
                    </SyntaxHighlighter>
                  </>
                ) : (
                  <code className={className} {...props}>
                    {children}
                  </code>
                );
              },
            }}
          >
            {answer}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  );
}

export default AIChat;