export default function Layout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <>
      좌측 디자인
      {children}
      {modal}
    </>
  );
}
