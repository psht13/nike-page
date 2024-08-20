import "./globals.css";

export const metadata = {
  title: "Nike",
  description: "Nike landing webpage",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
