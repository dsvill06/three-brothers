'use client';





export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col min-h-screen mx-auto w-full">
      {children}
    </section>
  );
}
