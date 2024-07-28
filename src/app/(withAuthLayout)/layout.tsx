export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <h3 className="text-primary text-center pt-2 underline">
        Authentication Related Pages Layout
      </h3>
      <div className="h-screen flex justify-center items-center flex-col">
        {children}
      </div>
    </div>
  );
}
