import PracticeQuiz from '../components/PracticeQuiz'
import TopicNavigation from '../components/TopicNavigation'

export default function Calculus() {
  return (
    <main className="flex min-h-screen flex-col items-center p-8 md:p-24 bg-slate-50">
      <h1 className="text-4xl font-bold mb-8 text-gray-900">Calculus</h1>
      <TopicNavigation nextUrl="/practice" nextLabel="Practice Lab" />
      
      <div className="max-w-4xl w-full space-y-10">
        {/* STEP 1: LIMITS */}
        <section className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">Step 1: Limits and Continuity</h2>
          <p className="text-gray-700 mb-4">
            Calculus begins with limits, which describe how functions behave as inputs approach specific values. Continuity ensures functions have no breaks or gaps.
          </p>

          <div className="mb-6">
            <h3 className="text-lg font-medium mb-3">What is a Limit?</h3>
            <div className="bg-blue-50 p-4 rounded-lg">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div className="bg-white p-3 rounded">
                  <p className="font-medium mb-1 text-blue-800">limₓ→2 (x² - 1)</p>
                  <p className="text-sm">As x → 2, (x² - 1) → 3. Limit = 3</p>
                </div>
                <div className="bg-white p-3 rounded">
                  <p className="font-medium mb-1 text-blue-800">limₓ→0 (sin x / x)</p>
                  <p className="text-sm">As x → 0, (sin x / x) → 1. Limit = 1</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-medium mb-3">Evaluating Limits</h3>
            <div className="space-y-4">
              <div className="bg-green-50 p-4 rounded-lg">
                <p className="font-medium mb-1 text-green-800">Factoring (for 0/0 form):</p>
                <p className="text-sm font-mono">limₓ→2 (x² - 4)/(x - 2)</p>
                <p className="text-sm font-mono">= limₓ→2 [(x - 2)(x + 2)]/(x - 2) = 4</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <p className="font-medium mb-1 text-green-800">Rationalizing:</p>
                <p className="text-xs font-mono">limₓ→0 (√(x + 1) - 1)/x = 1/2</p>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-medium mb-3">One-Sided Limits & Continuity</h3>
            <p className="text-sm mb-3">Left-hand limit: limₓ→a⁻ f(x) (x &lt; a). Right-hand limit: limₓ→a⁺ f(x) (x &gt; a).</p>
            <div className="bg-orange-50 p-4 rounded-lg">
              <p className="font-medium mb-2">Conditions for Continuity:</p>
              <ol className="list-decimal pl-5 text-sm space-y-1">
                <li>f(a) exists</li>
                <li>limₓ→a f(x) exists</li>
                <li>limₓ→a f(x) = f(a)</li>
              </ol>
            </div>
          </div>
        </section>

        {/* STEP 2: THE DERIVATIVE */}
        <section className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">Step 2: The Derivative</h2>
          <div className="bg-blue-50 p-6 rounded-2xl mb-6">
            <p className="text-center font-mono font-bold text-blue-900 text-lg">f'(a) = limₕ→0 [f(a + h) - f(a)] / h</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-purple-50 rounded-xl">
              <h4 className="font-bold text-purple-900">Position → Velocity</h4>
              <p className="text-sm">v(t) = s'(t)</p>
            </div>
            <div className="p-4 bg-purple-50 rounded-xl">
              <h4 className="font-bold text-purple-900">Velocity → Accel</h4>
              <p className="text-sm">a(t) = v'(t)</p>
            </div>
          </div>
        </section>

        {/* STEP 3: RULES */}
        <section className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">Step 3: Differentiation Rules</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div className="p-4 bg-yellow-50 rounded-xl">
               <p className="font-bold">Power Rule: d/dx[xⁿ] = nxⁿ⁻¹</p>
            </div>
            <div className="p-4 bg-yellow-50 rounded-xl">
               <p className="font-bold">Trig: sin' = cos, cos' = -sin</p>
            </div>
          </div>
          <div className="bg-red-50 p-4 rounded-xl border-l-4 border-red-400">
            <p className="font-bold text-red-900">Product Rule: (fg)' = f'g + fg'</p>
            <p className="font-bold text-red-900 mt-2">Chain Rule: f(g(x))' = f'(g(x))g'(x)</p>
          </div>
        </section>

        {/* STEP 4: INTEGRALS */}
        <section className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">Step 4: Integrals and Accumulation</h2>
          <p className="mb-4">Integration is the reverse of differentiation.</p>
          <div className="bg-indigo-50 p-6 rounded-2xl mb-4">
             <p className="text-center font-mono font-bold text-indigo-900">∫ₐᵇ f(x) dx = F(b) - F(a)</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
             <div className="p-3 bg-white border rounded">∫ xⁿ dx = (xⁿ⁺¹)/(n+1) + C</div>
             <div className="p-3 bg-white border rounded">∫ cos x dx = sin x + C</div>
          </div>
        </section>

        {/* STEP 5: APPLICATIONS */}
        <section className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">Step 5: Review and Apply</h2>
          <div className="space-y-4">
            <div className="p-4 bg-teal-50 rounded-xl">
              <h4 className="font-bold text-teal-900">Optimization:</h4>
              <p className="text-sm">Maximize A = x(50-x). Set A' = 0 → 50-2x=0 → x=25.</p>
            </div>
            <div className="p-4 bg-pink-50 rounded-xl">
              <h4 className="font-bold text-pink-900">Area Between Curves:</h4>
              <p className="text-sm">Area = ∫ [f(x) - g(x)] dx</p>
            </div>
          </div>
          <div className="mt-8">
            <PracticeQuiz topic="calculus" />
          </div>
        </section>
      </div>
    </main>
  )
}