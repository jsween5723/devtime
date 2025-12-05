export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <header>
        <nav>상단바</nav>
      </header>
      {children}
    </html>
  );
}
