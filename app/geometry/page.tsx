"use client";
import React from 'react';
import PracticeQuiz from '../components/PracticeQuiz';
import TopicNavigation from '../components/TopicNavigation';

export default function Geometry() {
  return (
    <main className="flex min-h-screen flex-col items-center p-8 md:p-24 bg-slate-50 text-gray-900">
      <h1 className="text-4xl font-bold mb-8">Geometry</h1>
      <TopicNavigation nextUrl="/calculus" nextLabel="Calculus" />
      
      <div className="max-w-4xl w-full space-y-10">
        {/* Step 1 */}
        <section className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">Step 1: Points, Lines, and Angles</h2>
          <p className="text-gray-700 mb-4">
            Geometry begins with the basic building blocks: points, lines, and angles.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div className="bg-blue-50 p-4 rounded-xl">
              <p className="font-bold">Acute Angle</p>
              <p className="text-sm">Less than 90°</p>
            </div>
            <div className="bg-green-50 p-4 rounded-xl">
              <p className="font-bold">Right Angle</p>
              <p className="text-sm">Exactly 90°</p>
            </div>
          </div>
        </section>

        {/* Step 2 */}
        <section className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">Step 2: Triangles and Polygons</h2>
          <div className="bg-orange-50 p-4 rounded-xl mb-4">
            <p className="font-bold mb-1">Pythagorean Theorem (Right Triangles Only)</p>
            <p className="font-mono text-lg text-center bg-white p-3 rounded-lg">a² + b² = c²</p>
          </div>
          <p className="text-sm text-gray-600">Triangle Angle Sum: All angles in a triangle add up to 180°.</p>
        </section>

        {/* Step 3 */}
        <section className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">Step 3: Area and Volume</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-purple-50 p-4 rounded-xl">
              <p className="font-bold">Circle Area: πr²</p>
              <p className="text-xs">Surface of 2D shapes.</p>
            </div>
            <div className="bg-red-50 p-4 rounded-xl">
              <p className="font-bold">Prism Volume: L × W × H</p>
              <p className="text-xs">Space inside 3D shapes.</p>
            </div>
          </div>
        </section>

        {/* Step 4 - THIS WAS THE PART CAUSING THE ERROR */}
        <section className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">Step 4: Transformations</h2>
          <p className="text-gray-700 mb-6">Dilations change the size of a shape based on a scale factor k.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-xl border-2 border-orange-100 shadow-sm">
              <p className="font-bold text-orange-800">Enlargement (k &gt; 1)</p>
              <p className="text-xs text-gray-500">The shape gets larger.</p>
            </div>
            <div className="bg-white p-4 rounded-xl border-2 border-orange-100 shadow-sm">
              {/* FIXED SYMBOLS HERE */}
              <p className="font-bold text-orange-800">Reduction (0 &lt; k &lt; 1)</p>
              <p className="text-xs text-gray-500">The shape gets smaller when k is between 0 and 1.</p>
            </div>
          </div>
        </section>

        {/* Step 5 */}
        <section className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold mb-4 text-center">Step 5: Review & Mastery</h2>
          <PracticeQuiz topic="geometry" />
        </section>
      </div>
    </main>
  );
}