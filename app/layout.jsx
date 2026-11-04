import "./globals.css";

export const metadata = {
  title: "MLE Roadmap",
  description: "A lifelong roadmap to Machine Learning Engineer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
