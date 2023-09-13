import { useState } from "react";
import Button from "./components/Button";
import { NUMBERS } from "./constants/numbers";
import { ARITHMETICS } from "./constants/arithmetics";
import Credits from "./components/Credits";
import HistoryLog from "./components/HistoryLog";

export default function App() {
  const [currentNumber, setCurrentNumber] = useState(0);
  const [currentArithmetic, setCurrentArithmetic] = useState<string | null>(
    null
  );
  const [previousNumber, setPreviousNumber] = useState(0);
  const [isEquated, setIsEquated] = useState(false);
  const [isDecimal, setIsDecimal] = useState(false);
  const [history, setHistory] = useState<string[]>([]);

  function onNumberClick(n: number) {
    if (currentNumber === 0 && !isDecimal) {
      setCurrentNumber(n);
    } else if (isEquated) {
      setPreviousNumber(currentNumber);
      setCurrentNumber(n);
      setIsEquated(false);
    } else if (isDecimal) {
      setCurrentNumber(parseFloat(`${currentNumber}.${n}`));
      setIsDecimal(false);
    } else {
      setCurrentNumber(parseFloat(`${currentNumber}${n}`));
    }
  }

  function onArithmeticClick(arithmetic: string) {
    if (currentNumber !== 0) {
      setPreviousNumber(currentNumber);
      setCurrentNumber(0);
    }
    setCurrentArithmetic(arithmetic);
    setIsEquated(false);
    equate();
  }

  function equate() {
    if (!isEquated) {
      if (currentArithmetic !== null) {
        setHistory([
          ...history,
          `${previousNumber} ${currentArithmetic} ${currentNumber}`,
        ]);
      }
      setCurrentNumber(
        eval(`${previousNumber} ${currentArithmetic} ${currentNumber}`)
      );
      // setCurrentArithmetic(null);
      setPreviousNumber(currentNumber);
      setIsEquated(true);
    }
  }

  function allClear() {
    setCurrentNumber(0);
    setCurrentArithmetic(null);
    setPreviousNumber(0);
  }

  function toggleSign() {
    setCurrentNumber(currentNumber * -1);
  }

  function percent() {
    setCurrentNumber(previousNumber * (currentNumber / 100));
  }

  return (
    <main className="grid grid-cols-5 w-full gap-8">
      <Credits />
      <section className="w-full md:w-96 p-8 border rounded-xl mx-auto my-8 col-span-5 md:col-span-3">
        <div className="text-6xl font-mono text-right truncate mt-16 mb-4">
          {currentNumber}
          {isDecimal && "."}
        </div>
        <div className="grid grid-cols-4 gap-4">
          <div className="grid grid-cols-3 gap-4 col-span-3">
            {/** TOP ROW START */}
            <Button onClick={allClear}>AC</Button>
            <Button onClick={toggleSign}>+/-</Button>
            <Button onClick={percent}>%</Button>
            {/** TOP ROW END */}
            <div className="grid grid-cols-3 gap-4 col-span-3">
              {NUMBERS.map((n) => (
                <Button
                  onClick={() => {
                    onNumberClick(n);
                  }}
                  className={n === 0 ? "col-span-2 w-full" : ""}
                >
                  {n}
                </Button>
              ))}
              <Button onClick={() => setIsDecimal(true)}>.</Button>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4">
            {ARITHMETICS.map((a) => (
              <Button
                onClick={() => {
                  onArithmeticClick(a.value);
                }}
                className={
                  a.value === currentArithmetic
                    ? "bg-yellow-500"
                    : "bg-yellow-900 hover:bg-yellow-700 active:bg-yellow-900"
                }
              >
                {a.display}
              </Button>
            ))}
            <Button
              onClick={equate}
              className="bg-yellow-900 hover:bg-yellow-700 active:bg-yellow-900"
            >
              =
            </Button>
          </div>
        </div>
      </section>
      <HistoryLog history={history} />
    </main>
  );
}
