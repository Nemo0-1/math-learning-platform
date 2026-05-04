import PracticeQuiz from '../components/PracticeQuiz'
import TopicNavigation from '../components/TopicNavigation'

export default function Algebra() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-4xl font-bold mb-8">Algebra</h1>
      <TopicNavigation nextUrl="/geometry" nextLabel="Geometry" />
      <div className="max-w-4xl w-full space-y-10">
        <section className="rounded-3xl border border-gray-200 bg-gray-50 p-8 shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">Step 1: Variables and Expressions</h2>
          <p className="text-gray-700 mb-4">
            Algebra begins with understanding variables - letters that represent unknown numbers. We'll learn to build and simplify algebraic expressions, which are combinations of numbers, variables, and operations.
          </p>

          <div className="mb-6">
            <h3 className="text-lg font-medium mb-3">What are Variables?</h3>
            <p className="text-gray-700 mb-3">
              Variables are letters (like x, y, a, b) that stand for unknown numbers. They allow us to write general rules and solve problems without knowing specific numbers.
            </p>
            <div className="bg-blue-50 p-4 rounded-lg">
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="bg-white p-3 rounded">
                  <p className="font-medium mb-1">x = 5</p>
                  <p className="text-sm">x represents the number 5</p>
                </div>
                <div className="bg-white p-3 rounded">
                  <p className="font-medium mb-1">y = ?</p>
                  <p className="text-sm">y represents some unknown number</p>
                </div>
              </div>
              <p className="text-sm">Variables can represent any number - we just don't know which one yet!</p>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-medium mb-3">Algebraic Expressions</h3>
            <p className="text-gray-700 mb-3">
              Expressions combine numbers, variables, and operations (+, -, ×, ÷). They represent calculations that haven't been completed yet.
            </p>
            <div className="bg-green-50 p-4 rounded-lg">
              <p className="font-medium mb-2">Examples of Expressions:</p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-3 rounded">
                  <p className="font-medium mb-1">2x + 3</p>
                  <p className="text-sm">Two times some number, plus three</p>
                </div>
                <div className="bg-white p-3 rounded">
                  <p className="font-medium mb-1">x² - 4</p>
                  <p className="text-sm">Some number squared, minus four</p>
                </div>
                <div className="bg-white p-3 rounded">
                  <p className="font-medium mb-1">3(y + 2)</p>
                  <p className="text-sm">Three times (some number plus two)</p>
                </div>
                <div className="bg-white p-3 rounded">
                  <p className="font-medium mb-1">a + b</p>
                  <p className="text-sm">Two unknown numbers added together</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-medium mb-3">Evaluating Expressions</h3>
            <p className="text-gray-700 mb-3">
              To evaluate an expression, replace each variable with a number and calculate the result.
            </p>
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg border">
                <p className="font-medium mb-2">Evaluate 2x + 3 when x = 4</p>
                <div className="text-sm space-y-1">
                  <p>Replace x with 4: 2(4) + 3</p>
                  <p>Multiply: 8 + 3</p>
                  <p>Add: 11</p>
                  <p className="font-medium text-green-600">Answer: 11</p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg border">
                <p className="font-medium mb-2">Evaluate x² - 4 when x = 3</p>
                <div className="text-sm space-y-1">
                  <p>Replace x with 3: (3)² - 4</p>
                  <p>Square: 9 - 4</p>
                  <p>Subtract: 5</p>
                  <p className="font-medium text-green-600">Answer: 5</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-medium mb-3">Simplifying Expressions</h3>
            <p className="text-gray-700 mb-3">
              Combine like terms (terms with the same variable) to make expressions simpler.
            </p>
            <div className="space-y-4">
              <div className="bg-purple-50 p-4 rounded-lg">
                <p className="font-medium mb-2">Simplify: 3x + 2x</p>
                <div className="text-sm space-y-1">
                  <p>Both terms have x, so add coefficients: 3 + 2 = 5</p>
                  <p className="font-medium text-green-600">Answer: 5x</p>
                </div>
              </div>

              <div className="bg-purple-50 p-4 rounded-lg">
                <p className="font-medium mb-2">Simplify: 4(2x + 1)</p>
                <div className="text-sm space-y-1">
                  <p>Use distributive property: 4 × 2x + 4 × 1</p>
                  <p>Multiply: 8x + 4</p>
                  <p className="font-medium text-green-600">Answer: 8x + 4</p>
                </div>
              </div>

              <div className="bg-purple-50 p-4 rounded-lg">
                <p className="font-medium mb-2">Simplify: 2x + 3x - x</p>
                <div className="text-sm space-y-1">
                  <p>All terms have x: 2 + 3 - 1 = 4</p>
                  <p className="font-medium text-green-600">Answer: 4x</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 p-4 rounded-lg">
            <h4 className="font-medium mb-2">Like Terms vs Unlike Terms:</h4>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-3 rounded">
                <p className="font-medium text-green-800 mb-1">Like Terms (can combine)</p>
                <p className="text-xs">3x and 2x<br/>5y² and y²<br/>7 and 2</p>
              </div>
              <div className="bg-white p-3 rounded">
                <p className="font-medium text-red-800 mb-1">Unlike Terms (cannot combine)</p>
                <p className="text-xs">3x and 2y<br/>x² and x<br/>3x and 7</p>
              </div>
            </div>
          </div>

          <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400 mt-4">
            <h4 className="font-medium mb-2">Common Mistakes to Avoid:</h4>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Trying to combine unlike terms (3x + 2y stays 3x + 2y)</li>
              <li>Forgetting the distributive property when simplifying parentheses</li>
              <li>Mixing up coefficients and variables (3x means 3 × x, not 3x)</li>
              <li>Forgetting to apply operations to both terms in parentheses</li>
            </ul>
          </div>
        </section>

        <section className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">Step 2: Solving Equations</h2>
          <p className="text-gray-700 mb-4">
            Equations are mathematical statements that two expressions are equal. Solving equations means finding the value of the variable that makes the equation true. We use inverse operations to isolate the variable.
          </p>

          <div className="mb-6">
            <h3 className="text-lg font-medium mb-3">What is an Equation?</h3>
            <p className="text-gray-700 mb-3">
              An equation shows that two expressions are equal. The goal is to find the value of the variable that makes both sides balance.
            </p>
            <div className="bg-blue-50 p-4 rounded-lg">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-3 rounded text-center">
                  <p className="font-medium">2x + 3 = 7</p>
                  <p className="text-sm">Equation with variable</p>
                </div>
                <div className="bg-white p-3 rounded text-center">
                  <p className="font-medium">x = 2</p>
                  <p className="text-sm">Solution (makes equation true)</p>
                </div>
              </div>
              <p className="text-sm mt-2">Check: 2(2) + 3 = 4 + 3 = 7 ✓</p>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-medium mb-3">Inverse Operations</h3>
            <p className="text-gray-700 mb-3">
              To solve equations, we use inverse operations to "undo" what's been done to the variable. Whatever you do to one side, you must do to the other to keep the equation balanced.
            </p>
            <div className="bg-green-50 p-4 rounded-lg">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-3 rounded">
                  <p className="font-medium text-blue-800 mb-1">Addition ↔ Subtraction</p>
                  <p className="text-xs">If you add 5, subtract 5 to undo</p>
                </div>
                <div className="bg-white p-3 rounded">
                  <p className="font-medium text-blue-800 mb-1">Multiplication ↔ Division</p>
                  <p className="text-xs">If you multiply by 3, divide by 3 to undo</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-medium mb-3">Solving One-Step Equations</h3>
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg border">
                <p className="font-medium mb-2">Solve: x + 5 = 12</p>
                <div className="text-sm space-y-1">
                  <p>Subtract 5 from both sides: x + 5 - 5 = 12 - 5</p>
                  <p>Simplify: x = 7</p>
                  <p className="font-medium text-green-600">Answer: x = 7</p>
                  <p className="text-xs">Check: 7 + 5 = 12 ✓</p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg border">
                <p className="font-medium mb-2">Solve: 3x = 15</p>
                <div className="text-sm space-y-1">
                  <p>Divide both sides by 3: 3x ÷ 3 = 15 ÷ 3</p>
                  <p>Simplify: x = 5</p>
                  <p className="font-medium text-green-600">Answer: x = 5</p>
                  <p className="text-xs">Check: 3 × 5 = 15 ✓</p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg border">
                <p className="font-medium mb-2">Solve: x - 8 = 4</p>
                <div className="text-sm space-y-1">
                  <p>Add 8 to both sides: x - 8 + 8 = 4 + 8</p>
                  <p>Simplify: x = 12</p>
                  <p className="font-medium text-green-600">Answer: x = 12</p>
                  <p className="text-xs">Check: 12 - 8 = 4 ✓</p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg border">
                <p className="font-medium mb-2">Solve: x ÷ 4 = 6</p>
                <div className="text-sm space-y-1">
                  <p>Multiply both sides by 4: x ÷ 4 × 4 = 6 × 4</p>
                  <p>Simplify: x = 24</p>
                  <p className="font-medium text-green-600">Answer: x = 24</p>
                  <p className="text-xs">Check: 24 ÷ 4 = 6 ✓</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-medium mb-3">Solving Two-Step Equations</h3>
            <div className="space-y-4">
              <div className="bg-purple-50 p-4 rounded-lg">
                <p className="font-medium mb-2">Solve: 2x + 5 = 13</p>
                <div className="text-sm space-y-1">
                  <p>Step 1: Subtract 5 from both sides: 2x + 5 - 5 = 13 - 5</p>
                  <p>Simplify: 2x = 8</p>
                  <p>Step 2: Divide both sides by 2: 2x ÷ 2 = 8 ÷ 2</p>
                  <p>Simplify: x = 4</p>
                  <p className="font-medium text-green-600">Answer: x = 4</p>
                  <p className="text-xs">Check: 2(4) + 5 = 8 + 5 = 13 ✓</p>
                </div>
              </div>

              <div className="bg-purple-50 p-4 rounded-lg">
                <p className="font-medium mb-2">Solve: 3x - 7 = 11</p>
                <div className="text-sm space-y-1">
                  <p>Step 1: Add 7 to both sides: 3x - 7 + 7 = 11 + 7</p>
                  <p>Simplify: 3x = 18</p>
                  <p>Step 2: Divide both sides by 3: 3x ÷ 3 = 18 ÷ 3</p>
                  <p>Simplify: x = 6</p>
                  <p className="font-medium text-green-600">Answer: x = 6</p>
                  <p className="text-xs">Check: 3(6) - 7 = 18 - 7 = 11 ✓</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 p-4 rounded-lg">
            <h4 className="font-medium mb-2">Order of Operations for Solving:</h4>
            <ol className="list-decimal pl-5 space-y-1 text-sm">
              <li>Distribute if there are parentheses</li>
              <li>Combine like terms on each side</li>
              <li>Add/subtract to isolate the variable term</li>
              <li>Multiply/divide to solve for the variable</li>
              <li>Always check your solution!</li>
            </ol>
          </div>

          <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400 mt-4">
            <h4 className="font-medium mb-2">Common Mistakes to Avoid:</h4>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Forgetting to perform the same operation on both sides</li>
              <li>Mixing up addition/subtraction vs multiplication/division</li>
              <li>Not checking your answer by substituting back</li>
              <li>Dividing when you should multiply (or vice versa)</li>
            </ul>
          </div>
        </section>

        <section className="rounded-3xl border border-gray-200 bg-gray-50 p-8 shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">Step 3: Functions and Graphing</h2>
          <p className="text-gray-700 mb-4">
            Functions describe relationships between inputs and outputs. Linear functions create straight lines when graphed. Understanding functions helps us model real-world relationships and predict outcomes.
          </p>

          <div className="mb-6">
            <h3 className="text-lg font-medium mb-3">What is a Function?</h3>
            <p className="text-gray-700 mb-3">
              A function is a rule that assigns each input value to exactly one output value. We often write functions using f(x) notation, where x is the input and f(x) is the output.
            </p>
            <div className="bg-blue-50 p-4 rounded-lg">
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="bg-white p-3 rounded">
                  <p className="font-medium mb-1">f(x) = 2x + 1</p>
                  <p className="text-sm">Function rule</p>
                </div>
                <div className="bg-white p-3 rounded">
                  <p className="font-medium mb-1">f(3) = 2(3) + 1 = 7</p>
                  <p className="text-sm">When x=3, output=7</p>
                </div>
              </div>
              <p className="text-sm">Each input x produces exactly one output f(x)</p>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-medium mb-3">Function Tables</h3>
            <p className="text-gray-700 mb-3">
              Tables help us see the relationship between inputs and outputs. Choose several x-values and calculate the corresponding f(x) values.
            </p>
            <div className="bg-green-50 p-4 rounded-lg">
              <p className="font-medium mb-2">Example: f(x) = 2x + 1</p>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-300 rounded">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 px-4 py-2">x (input)</th>
                      <th className="border border-gray-300 px-4 py-2">f(x) = 2x + 1</th>
                      <th className="border border-gray-300 px-4 py-2">Output</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 text-center">-2</td>
                      <td className="border border-gray-300 px-4 py-2 text-center">2(-2) + 1</td>
                      <td className="border border-gray-300 px-4 py-2 text-center">-3</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-2 text-center">-1</td>
                      <td className="border border-gray-300 px-4 py-2 text-center">2(-1) + 1</td>
                      <td className="border border-gray-300 px-4 py-2 text-center">-1</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 text-center">0</td>
                      <td className="border border-gray-300 px-4 py-2 text-center">2(0) + 1</td>
                      <td className="border border-gray-300 px-4 py-2 text-center">1</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-2 text-center">1</td>
                      <td className="border border-gray-300 px-4 py-2 text-center">2(1) + 1</td>
                      <td className="border border-gray-300 px-4 py-2 text-center">3</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 text-center">2</td>
                      <td className="border border-gray-300 px-4 py-2 text-center">2(2) + 1</td>
                      <td className="border border-gray-300 px-4 py-2 text-center">5</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-medium mb-3">Linear Functions and Slope</h3>
            <p className="text-gray-700 mb-3">
              Linear functions have the form f(x) = mx + b, where m is the slope (steepness) and b is the y-intercept (where the line crosses the y-axis).
            </p>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="bg-purple-50 p-4 rounded-lg">
                <p className="font-medium mb-2">Slope (m)</p>
                <p className="text-sm">Rise over run - how steep the line is</p>
                <div className="bg-white p-2 rounded mt-2">
                  <p className="text-xs">Positive slope: ↑ to the right</p>
                  <p className="text-xs">Negative slope: ↑ to the left</p>
                  <p className="text-xs">Zero slope: horizontal line</p>
                </div>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <p className="font-medium mb-2">Y-intercept (b)</p>
                <p className="text-sm">Where the line crosses the y-axis</p>
                <div className="bg-white p-2 rounded mt-2">
                  <p className="text-xs">f(x) = 2x + 3 crosses y-axis at (0,3)</p>
                  <p className="text-xs">f(x) = x - 1 crosses y-axis at (0,-1)</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-medium mb-3">Graphing Linear Functions</h3>
            <p className="text-gray-700 mb-3">
              To graph a linear function, plot points from your table and connect them with a straight line.
            </p>
            <div className="bg-yellow-50 p-4 rounded-lg">
              <p className="font-medium mb-2">Steps to Graph f(x) = 2x + 1:</p>
              <ol className="list-decimal pl-5 space-y-1 text-sm">
                <li>Find the y-intercept: when x=0, f(0)=2(0)+1=1, so plot (0,1)</li>
                <li>Use slope to find another point: slope=2 means rise 2, run 1</li>
                <li>From (0,1), go up 2, right 1 to get (1,3)</li>
                <li>Draw a straight line through the points</li>
              </ol>
              <div className="bg-white p-3 rounded mt-3 text-center">
                <p className="text-sm font-medium">Visual representation would show coordinate plane with points (0,1) and (1,3) connected by a line</p>
              </div>
            </div>
          </div>

          <div className="bg-orange-50 p-4 rounded-lg">
            <h4 className="font-medium mb-2">Real-World Applications:</h4>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-3 rounded">
                <p className="font-medium mb-1">Distance vs Time</p>
                <p className="text-xs">d(t) = 60t (60 mph constant speed)</p>
              </div>
              <div className="bg-white p-3 rounded">
                <p className="font-medium mb-1">Cost vs Items</p>
                <p className="text-xs">C(n) = 2.50n + 5 (per item + fixed fee)</p>
              </div>
              <div className="bg-white p-3 rounded">
                <p className="font-medium mb-1">Temperature vs Time</p>
                <p className="text-xs">T(t) = 3t + 20 (degrees per hour)</p>
              </div>
              <div className="bg-white p-3 rounded">
                <p className="font-medium mb-1">Savings vs Time</p>
                <p className="text-xs">S(t) = 100t + 500 (monthly deposit)</p>
              </div>
            </div>
          </div>

          <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400 mt-4">
            <h4 className="font-medium mb-2">Common Mistakes to Avoid:</h4>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Confusing slope with y-intercept</li>
              <li>Plotting points incorrectly on the coordinate plane</li>
              <li>Not using enough points to verify the line is straight</li>
              <li>Forgetting that linear functions always make straight lines</li>
            </ul>
          </div>
        </section>

        <section className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">Step 4: Polynomials and Factoring</h2>
          <p className="text-gray-700 mb-4">
            Polynomials are expressions with multiple terms, often involving powers of variables. Factoring is the reverse of expanding - we break down polynomials into simpler multiplicative expressions. This is crucial for solving quadratic equations.
          </p>

          <div className="mb-6">
            <h3 className="text-lg font-medium mb-3">What are Polynomials?</h3>
            <p className="text-gray-700 mb-3">
              Polynomials are sums of terms with variables raised to non-negative integer powers. The degree is the highest power of the variable.
            </p>
            <div className="bg-blue-50 p-4 rounded-lg">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-3 rounded">
                  <p className="font-medium mb-1">x² + 3x - 4</p>
                  <p className="text-sm">Quadratic (degree 2)</p>
                </div>
                <div className="bg-white p-3 rounded">
                  <p className="font-medium mb-1">2x³ - x² + 5x - 1</p>
                  <p className="text-sm">Cubic (degree 3)</p>
                </div>
                <div className="bg-white p-3 rounded">
                  <p className="font-medium mb-1">x + 7</p>
                  <p className="text-sm">Linear (degree 1)</p>
                </div>
                <div className="bg-white p-3 rounded">
                  <p className="font-medium mb-1">5</p>
                  <p className="text-sm">Constant (degree 0)</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-medium mb-3">Adding and Multiplying Polynomials</h3>
            <div className="space-y-4">
              <div className="bg-green-50 p-4 rounded-lg">
                <p className="font-medium mb-2">Adding Polynomials:</p>
                <p className="text-sm mb-2">(2x² + 3x + 1) + (x² - 2x + 4)</p>
                <p className="text-sm">Combine like terms: (2x² + x²) + (3x - 2x) + (1 + 4)</p>
                <p className="font-medium text-green-600">Answer: 3x² + x + 5</p>
              </div>

              <div className="bg-green-50 p-4 rounded-lg">
                <p className="font-medium mb-2">Multiplying Polynomials (FOIL):</p>
                <p className="text-sm mb-2">(x + 2)(x + 3)</p>
                <p className="text-sm">F: x × x = x²</p>
                <p className="text-sm">O: x × 3 = 3x</p>
                <p className="text-sm">I: 2 × x = 2x</p>
                <p className="text-sm">L: 2 × 3 = 6</p>
                <p className="font-medium text-green-600">Answer: x² + 5x + 6</p>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-medium mb-3">Factoring Methods</h3>
            <div className="space-y-4">
              <div className="bg-purple-50 p-4 rounded-lg">
                <p className="font-medium mb-2">Greatest Common Factor (GCF):</p>
                <p className="text-sm mb-2">Factor: 6x² + 9x</p>
                <p className="text-sm">GCF of 6x² and 9x is 3x</p>
                <p className="text-sm">6x² ÷ 3x = 2x, 9x ÷ 3x = 3</p>
                <p className="font-medium text-green-600">Answer: 3x(2x + 3)</p>
              </div>

              <div className="bg-purple-50 p-4 rounded-lg">
                <p className="font-medium mb-2">Difference of Squares:</p>
                <p className="text-sm mb-2">Factor: x² - 9</p>
                <p className="text-sm">a² - b² = (a + b)(a - b)</p>
                <p className="text-sm">x² = x², 9 = 3²</p>
                <p className="font-medium text-green-600">Answer: (x + 3)(x - 3)</p>
              </div>

              <div className="bg-purple-50 p-4 rounded-lg">
                <p className="font-medium mb-2">Trinomial Factoring:</p>
                <p className="text-sm mb-2">Factor: x² + 5x + 6</p>
                <p className="text-sm">Find factors of 6 that add to 5: 2 and 3</p>
                <p className="text-sm">(x + 2)(x + 3) = x² + 3x + 2x + 6 = x² + 5x + 6</p>
                <p className="font-medium text-green-600">Answer: (x + 2)(x + 3)</p>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-medium mb-3">Solving Quadratic Equations by Factoring</h3>
            <p className="text-gray-700 mb-3">
              Set the factored quadratic equal to zero and solve for x using the zero product property.
            </p>
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg border">
                <p className="font-medium mb-2">Solve: x² - 5x + 6 = 0</p>
                <div className="text-sm space-y-1">
                  <p>Factor: (x - 2)(x - 3) = 0</p>
                  <p>Zero product property: x - 2 = 0 or x - 3 = 0</p>
                  <p>x = 2 or x = 3</p>
                  <p className="font-medium text-green-600">Solutions: x = 2, 3</p>
                  <p className="text-xs">Check: (2)² - 5(2) + 6 = 4 - 10 + 6 = 0 ✓</p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg border">
                <p className="font-medium mb-2">Solve: 2x² + x - 6 = 0</p>
                <div className="text-sm space-y-1">
                  <p>Factor: (2x - 3)(x + 2) = 0</p>
                  <p>Zero product property: 2x - 3 = 0 or x + 2 = 0</p>
                  <p>2x = 3 → x = 3/2 or x = -2</p>
                  <p className="font-medium text-green-600">Solutions: x = 3/2, -2</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 p-4 rounded-lg">
            <h4 className="font-medium mb-2">Factoring Strategy:</h4>
            <ol className="list-decimal pl-5 space-y-1 text-sm">
              <li>Look for greatest common factor first</li>
              <li>Check if it's difference of squares (a² - b²)</li>
              <li>For trinomials, find factors of c that add to b</li>
              <li>Always check your factoring by multiplying back</li>
            </ol>
          </div>

          <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400 mt-4">
            <h4 className="font-medium mb-2">Common Mistakes to Avoid:</h4>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Forgetting to factor out the GCF first</li>
              <li>Mixing up the signs when factoring trinomials</li>
              <li>Not applying the zero product property correctly</li>
              <li>Forgetting to check both solutions</li>
            </ul>
          </div>
        </section>

        <section className="rounded-3xl border border-gray-200 bg-gray-50 p-8 shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">Step 5: Review and Transition</h2>
          <p className="text-gray-700 mb-4">
            Algebra provides the foundation for advanced mathematics. Review these key concepts and practice applying them to different types of problems. When you're comfortable with these skills, you'll be ready to move to Geometry.
          </p>

          <div className="mb-6">
            <h3 className="text-lg font-medium mb-3">Key Algebra Concepts Review</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-medium mb-2">Variables & Expressions</h4>
                <ul className="text-sm space-y-1">
                  <li>• Variables represent unknown numbers</li>
                  <li>• Expressions combine variables and operations</li>
                  <li>• Evaluate by substituting values</li>
                  <li>• Simplify by combining like terms</li>
                </ul>
              </div>

              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-medium mb-2">Solving Equations</h4>
                <ul className="text-sm space-y-1">
                  <li>• Use inverse operations</li>
                  <li>• Maintain balance on both sides</li>
                  <li>• Check solutions by substitution</li>
                  <li>• One-step and two-step equations</li>
                </ul>
              </div>

              <div className="bg-purple-50 p-4 rounded-lg">
                <h4 className="font-medium mb-2">Functions & Graphing</h4>
                <ul className="text-sm space-y-1">
                  <li>• Functions map inputs to outputs</li>
                  <li>• Linear functions: f(x) = mx + b</li>
                  <li>• Slope measures steepness</li>
                  <li>• Y-intercept is where line crosses y-axis</li>
                </ul>
              </div>

              <div className="bg-orange-50 p-4 rounded-lg">
                <h4 className="font-medium mb-2">Polynomials & Factoring</h4>
                <ul className="text-sm space-y-1">
                  <li>• Polynomials have multiple terms</li>
                  <li>• Factoring reverses multiplication</li>
                  <li>• Zero product property for solving</li>
                  <li>• GCF, difference of squares, trinomials</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-medium mb-3">Mixed Practice Problems</h3>
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg border">
                <p className="font-medium mb-2">1. Simplify: 3x + 2x - 5 + 7</p>
                <p className="text-sm text-gray-600">Combine like terms: 5x + 2</p>
              </div>

              <div className="bg-white p-4 rounded-lg border">
                <p className="font-medium mb-2">2. Solve: 2(x + 3) = 14</p>
                <p className="text-sm text-gray-600">Distribute: 2x + 6 = 14 → 2x = 8 → x = 4</p>
              </div>

              <div className="bg-white p-4 rounded-lg border">
                <p className="font-medium mb-2">3. Graph: f(x) = -x + 2</p>
                <p className="text-sm text-gray-600">Slope = -1, y-intercept = 2, line goes down from left to right</p>
              </div>

              <div className="bg-white p-4 rounded-lg border">
                <p className="font-medium mb-2">4. Factor: x² - 9</p>
                <p className="text-sm text-gray-600">Difference of squares: (x + 3)(x - 3)</p>
              </div>

              <div className="bg-white p-4 rounded-lg border">
                <p className="font-medium mb-2">5. Solve: x² - 5x + 6 = 0</p>
                <p className="text-sm text-gray-600">Factor: (x - 2)(x - 3) = 0 → x = 2 or x = 3</p>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-medium mb-3">Real-World Applications</h3>
            <div className="bg-yellow-50 p-4 rounded-lg">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-3 rounded">
                  <p className="font-medium mb-1">Business</p>
                  <p className="text-xs">Profit = Revenue - Cost<br/>Break-even analysis</p>
                </div>
                <div className="bg-white p-3 rounded">
                  <p className="font-medium mb-1">Physics</p>
                  <p className="text-xs">Distance = Rate × Time<br/>Force = Mass × Acceleration</p>
                </div>
                <div className="bg-white p-3 rounded">
                  <p className="font-medium mb-1">Finance</p>
                  <p className="text-xs">Compound interest formulas<br/>Loan payment calculations</p>
                </div>
                <div className="bg-white p-3 rounded">
                  <p className="font-medium mb-1">Engineering</p>
                  <p className="text-xs">Stress-strain relationships<br/>Circuit analysis</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
            <h4 className="font-medium mb-2">Ready for Geometry?</h4>
            <p className="text-sm mb-2">When you can confidently:</p>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Solve any linear equation</li>
              <li>Graph linear functions quickly</li>
              <li>Factor quadratic expressions</li>
              <li>Apply algebra to word problems</li>
            </ul>
            <p className="text-sm mt-2">You're ready to explore how algebra applies to shapes, measurements, and spatial relationships in Geometry!</p>
          </div>

          <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400 mt-4">
            <h4 className="font-medium mb-2">Mastery Checklist:</h4>
            <div className="grid grid-cols-2 gap-2">
              <div className="flex items-center space-x-2">
                <input type="checkbox" className="rounded" />
                <span className="text-sm">Evaluate expressions</span>
              </div>
              <div className="flex items-center space-x-2">
                <input type="checkbox" className="rounded" />
                <span className="text-sm">Solve equations</span>
              </div>
              <div className="flex items-center space-x-2">
                <input type="checkbox" className="rounded" />
                <span className="text-sm">Graph linear functions</span>
              </div>
              <div className="flex items-center space-x-2">
                <input type="checkbox" className="rounded" />
                <span className="text-sm">Factor polynomials</span>
              </div>
              <div className="flex items-center space-x-2">
                <input type="checkbox" className="rounded" />
                <span className="text-sm">Word problems</span>
              </div>
              <div className="flex items-center space-x-2">
                <input type="checkbox" className="rounded" />
                <span className="text-sm">Real-world applications</span>
              </div>
            </div>
          </div>
        </section>

        <PracticeQuiz topic="algebra" />
      </div>
    </main>
  )
}
