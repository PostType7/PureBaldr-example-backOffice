import { useEffect, useState } from "react";
import { getCookie } from "helpers/PT7-REST-Helper";

export interface authStateType {
  jwt: string | undefined;
  user: any;
}

const Main: React.FC = () => {
  const [authState, setAuthState] = useState<authStateType>({
    jwt: undefined,
    user: {},
  });
  useEffect(() => {
    setAuthState({ jwt: getCookie("jwt"), user: {} });
  }, [setAuthState]);
  return <>{authState?.jwt ? <div>jo</div> : <div>nie joi</div>}</>;
};
/* #DisablePrerenderer */
// @ts-ignore
Main.getInitialProps = () => ({});
export default Main;
