export const metadata = {
  title: "Gubba Tag Staff Manager",
  description: "Manage staff list for Gubba Tag",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "system-ui, sans-serif", background: "#0f0f0f", color: "#eee" }}>
        {children}
      </body>
    </html>
  );
}
