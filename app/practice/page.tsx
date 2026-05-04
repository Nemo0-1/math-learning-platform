"use client";

import React, { useState } from 'react';
import TopicNavigation from '../components/TopicNavigation';

// --- QUESTION DATABASE ---
const quizData = {
  arithmetic: [
    { q: "What is 15% of 200?", opts: ["15", "20", "30", "45"], ans: 2, explanation: "0.15 * 200 = 30." },
    { q: "Evaluate: 4 + 3 * 2", opts: ["14", "10", "24", "7"], ans: 1, explanation: "PEMDAS: 3*2=6, then 6+4=10." },
    { q: "What is the square root of 144?", opts: ["10", "11", "12", "14"], ans: 2, explanation: "12 * 12 = 144." }
  ],
  algebra: [
    { q: "Solve for x: 2x + 5 = 15", opts: ["5", "10", "7.5", "20"], ans: 0, explanation: "2x = 10, so x = 5." },
    { q: "Simplify: (x + 3)(x - 3)", opts: ["x² + 9", "x² - 9", "x² - 6x + 9", "2x"], ans: 1, explanation: "Difference of squares: a² - b²." },
    { q: "What is the slope in y = 3x + 2?", opts: ["2", "3", "x", "5"], ans: 1, explanation: "In y=mx+b, m is the slope." }
  ],
  geometry: [
    { q: "Sum of interior angles in a triangle?", opts: ["90°", "180°", "270°", "360°"], ans: 1, explanation: "All triangles sum to 180°." },
    { q: "Area of a circle with radius 3?", opts: ["6π", "9π", "3π", "12π"], ans: 1, explanation: "Area = πr². 3² = 9." },
    { q: "Pythagorean Theorem: a² + b² = ?", opts: ["c", "2c", "c²", "√c"], ans: 2, explanation: "The square of the hypotenuse is c²." }
  ],
  calculus: [
    { q: "What is the derivative of x²?", opts: ["x", "2", "2x", "x²"], ans: 2, explanation: "Power Rule: d/dx[xⁿ] = nxⁿ⁻¹." },
    { q: "Integral of cos(x)?", opts: ["sin(x) + C", "-sin(x) + C", "tan(x) + C", "cos(x) + C"], ans: 0, explanation: "The derivative of sin(x) is cos(x)." },
    { q: "limₓ→0 (sin x / x)?", opts: ["0", "Infinity", "Undefined", "1"], ans: 3, explanation: "This is a fundamental limit theorem." }
  ]
};

export default function PracticeLab() {
  const [subject, setSubject] = useState<'arithmetic' | 'algebra' | 'geometry' | 'calculus'>('arithmetic');
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const questions = quizData[subject];
  const activeQ = questions[current];

  const handleAnswer = (idx: number) => {
    if (selected !== null) return;
    setSelected(idx);
    if (idx === activeQ.ans) setScore(score + 1);
  };

  const handleNext = () => {
    if (current + 1 < questions.length) {
      setCurrent(current + 1);
      setSelected(null);
    } else {
      setShowResults(true);
    }
  };

  const reset = (newSubject?: typeof subject) => {
    if (newSubject) setSubject(newSubject);
    setCurrent(0);
    setSelected(null);
    setScore(0);
    setShowResults(false);
  };

  return (
    <main className="flex min-h-screen flex-col items-center p-8 md:p-24 bg-slate-50">
      <h1 className="text-4xl font-bold mb-2 text-gray-900">Practice Lab</h1>
      <p className="text-gray-500 mb-8 italic">Master every subject through interactive practice</p>

      {/* Subject Switcher */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {Object.keys(quizData).map((s) => (
          <button
            key={s}
            onClick={() => reset(s as any)}
            className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
              subject === s ? 'bg-blue-600 text-white shadow-lg' : 'bg-white text-gray-600 hover:bg-gray-100'
            }`}
          >
            {s.charAt(0).toUpperCase() + s.slice(1)}
          </button>
        ))}
      </div>

      <div className="max-w-2xl w-full">
        {showResults ? (
          <div className="bg-white p-12 rounded-3xl border border-gray-100 shadow-xl text-center">
            <div className="text-6xl mb-4">🏆</div>
            <h2 className="text-3xl font-bold mb-2">Great Work!</h2>
            <p className="text-gray-600 mb-8 text-lg">
              You mastered <span className="font-bold text-blue-600">{subject}</span> with a score of {score}/{questions.length}
            </p>
            <button 
              onClick={() => reset()}
              className="px-10 py-4 bg-blue-600 text-white rounded-full font-bold hover:bg-blue-700 transition-all shadow-lg"
            >
              Restart {subject.charAt(0).toUpperCase() + subject.slice(1)} Quiz
            </button>
          </div>
        ) : (
          <div className="bg-white p-8 md:p-10 rounded-3xl border border-gray-100 shadow-xl">
            <div className="flex justify-between items-center mb-8">
              <span className="bg-blue-50 text-blue-600 px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest">
                {subject} • Question {current + 1}/{questions.length}
              </span>
              <div className="flex gap-1">
                {questions.map((_, i) => (
                  <div key={i} className={`h-1.5 w-6 rounded-full ${i <= current ? 'bg-blue-500' : 'bg-gray-100'}`} />
                ))}
              </div>
            </div>

            <h3 className="text-2xl font-bold mb-8 text-gray-800 leading-tight">{activeQ.q}</h3>

            <div className="grid grid-cols-1 gap-4">
              {activeQ.opts.map((opt, i) => (
                <button
                  key={i}
                  disabled={selected !== null}
                  onClick={() => handleAnswer(i)}
                  className={`w-full p-5 text-left rounded-2xl border-2 transition-all flex justify-between items-center ${
                    selected === i 
                      ? (i === activeQ.ans ? 'border-green-500 bg-green-50 text-green-900' : 'border-red-500 bg-red-50 text-red-900')
                      : (selected !== null && i === activeQ.ans ? 'border-green-500 bg-green-50' : 'border-gray-100 hover:border-blue-500 hover:bg-blue-50/30')
                  }`}
                >
                  <span className="font-medium text-lg">{opt}</span>
                  {selected === i && (i === activeQ.ans ? '✅' : '❌')}
                </button>
              ))}
            </div>

            {selected !== null && (
              <div className="mt-8 animate-in fade-in slide-in-from-top-4 duration-500">
                <div className={`p-5 rounded-2xl mb-6 ${selected === activeQ.ans ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                  <p className="font-black text-sm uppercase tracking-widest mb-2">{selected === activeQ.ans ? "✓ Correct" : "✕ Incorrect"}</p>
                  <p className="text-md leading-relaxed">{activeQ.explanation}</p>
                </div>
                <button 
                  onClick={handleNext}
                  className="w-full py-5 bg-gray-900 text-white rounded-2xl font-black text-lg hover:bg-black transition-all shadow-lg active:scale-95"
                >
                  {current + 1 === questions.length ? "Finish Lab" : "Next Question →"}
                </button>
              </div>
            )}
          </div>
        )}
      </div>
      
      <div className="mt-12 w-full max-w-2xl">
        <TopicNavigation nextUrl="/" nextLabel="Home" />
      </div>
    </main>
  );
}