import React, { useEffect, useState } from "react";

const TryMT = () => {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(600); // 10 min
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [showAnswers, setShowAnswers] = useState(false);
  const [score, setScore] = useState(null);

  // 🔥 Generate Quiz
  const generateQuiz = async () => {
    try {
      setLoading(true);

      const res = await fetch("/api/ai/generate-mocktest", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          topic: "Indian Polity",
          exam: "Kerala PSC",
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to generate quiz");
      }

      setQuestions(data.questions || []);
    } catch (err) {
      console.log(err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    generateQuiz();
  }, []);

  // ⏱ Timer
  useEffect(() => {
    if (timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  // 📝 Handle Answer
  const handleAnswer = (qIndex, option) => {
    if (showAnswers) return; // disable after submit

    setAnswers((prev) => ({
      ...prev,
      [qIndex]: option,
    }));
  };

  // 📊 Calculate Score
  const calculateScore = () => {
    let sc = 0;

    questions.forEach((q, i) => {
      if (answers[i] === q.answer) sc++;
    });

    setScore(sc);
    setShowAnswers(true);
  };

  return (
    <div className="max-w-3xl mx-auto p-5">
      <h1 className="text-xl font-bold mb-3 text-center">
        AI Mock Test
      </h1>

      {/* ⏱ Timer */}
      <p className="text-center mb-4">
        Time Left: {Math.floor(timeLeft / 60)}:
        {String(timeLeft % 60).padStart(2, "0")}
      </p>

      {/* ❌ Error */}
      {error && (
        <p className="text-red-500 text-center mb-3">
          {error}
        </p>
      )}

      {/* 🔄 Loading */}
      {loading ? (
        <p className="text-center">Generating AI quiz...</p>
      ) : (
        <>
          {/* 📚 Questions */}
          {questions.map((q, i) => (
            <div key={i} className="border p-4 mb-3 rounded">
              <h3 className="font-medium">
                {i + 1}. {q.question}
              </h3>

              {q.options.map((opt, idx) => {
                let optionStyle = "hover:bg-gray-100";

                if (showAnswers) {
                  if (opt === q.answer) {
                    optionStyle = "bg-green-500 text-white"; // ✅ correct
                  } else if (answers[i] === opt) {
                    optionStyle = "bg-red-500 text-white"; // ❌ wrong
                  }
                } else if (answers[i] === opt) {
                  optionStyle = "bg-blue-500 text-white"; // selected
                }

                return (
                  <button
                    key={idx}
                    onClick={() => handleAnswer(i, opt)}
                    className={`block w-full p-2 mt-2 border rounded text-left ${optionStyle}`}
                  >
                    {opt}
                  </button>
                );
              })}

              {/* ✅ Show correct answer text */}
              {showAnswers && (
                <p className="text-green-600 mt-2">
                  Correct Answer: {q.answer}
                </p>
              )}
            </div>
          ))}

          {/* 🎯 Score */}
          {showAnswers && (
            <p className="text-center text-lg font-bold mt-4">
              Your Score: {score}/{questions.length}
            </p>
          )}

          {/* 🚀 Submit Button */}
          {!showAnswers && questions.length > 0 && (
            <button
              onClick={calculateScore}
              className="bg-green-600 text-white px-4 py-2 mt-5 block mx-auto rounded"
            >
              Submit Test
            </button>
          )}
        </>
      )}
    </div>
  );
};

export default TryMT;