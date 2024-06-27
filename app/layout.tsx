import NavBar from "@/components/navbar";
import Provider from "@/components/provider";
import "@/styles/global.css";

export const metadata = {
  title: "AiPrompts",
  description: "Discover and share AI prompts",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Provider>
        <body className="bg-slate-100">
          <main>
            <NavBar />
            {children}
          </main>
        </body>
      </Provider>
    </html>
  );
}
