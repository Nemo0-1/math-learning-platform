import PracticeQuiz from '../components/PracticeQuiz'
import TopicNavigation from '../components/TopicNavigation'

export default function Arithmetic() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-4xl font-bold mb-8">Arithmetic</h1>
      <TopicNavigation nextUrl="/algebra" nextLabel="Algebra" />
      <div className="max-w-4xl w-full space-y-10">
        <section className="rounded-3xl border border-gray-200 bg-gray-50 p-8 shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">Step 1: Understand Numbers</h2>
          <p className="text-gray-700 mb-4">
            Numbers are the foundation of all mathematics. We'll start by understanding how numbers work, from basic counting to large numbers and place value. This step builds your number sense - the ability to understand, compare, and manipulate numbers intuitively.
          </p>

          <div className="mb-6">
            <h3 className="text-lg font-medium mb-3">Place Value System</h3>
            <p className="text-gray-700 mb-3">
              Every digit in a number has a specific value based on its position. This is called the place value system, also known as the base-10 system.
            </p>
            <div className="bg-white p-4 rounded-lg border mb-4">
              <p className="font-medium mb-2">Example: 2,847</p>
              <div className="grid grid-cols-4 gap-2 text-center">
                <div className="border rounded p-2">
                  <div className="text-2xl font-bold">2</div>
                  <div className="text-sm text-gray-600">Thousands</div>
                  <div className="text-xs">2 × 1,000 = 2,000</div>
                </div>
                <div className="border rounded p-2">
                  <div className="text-2xl font-bold">8</div>
                  <div className="text-sm text-gray-600">Hundreds</div>
                  <div className="text-xs">8 × 100 = 800</div>
                </div>
                <div className="border rounded p-2">
                  <div className="text-2xl font-bold">4</div>
                  <div className="text-sm text-gray-600">Tens</div>
                  <div className="text-xs">4 × 10 = 40</div>
                </div>
                <div className="border rounded p-2">
                  <div className="text-2xl font-bold">7</div>
                  <div className="text-sm text-gray-600">Ones</div>
                  <div className="text-xs">7 × 1 = 7</div>
                </div>
              </div>
              <p className="mt-2 text-sm">Total: 2,000 + 800 + 40 + 7 = 2,847</p>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-medium mb-3">Reading and Writing Large Numbers</h3>
            <p className="text-gray-700 mb-3">
              Practice reading numbers aloud and writing them in expanded form to understand their structure.
            </p>
            <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
              <p className="font-medium mb-2">Practice Examples:</p>
              <ul className="space-y-2">
                <li><strong>156,789:</strong> One hundred fifty-six thousand, seven hundred eighty-nine</li>
                <li><strong>Expanded form:</strong> 100,000 + 50,000 + 6,000 + 700 + 80 + 9</li>
                <li><strong>Word form:</strong> One hundred fifty-six thousand seven hundred eighty-nine</li>
              </ul>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-medium mb-3">Comparing Numbers</h3>
            <p className="text-gray-700 mb-3">
              Use place value to compare numbers. Start from the leftmost digit and work right.
            </p>
            <div className="bg-green-50 p-4 rounded-lg">
              <p className="font-medium mb-2">Comparison Rules:</p>
              <ol className="list-decimal pl-5 space-y-1">
                <li>Compare digits from left to right (highest place value first)</li>
                <li>The first different digit determines which number is larger</li>
                <li>If all digits are the same, the numbers are equal</li>
              </ol>
              <div className="mt-3 grid grid-cols-2 gap-4">
                <div className="bg-white p-3 rounded">
                  <p className="font-medium">2,847 vs 2,938</p>
                  <p className="text-sm">Hundreds place: 8 vs 9 → 2,938 is larger</p>
                </div>
                <div className="bg-white p-3 rounded">
                  <p className="font-medium">1,256 vs 1,265</p>
                  <p className="text-sm">Tens place: 5 vs 6 → 1,265 is larger</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-medium mb-3">Rounding Numbers</h3>
            <p className="text-gray-700 mb-3">
              Rounding makes numbers easier to work with by approximating them to a certain place value.
            </p>
            <div className="bg-yellow-50 p-4 rounded-lg">
              <p className="font-medium mb-2">Rounding Rule:</p>
              <p className="mb-3">Look at the digit to the right of the place you're rounding to. If it's 5 or greater, round up. If it's less than 5, round down.</p>
              <div className="grid grid-cols-3 gap-3">
                <div className="bg-white p-3 rounded text-center">
                  <p className="font-medium">Round 247 to nearest ten</p>
                  <p className="text-sm">Look at units digit: 7 ≥ 5, so round up</p>
                  <p className="text-lg font-bold text-green-600">250</p>
                </div>
                <div className="bg-white p-3 rounded text-center">
                  <p className="font-medium">Round 1,563 to nearest hundred</p>
                  <p className="text-sm">Look at tens digit: 6 ≥ 5, so round up</p>
                  <p className="text-lg font-bold text-green-600">1,600</p>
                </div>
                <div className="bg-white p-3 rounded text-center">
                  <p className="font-medium">Round 8,942 to nearest thousand</p>
                  <p className="text-sm">Look at hundreds digit: 9 ≥ 5, so round up</p>
                  <p className="text-lg font-bold text-green-600">9,000</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
            <h4 className="font-medium mb-2">Common Mistakes to Avoid:</h4>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Don't compare numbers digit by digit from right to left</li>
              <li>Remember that rounding 5 always rounds up (not down)</li>
              <li>Don't forget to add zeros when writing numbers in expanded form</li>
            </ul>
          </div>
        </section>

        <section className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">Step 2: Master Operations</h2>
          <p className="text-gray-700 mb-4">
            Now that you understand numbers, let's learn how to combine them using the four basic operations: addition, subtraction, multiplication, and division. We'll focus on multi-digit numbers and build computational fluency.
          </p>

          <div className="mb-6">
            <h3 className="text-lg font-medium mb-3">Addition: Combining Numbers</h3>
            <p className="text-gray-700 mb-3">
              Addition combines two or more numbers to find their total. Use place value to add digits in the same place, carrying over when needed.
            </p>
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="font-medium mb-2">Example: 247 + 189</p>
              <div className="font-mono text-center bg-white p-3 rounded border mb-2">
                <div className="text-right">
                  <div>  247</div>
                  <div>+ 189</div>
                  <div className="border-t border-gray-400 mt-1 pt-1">  436</div>
                </div>
              </div>
              <p className="text-sm mb-2">Step-by-step:</p>
              <ol className="list-decimal pl-5 text-sm space-y-1">
                <li>Add ones: 7 + 9 = 16, write 6, carry 1</li>
                <li>Add tens: 4 + 8 + 1 = 13, write 3, carry 1</li>
                <li>Add hundreds: 2 + 1 + 1 = 4, write 4</li>
              </ol>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-medium mb-3">Subtraction: Finding the Difference</h3>
            <p className="text-gray-700 mb-3">
              Subtraction finds how much one number is less than another. Borrow from the next place value when needed.
            </p>
            <div className="bg-green-50 p-4 rounded-lg">
              <p className="font-medium mb-2">Example: 543 - 278</p>
              <div className="font-mono text-center bg-white p-3 rounded border mb-2">
                <div className="text-right">
                  <div>  543</div>
                  <div>- 278</div>
                  <div className="border-t border-gray-400 mt-1 pt-1">  265</div>
                </div>
              </div>
              <p className="text-sm mb-2">Step-by-step:</p>
              <ol className="list-decimal pl-5 text-sm space-y-1">
                <li>Ones: 3 - 8, borrow 1 from tens (3 becomes 13), 13 - 8 = 5</li>
                <li>Tens: 3 (now 2) - 7, borrow 1 from hundreds (2 becomes 12), 12 - 7 = 5</li>
                <li>Hundreds: 4 (now 3) - 2 = 1, plus the borrowed 1 = 2</li>
              </ol>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-medium mb-3">Multiplication: Repeated Addition</h3>
            <p className="text-gray-700 mb-3">
              Multiplication is repeated addition. We'll start with one-digit multipliers, then move to two-digit multipliers.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="bg-purple-50 p-4 rounded-lg">
                <p className="font-medium mb-2">One-digit: 24 × 3</p>
                <div className="font-mono text-center bg-white p-2 rounded border mb-2">
                  <div className="text-right">
                    <div>  24</div>
                    <div>×  3</div>
                    <div className="border-t border-gray-400 mt-1 pt-1">  72</div>
                  </div>
                </div>
                <p className="text-xs">24 × 3 = 24 + 24 + 24 = 72</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <p className="font-medium mb-2">Two-digit: 24 × 13</p>
                <div className="font-mono text-center bg-white p-2 rounded border mb-2">
                  <div className="text-right">
                    <div>  24</div>
                    <div>× 13</div>
                    <div className="border-t border-gray-400 mt-1 pt-1">
                      <div>  72</div>
                      <div> 240</div>
                      <div className="border-t border-gray-400 mt-1"> 312</div>
                    </div>
                  </div>
                </div>
                <p className="text-xs">24 × 3 = 72, 24 × 10 = 240, total 312</p>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-medium mb-3">Division: Splitting into Equal Groups</h3>
            <p className="text-gray-700 mb-3">
              Division splits a number into equal parts. The quotient tells us how many times one number fits into another, and the remainder is what's left over.
            </p>
            <div className="bg-orange-50 p-4 rounded-lg">
              <p className="font-medium mb-2">Example: 47 ÷ 3</p>
              <div className="font-mono text-center bg-white p-3 rounded border mb-2">
                <div className="text-right">
                  <div>3 ) 47</div>
                  <div className="ml-4">15 r 2</div>
                </div>
              </div>
              <p className="text-sm mb-2">Step-by-step:</p>
              <ol className="list-decimal pl-5 text-sm space-y-1">
                <li>How many 3's in 4? 1 time (3), subtract: 4-3=1</li>
                <li>Bring down 7: 17</li>
                <li>How many 3's in 17? 5 times (15), subtract: 17-15=2</li>
                <li>Quotient: 15, Remainder: 2</li>
              </ol>
              <p className="text-xs mt-2">Check: 15 × 3 + 2 = 45 + 2 = 47 ✓</p>
            </div>
          </div>

          <div className="bg-yellow-50 p-4 rounded-lg">
            <h4 className="font-medium mb-2">Mental Math Strategies:</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Addition:</strong> Round and adjust (47 + 38 = 50 + 35 = 85, then subtract 3)</li>
              <li><strong>Subtraction:</strong> Add to the subtrahend (43 - 17 = 43 - 20 + 3 = 26)</li>
              <li><strong>Multiplication:</strong> Break into friendly numbers (8 × 7 = 8 × (10-3) = 80-24 = 56)</li>
              <li><strong>Division:</strong> Use multiplication facts (42 ÷ 7 = ? × 7 = 42, so 6)</li>
            </ul>
          </div>

          <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400 mt-4">
            <h4 className="font-medium mb-2">Common Mistakes to Avoid:</h4>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Forget to carry over in addition when sum ≥ 10</li>
              <li>Borrow incorrectly in subtraction (remember to reduce the digit you're borrowing from)</li>
              <li>Misalign digits when multiplying multi-digit numbers</li>
              <li>Forget the remainder in division problems</li>
            </ul>
          </div>
        </section>

        <section className="rounded-3xl border border-gray-200 bg-gray-50 p-8 shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">Step 3: Order of Operations</h2>
          <p className="text-gray-700 mb-4">
            Mathematical expressions can contain multiple operations. The order of operations (PEMDAS/BODMAS) tells us which operations to perform first to get the correct answer every time.
          </p>

          <div className="mb-6">
            <h3 className="text-lg font-medium mb-3">The Order of Operations Rule</h3>
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="font-medium mb-3 text-center text-lg">PEMDAS</p>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="font-medium text-blue-800">P - Parentheses</p>
                  <p className="text-sm">First priority: solve expressions inside parentheses</p>
                </div>
                <div>
                  <p className="font-medium text-blue-800">E - Exponents</p>
                  <p className="text-sm">Second: powers and roots</p>
                </div>
                <div>
                  <p className="font-medium text-blue-800">M - Multiplication</p>
                  <p className="text-sm">Third: multiply and divide (left to right)</p>
                </div>
                <div>
                  <p className="font-medium text-blue-800">D - Division</p>
                  <p className="text-sm">Third: multiply and divide (left to right)</p>
                </div>
                <div>
                  <p className="font-medium text-blue-800">A - Addition</p>
                  <p className="text-sm">Fourth: add and subtract (left to right)</p>
                </div>
                <div>
                  <p className="font-medium text-blue-800">S - Subtraction</p>
                  <p className="text-sm">Fourth: add and subtract (left to right)</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-medium mb-3">Worked Examples</h3>
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg border">
                <p className="font-medium mb-2">Example 1: 8 × (3 + 5) − 12 ÷ 4</p>
                <div className="space-y-2 text-sm">
                  <p><strong>Step 1 (Parentheses):</strong> 8 × (8) − 12 ÷ 4</p>
                  <p><strong>Step 2 (Multiplication/Division L→R):</strong> 64 − 3</p>
                  <p><strong>Step 3 (Subtraction):</strong> 61</p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg border">
                <p className="font-medium mb-2">Example 2: 2³ + 4 × (6 − 2) ÷ 2</p>
                <div className="space-y-2 text-sm">
                  <p><strong>Step 1 (Parentheses):</strong> 2³ + 4 × 4 ÷ 2</p>
                  <p><strong>Step 2 (Exponents):</strong> 8 + 4 × 4 ÷ 2</p>
                  <p><strong>Step 3 (Multiplication/Division L→R):</strong> 8 + 16 ÷ 2</p>
                  <p><strong>Step 4 (Multiplication/Division L→R):</strong> 8 + 8</p>
                  <p><strong>Step 5 (Addition):</strong> 16</p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg border">
                <p className="font-medium mb-2">Example 3: 15 − 3 × 2 + (8 ÷ 4)</p>
                <div className="space-y-2 text-sm">
                  <p><strong>Step 1 (Parentheses):</strong> 15 − 3 × 2 + 2</p>
                  <p><strong>Step 2 (Multiplication):</strong> 15 − 6 + 2</p>
                  <p><strong>Step 3 (Addition/Subtraction L→R):</strong> 9 + 2</p>
                  <p><strong>Step 4 (Addition):</strong> 11</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-medium mb-3">Practice Problems</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-green-50 p-3 rounded-lg">
                <p className="font-medium mb-1">Solve: 5 + 3 × (8 − 2)</p>
                <p className="text-sm text-gray-600">Answer: 5 + 3 × 6 = 5 + 18 = 23</p>
              </div>
              <div className="bg-green-50 p-3 rounded-lg">
                <p className="font-medium mb-1">Solve: 24 ÷ (6 − 2) × 3</p>
                <p className="text-sm text-gray-600">Answer: 24 ÷ 4 × 3 = 6 × 3 = 18</p>
              </div>
              <div className="bg-green-50 p-3 rounded-lg">
                <p className="font-medium mb-1">Solve: 2² + 4 × 3 − 1</p>
                <p className="text-sm text-gray-600">Answer: 4 + 12 − 1 = 15</p>
              </div>
              <div className="bg-green-50 p-3 rounded-lg">
                <p className="font-medium mb-1">Solve: (9 + 3) ÷ (4 − 1) × 2</p>
                <p className="text-sm text-gray-600">Answer: 12 ÷ 3 × 2 = 4 × 2 = 8</p>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 p-4 rounded-lg">
            <h4 className="font-medium mb-2">Why Order Matters:</h4>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-3 rounded">
                <p className="font-medium mb-1">Without order: 2 + 3 × 4</p>
                <p className="text-sm">2 + 3 = 5, then 5 × 4 = 20</p>
              </div>
              <div className="bg-white p-3 rounded border-2 border-green-400">
                <p className="font-medium mb-1">With PEMDAS: 2 + 3 × 4</p>
                <p className="text-sm">3 × 4 = 12, then 2 + 12 = 14</p>
              </div>
            </div>
            <p className="text-sm mt-2">Different answers! PEMDAS ensures everyone gets the same correct result.</p>
          </div>

          <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400 mt-4">
            <h4 className="font-medium mb-2">Common Mistakes to Avoid:</h4>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Doing addition/subtraction before multiplication/division</li>
              <li>Forgetting to solve parentheses first</li>
              <li>Mixing up the order when both multiplication and division are present</li>
              <li>Ignoring exponents or treating them like multiplication</li>
            </ul>
          </div>
        </section>

        <section className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">Step 4: Fractions, Decimals, and Percents</h2>
          <p className="text-gray-700 mb-4">
            Fractions, decimals, and percents are three different ways to represent parts of a whole. Learning to convert between them and perform operations will give you powerful tools for real-world problem solving.
          </p>

          <div className="mb-6">
            <h3 className="text-lg font-medium mb-3">Understanding Fractions</h3>
            <p className="text-gray-700 mb-3">
              A fraction shows parts of a whole. The top number (numerator) tells how many parts we have, and the bottom number (denominator) tells how many equal parts the whole is divided into.
            </p>
            <div className="bg-blue-50 p-4 rounded-lg">
              <div className="grid grid-cols-3 gap-4 mb-4">
                <div className="bg-white p-3 rounded text-center">
                  <div className="text-2xl mb-2">🍕</div>
                  <p className="font-medium">3/4</p>
                  <p className="text-sm">3 out of 4 equal pieces</p>
                </div>
                <div className="bg-white p-3 rounded text-center">
                  <div className="text-2xl mb-2">📊</div>
                  <p className="font-medium">2/5</p>
                  <p className="text-sm">2 out of 5 equal bars</p>
                </div>
                <div className="bg-white p-3 rounded text-center">
                  <div className="text-2xl mb-2">🎂</div>
                  <p className="font-medium">1/2</p>
                  <p className="text-sm">1 out of 2 equal halves</p>
                </div>
              </div>
              <p className="text-sm">Visual models help us understand fractions before working with numbers.</p>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-medium mb-3">Converting Between Forms</h3>
            <div className="grid grid-cols-3 gap-4 mb-4">
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-medium mb-2">Fraction → Decimal</h4>
                <p className="text-sm mb-2">Divide numerator by denominator</p>
                <div className="bg-white p-2 rounded text-center">
                  <p className="font-medium">3/4 = 0.75</p>
                  <p className="text-xs">3 ÷ 4 = 0.75</p>
                </div>
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg">
                <h4 className="font-medium mb-2">Decimal → Percent</h4>
                <p className="text-sm mb-2">Multiply by 100, add %</p>
                <div className="bg-white p-2 rounded text-center">
                  <p className="font-medium">0.75 = 75%</p>
                  <p className="text-xs">0.75 × 100 = 75%</p>
                </div>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <h4 className="font-medium mb-2">Percent → Fraction</h4>
                <p className="text-sm mb-2">Write as fraction over 100, simplify</p>
                <div className="bg-white p-2 rounded text-center">
                  <p className="font-medium">75% = 3/4</p>
                  <p className="text-xs">75/100 = 3/4</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-medium mb-3">Adding and Subtracting Fractions</h3>
            <p className="text-gray-700 mb-3">
              To add or subtract fractions, they need the same denominator (common denominator). For unlike denominators, find the least common multiple (LCM).
            </p>
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg border">
                <p className="font-medium mb-2">Same Denominator: 1/4 + 2/4</p>
                <div className="text-sm space-y-1">
                  <p>Add numerators: 1 + 2 = 3</p>
                  <p>Keep denominator: 4</p>
                  <p className="font-medium text-green-600">Answer: 3/4</p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg border">
                <p className="font-medium mb-2">Different Denominators: 1/4 + 1/6</p>
                <div className="text-sm space-y-1">
                  <p>Find LCM of 4 and 6: 12</p>
                  <p>Convert: 1/4 = 3/12, 1/6 = 2/12</p>
                  <p>Add: 3/12 + 2/12 = 5/12</p>
                  <p className="font-medium text-green-600">Answer: 5/12</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-medium mb-3">Real-World Applications</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-orange-50 p-3 rounded-lg">
                <p className="font-medium mb-1">Shopping: 25% off</p>
                <p className="text-sm">25% = 1/4, so pay 3/4 of the price</p>
              </div>
              <div className="bg-orange-50 p-3 rounded-lg">
                <p className="font-medium mb-1">Recipe: Double recipe</p>
                <p className="text-sm">1/2 cup → 1 cup (multiply by 2)</p>
              </div>
              <div className="bg-orange-50 p-3 rounded-lg">
                <p className="font-medium mb-1">Sports: Batting average</p>
                <p className="text-sm">Hits ÷ At-bats = fraction</p>
              </div>
              <div className="bg-orange-50 p-3 rounded-lg">
                <p className="font-medium mb-1">Measurement: 3/4 inch</p>
                <p className="text-sm">Precise measurements use fractions</p>
              </div>
            </div>
          </div>

          <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
            <h4 className="font-medium mb-2">Common Mistakes to Avoid:</h4>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Adding numerators and denominators separately (only add numerators)</li>
              <li>Forgetting to find a common denominator for unlike fractions</li>
              <li>Not simplifying fractions after operations</li>
              <li>Converting percents incorrectly (75% = 0.75, not 75.0)</li>
            </ul>
          </div>
        </section>

        <section className="rounded-3xl border border-gray-200 bg-gray-50 p-8 shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">Step 5: Apply to Word Problems</h2>
          <p className="text-gray-700 mb-4">
            Word problems connect mathematics to real life. The key is to read carefully, identify what you're solving for, choose the right operation, and check your answer.
          </p>

          <div className="mb-6">
            <h3 className="text-lg font-medium mb-3">Problem-Solving Strategy</h3>
            <div className="bg-blue-50 p-4 rounded-lg">
              <div className="grid grid-cols-4 gap-2 mb-3">
                <div className="bg-white p-2 rounded text-center">
                  <div className="font-medium text-blue-800">1</div>
                  <div className="text-xs">Read & Understand</div>
                </div>
                <div className="bg-white p-2 rounded text-center">
                  <div className="font-medium text-blue-800">2</div>
                  <div className="text-xs">Plan the Solution</div>
                </div>
                <div className="bg-white p-2 rounded text-center">
                  <div className="font-medium text-blue-800">3</div>
                  <div className="text-xs">Solve & Calculate</div>
                </div>
                <div className="bg-white p-2 rounded text-center">
                  <div className="font-medium text-blue-800">4</div>
                  <div className="text-xs">Check Your Answer</div>
                </div>
              </div>
              <p className="text-sm">Follow these steps for every word problem to avoid mistakes.</p>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-medium mb-3">Addition Word Problems</h3>
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg border">
                <p className="font-medium mb-2">Sarah has 24 stickers. Her friend gives her 18 more. How many stickers does she have now?</p>
                <div className="text-sm space-y-1">
                  <p><strong>Understand:</strong> Sarah starts with 24 and gets 18 more</p>
                  <p><strong>Operation:</strong> Addition (combining amounts)</p>
                  <p><strong>Solution:</strong> 24 + 18 = 42</p>
                  <p><strong>Check:</strong> 42 - 18 = 24 ✓</p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg border">
                <p className="font-medium mb-2">A store sold 156 books on Monday and 89 on Tuesday. How many books total?</p>
                <div className="text-sm space-y-1">
                  <p><strong>Understand:</strong> Two days of sales need to be combined</p>
                  <p><strong>Operation:</strong> Addition</p>
                  <p><strong>Solution:</strong> 156 + 89 = 245</p>
                  <p><strong>Check:</strong> 245 - 156 = 89 ✓</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-medium mb-3">Subtraction Word Problems</h3>
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg border">
                <p className="font-medium mb-2">Tom has 47 marbles. He gives 23 to his sister. How many does he have left?</p>
                <div className="text-sm space-y-1">
                  <p><strong>Understand:</strong> Starting amount minus amount given away</p>
                  <p><strong>Operation:</strong> Subtraction</p>
                  <p><strong>Solution:</strong> 47 - 23 = 24</p>
                  <p><strong>Check:</strong> 24 + 23 = 47 ✓</p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg border">
                <p className="font-medium mb-2">The temperature was 85°F. It dropped 12°F. What is the new temperature?</p>
                <div className="text-sm space-y-1">
                  <p><strong>Understand:</strong> Original temperature minus the drop</p>
                  <p><strong>Operation:</strong> Subtraction</p>
                  <p><strong>Solution:</strong> 85 - 12 = 73°F</p>
                  <p><strong>Check:</strong> 73 + 12 = 85 ✓</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-medium mb-3">Multiplication Word Problems</h3>
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg border">
                <p className="font-medium mb-2">Each box holds 24 pencils. How many pencils are in 5 boxes?</p>
                <div className="text-sm space-y-1">
                  <p><strong>Understand:</strong> Equal groups of the same size</p>
                  <p><strong>Operation:</strong> Multiplication (24 × 5)</p>
                  <p><strong>Solution:</strong> 24 × 5 = 120 pencils</p>
                  <p><strong>Check:</strong> 120 ÷ 24 = 5 ✓</p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg border">
                <p className="font-medium mb-2">A movie ticket costs $12. How much for 3 tickets?</p>
                <div className="text-sm space-y-1">
                  <p><strong>Understand:</strong> Cost per ticket times number of tickets</p>
                  <p><strong>Operation:</strong> Multiplication</p>
                  <p><strong>Solution:</strong> 12 × 3 = $36</p>
                  <p><strong>Check:</strong> 36 ÷ 12 = 3 ✓</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-medium mb-3">Division Word Problems</h3>
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg border">
                <p className="font-medium mb-2">48 cookies need to be shared equally among 6 friends. How many each?</p>
                <div className="text-sm space-y-1">
                  <p><strong>Understand:</strong> Total divided equally into groups</p>
                  <p><strong>Operation:</strong> Division (48 ÷ 6)</p>
                  <p><strong>Solution:</strong> 48 ÷ 6 = 8 cookies each</p>
                  <p><strong>Check:</strong> 8 × 6 = 48 ✓</p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg border">
                <p className="font-medium mb-2">A rope 60 feet long is cut into 5 equal pieces. How long is each piece?</p>
                <div className="text-sm space-y-1">
                  <p><strong>Understand:</strong> Total length divided into equal parts</p>
                  <p><strong>Operation:</strong> Division</p>
                  <p><strong>Solution:</strong> 60 ÷ 5 = 12 feet each</p>
                  <p><strong>Check:</strong> 12 × 5 = 60 ✓</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 p-4 rounded-lg">
            <h4 className="font-medium mb-2">Key Words for Operations:</h4>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-3 rounded">
                <p className="font-medium text-green-800 mb-1">Addition</p>
                <p className="text-xs">total, sum, altogether, combined, plus, more than</p>
              </div>
              <div className="bg-white p-3 rounded">
                <p className="font-medium text-red-800 mb-1">Subtraction</p>
                <p className="text-xs">difference, left, remaining, less than, minus</p>
              </div>
              <div className="bg-white p-3 rounded">
                <p className="font-medium text-purple-800 mb-1">Multiplication</p>
                <p className="text-xs">times, each, groups of, product, multiplied by</p>
              </div>
              <div className="bg-white p-3 rounded">
                <p className="font-medium text-orange-800 mb-1">Division</p>
                <p className="text-xs">each, per, divided by, quotient, shared equally</p>
              </div>
            </div>
          </div>

          <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400 mt-4">
            <h4 className="font-medium mb-2">Common Mistakes to Avoid:</h4>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Rushing to calculate without understanding the problem</li>
              <li>Choosing the wrong operation based on key words</li>
              <li>Forgetting to check your answer with the reverse operation</li>
              <li>Misreading the question (what is being asked for)</li>
            </ul>
          </div>
        </section>

        <PracticeQuiz topic="arithmetic" />
      </div>
    </main>
  )
}
