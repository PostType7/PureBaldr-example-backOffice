import { AuthRedirect, Logout } from "components/themes/PureBaldrTheme/layouts";
import type { NextComponentType } from "next";
import type { AppContext, AppInitialProps, AppLayoutProps } from "next/app";
import { FiCircle } from "react-icons/fi";

import "styles/index.css";
const App: NextComponentType<AppContext, AppInitialProps, AppLayoutProps> = (
  props: AppLayoutProps
) => {
  const { Component, pageProps } = props;
  return (
    <AuthRedirect unauthorizeRedirect="/login" emptyPathRedirect="/dashboard">
      <div className="border-b flex items-center justify-between shadow-lg gap-3 py-3 p-6">
        <FiCircle/>
        <Logout/>
      </div>
      <Component {...pageProps} />
    </AuthRedirect>
  );
};

export default App;
