"use client";
import React from 'react';
import PracticeQuiz from '../components/PracticeQuiz';
import TopicNavigation from '../components/TopicNavigation';

export default function GeometryPage() {
  return (
    <main className="flex min-h-screen flex-col items-center p-8 md:p-24 bg-slate-50 text-gray-900">
      <h1 className="text-4xl font-bold mb-8">Geometry</h1>
      <TopicNavigation nextUrl="/calculus" nextLabel="Calculus" />
      
      <div className="max-w-4xl w-full space-y-10">
        <section className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">Step 4: Transformations</h2>
          <div className="bg-orange-50 p-4 rounded-lg">
            <p className="font-medium">Reduction (0 &lt; k &lt; 1)</p>
            <p className="text-xs">Shape gets smaller when scale factor k is between 0 and 1.</p>
          </div>
        </section>

        <section className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold mb-4 text-center">Practice Lab</h2>
          <PracticeQuiz topic="geometry" />
        </section>
      </div>
    </main>
  );
}