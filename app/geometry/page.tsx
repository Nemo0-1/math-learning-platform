import PracticeQuiz from '../components/PracticeQuiz'
import TopicNavigation from '../components/TopicNavigation'

export default function Geometry() {
  return (
    <main className="flex min-h-screen flex-col items-center p-8 md:p-24 bg-slate-50">
      <h1 className="text-4xl font-bold mb-8 text-gray-900">Geometry</h1>
      <TopicNavigation nextUrl="/calculus" nextLabel="Calculus" />
      
      <div className="max-w-4xl w-full space-y-10">
        {/* Step 1: Points, Lines, and Angles */}
        <section className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">Step 1: Points, Lines, and Angles</h2>
          <p className="text-gray-700 mb-4">
            Geometry studies shapes, sizes, and positions of objects. We begin with the basic building blocks: points, lines, and angles.
          </p>

          <div className="mb-6">
            <h3 className="text-lg font-medium mb-3">Types of Angles</h3>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="bg-red-50 p-4 rounded-lg">
                <p className="font-medium mb-2 text-red-800">Acute Angle</p>
                <p className="text-sm">Less than 90°</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="font-medium mb-2 text-blue-800">Right Angle</p>
                <p className="text-sm">Exactly 90°</p>
              </div>
            </div>
          </div>
        </section>

        {/* Step 2: Triangles and Polygons */}
        <section className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">Step 2: Triangles and Polygons</h2>
          <div className="mb-6">
            <h3 className="text-lg font-medium mb-3">Triangle Classification by Angles</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
              <div className="bg-blue-50 p-4 rounded-lg text-center">
                <p className="font-medium text-blue-800">Right Triangle</p>
                <p className="text-sm">One 90° angle</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg text-center">
                <p className="font-medium text-green-800">Obtuse Triangle</p>
                <p className="text-sm">One angle &gt; 90°</p>
              </div>
            </div>
          </div>
          
          <div className="bg-orange-50 p-4 rounded-lg">
            <p className="font-medium mb-2 text-orange-800">Pythagorean Theorem</p>
            <p className="font-mono text-center bg-white p-3 rounded-lg">a² + b² = c²</p>
          </div>
        </section>

        {/* Step 3: Area and Volume */}
        <section className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">Step 3: Area and Volume</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="font-bold">Rectangle Area</p>
              <p className="font-mono text-sm">A = L × W</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <p className="font-bold">Circle Area</p>
              <p className="font-mono text-sm">A = πr²</p>
            </div>
          </div>
        </section>

        {/* Step 4: Transformations */}
        <section className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">Step 4: Transformations</h2>
          <div className="mb-6">
            <h3 className="text-lg font-medium mb-3">Dilation (Resize)</h3>
            <div className="bg-orange-50 p-4 rounded-lg">
              <p className="font-medium mb-2">Dilation Rule: (x, y) → (kx, ky)</p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-3 rounded shadow-sm">
                  <p className="font-medium mb-1">Enlargement (k &gt; 1)</p>
                  <p className="text-xs text-gray-500">Shape gets bigger</p>
                </div>
                <div className="bg-white p-3 rounded shadow-sm">
                  <p className="font-medium mb-1">Reduction (0 &lt; k &lt; 1)</p>
                  <p className="text-xs text-gray-500">Shape gets smaller</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Step 5: Review & Mastery */}
        <section className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold mb-4 text-center">Step 5: Review and Transition</h2>
          <div className="bg-green-50 p-6 rounded-2xl border-l-4 border-green-500 mb-8">
            <h4 className="font-bold text-green-900 mb-2">Ready for Calculus?</h4>
            <p className="text-sm text-green-800">
              When you can confidently calculate areas and apply the Pythagorean theorem, you are ready for Calculus!
            </p>
          </div>
          <PracticeQuiz topic="geometry" />
        </section>
      </div>
    </main>
  );
}