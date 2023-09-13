type HistoryLogProps = {
  history: string[];
};

export default function HistoryLog({ history }: HistoryLogProps) {
  return (
    <section className="text-center p-8 hidden lg:block">
      <h1 className="text-4xl font-bold text-center mb-4">History</h1>
      {history.map((h) => (
        <p className="p-2 rounded hover:bg-gray-800">{h}</p>
      ))}
    </section>
  );
}
