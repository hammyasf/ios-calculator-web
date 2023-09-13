import { FiHeart } from "react-icons/fi";

export default function Credits() {
  return (
    <section className="p-8 text-center hidden lg:block">
      <h1 className="text-4xl font-bold text-center">Calculator</h1>
      <p className="flex items-center gap-2 justify-center mt-2">
        Made with
        <span className="text-rose-500">
          <FiHeart />
        </span>
        By
        <a className="italic text-blue-500">RadEgg</a>
      </p>
      <p className="mt-2">
        <span className="font-bold">Time Taken:</span> ~1 Hour
      </p>
      <p className="mt-2 flex flex-col gap-4">
        <span className="font-bold">Technologies Used:</span>
        <a
          className="hover:underline"
          href="https://react.dev/"
          target="_blank"
        >
          React
        </a>
        <a
          className="hover:underline"
          href="https://vitejs.dev/"
          target="_blank"
        >
          Vite
        </a>
        <a
          className="hover:underline"
          href="https://tailwindcss.com/"
          target="_blank"
        >
          TailwindCSS
        </a>
        <a
          className="hover:underline"
          href="https://react-icons.github.io/react-icons"
          target="_blank"
        >
          React Icons
        </a>
      </p>
    </section>
  );
}
