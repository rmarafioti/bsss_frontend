import App_Wrapper from "./_components/App_Wrapper";

import "./globals.css";

export const metadata = {
  title: "Big Shoulders Sounds",
  description: "Frontend web app starter code",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <App_Wrapper>{children}</App_Wrapper>
      </body>
    </html>
  );
}
