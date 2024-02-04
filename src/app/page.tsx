"use client";
import { useState } from "react";
import TimerComponent from "@/components/countdown/countdown/TimerComponent";

const Home = () => {
  const [countdownDate, setCountdownDate] = useState<Date | null>(null);
  const [problemsList, setProblemsList] = useState<string>("TBA");
  const [hwNum, setHwNum] = useState<number>(4);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Update countdownDate and problemsList state here
  };

  return (
    <main className="">
      <div className="flex min-h-screen flex-col items-center pt-24">
        <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
          <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
            Welcome to write-up&nbsp;
            <code className="font-mono font-bold">HW {hwNum}</code>
          </p>
          <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
            <a
              className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
              href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              By GTI STAFF
            </a>
          </div>
        </div>

        <div className="p-10 font-mono">
          <p className="capitalize md:mt-4 -mb-20 font-semibold text-black text-2xl  md:text-5xl">
            Problems: <span className="font-bold">{problemsList}</span> +{" "}
            <span className="bg-amber-300 rounded-xl p-2">Bonus</span>
          </p>
        </div>
        {countdownDate && (
          <span className="mt-10 text-3xl">
             Until: {countdownDate.toLocaleTimeString()}
          </span>
        )}
        {countdownDate && (
          <div className="relative flex flex-col place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
            <TimerComponent countDownDate={countdownDate} />
          </div>
        )}
      </div>

      <form
        className="flex flex-col space-y-2 items-center mt-8"
        onSubmit={handleSubmit}
      >
        <label htmlFor="hw" className="text-lg font-semibold mb-2">
          Set HW Num
        </label>
        <input
          type="number"
          id="hw"
          name="hw"
          className="p-2 border border-gray-300 rounded-md"
          placeholder="Num"
          value={hwNum}
          onChange={(event) => setHwNum(parseInt(event.target.value))}
        />
        Set Countdown Date and Time:
        <label
          htmlFor="countdownDate"
          className="text-lg font-semibold mb-2"
        ></label>
        <input
          type="datetime-local"
          id="countdownDate"
          name="countdownDate"
          className="p-2 border border-gray-300 rounded-md mb-4"
          value={countdownDate ? countdownDate.toISOString().slice(0, -8) : ""}
          onChange={(event) => setCountdownDate(new Date(event.target.value))}
        />
        <label htmlFor="problemsList" className="text-lg font-semibold mb-2">
          Set Problems List:
        </label>
        <input
          type="text"
          id="problemsList"
          name="problemsList"
          className="p-2 border border-gray-300 rounded-md"
          placeholder="Enter comma-separated problems"
          value={problemsList}
          onChange={(event) => setProblemsList(event.target.value)}
        />
      </form>
    </main>
  );
};

export default Home;
