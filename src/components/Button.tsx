type ButtonProps = {
  children: React.ReactNode;
  onClick: () => void;
  className?: string;
};

export default function Button({ children, onClick, className }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`text-4xl bg-gray-700 rounded-full w-16 h-16 flex items-center justify-center hover:bg-gray-500 active:bg-gray-900 ${className}`}
    >
      {children}
    </button>
  );
}
