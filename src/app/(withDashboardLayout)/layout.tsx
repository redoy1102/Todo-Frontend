export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <h3 className="text-primary text-center pt-2 underline">
        Dashboard Layout
      </h3>
      <div className="h-screen flex justify-center items-center flex-col">
        {children}
      </div>
    </div>
  );
}
