import Modal from "@/components/Modal";
import "./globals.css";

export const metadata = {
  title: "My-Trello",
  description: "This is made by Soma ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#F5F6F8]" suppressHydrationWarning={true}>
        {children}
        <Modal />
      </body>
    </html>
  );
}
