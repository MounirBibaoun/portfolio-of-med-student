export function SectionCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white p-6 rounded-3xl border border-pink-200 shadow-sm">
      <h3 className="text-xl font-bold text-pink-700">{title}</h3>
      <div className="mt-3 text-pink-600">{children}</div>
    </div>
  );
}
