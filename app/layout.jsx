import Nav from "@/components/Nav";
import Provider from "@/components/Provider";
import "@/styles/global.css";

export const metadata = {
  title: "Promptpedia",
  description: "Discover & Share AI Prompts.",
};

function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
      </head> */}
      <body>
        <Provider>
          <div className="main">
            <div className="gradient" />
          </div>
          <div className="app">
            <Nav />
            {children}
          </div>
        </Provider>
      </body>
    </html>
  );
}

export default RootLayout;
