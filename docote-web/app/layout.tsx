export const metadata = {
  title: 'DoCoTe Web',
  description: 'Web-first documentation intelligence for software teams.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: 'Inter, Arial, sans-serif', background: '#111318', color: '#f2f4f8' }}>
        {children}
      </body>
    </html>
  );
}
