import './globals.css';

// The [locale] layout renders <html>/<body> and owns all metadata.
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
