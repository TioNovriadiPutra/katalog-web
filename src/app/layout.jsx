import "./globals.css";
import RecoilContextProvider from "./recoil";
import CustomSideBar from "@/components/molecule/custom-sidebar";

export const metadata = {
  title: "API Katalog",
  description: "API Katalog BTN Service",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <RecoilContextProvider>
          <div className="root-container">
            <CustomSideBar />

            {children}
          </div>
        </RecoilContextProvider>
      </body>
    </html>
  );
}
