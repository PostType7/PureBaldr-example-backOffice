import { FullLayout } from "components/themes/PureBaldrTheme/layouts";
import { Card, HStack, Image, VStack } from "components/native/layout";
import { SectionHeader, TextCell, TextSM } from "components/native/typo";

import { DesktopMenu } from "./../DesktopMenu";
import { useState, useEffect } from "react";
import Avatar from "components/themes/PureBaldrTheme/partials/Avatar";
// import { strapiLogin, useAuthStore } from "helpers/__strapiAuth";

export const SideBar: React.FC = () => (
  <>
    <SectionHeader title="Transactions" />
    <VStack>
      <Card horizontal={true}>
        <Image />
        <TextCell
          title="Santonio Gonderas"
          subTitle="22 June 2011"
          className="flex-1"
        />
        <TextSM color="success">+$204</TextSM>
      </Card>
      <Card horizontal={true}>
        <Image />
        <TextCell title="Bard Bit" subTitle="22 June 2011" className="flex-1" />
        <TextSM color="error">-$104</TextSM>
      </Card>
    </VStack>
  </>
);

export interface viewStateType {
  loading: boolean;
  data: [];
}

const Dashboard: React.FC = () => {
  const [viewState, setViewState] = useState<viewStateType>({
    loading: false,
    data: [],
  });

  useEffect(() => {
    // Argument of type '{ loading: true; }' is not assignable to parameter of type 'SetStateAction<viewStateType>'.
    // @ts-ignore
    setViewState({ loading: true });
    const user = `http://localhost:1337/api/profiles?populate=*`;
    fetch(user)
      .then((res) => res.json())
      .then((data) => {
        setViewState({ loading: false, data: data.data });
      })
      .catch((err) => {
        // todo: try understand this??
        console.log(typeof err, JSON.stringify(err), err);
        // if 'err' log text, and type is object and convert to string return '{}' then
        // probably you have conection problem :)
      });
  }, [setViewState]);

  const register = () => {
    var payload: any = {
      username: "Kapman",
      email: "test@test.com",
      password: "Password",
    };

    //  var data = new FormData();
    //  data.append( "json", JSON.stringify( payload ) );

    fetch("http://localhost:1337/api/auth/local/register", {
      method: "POST",
      mode: "cors",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify({
        name: "miecio2",
        password: "miecio2@gmail.com",
        email: "miecio2@gmail.com",
        username: "miecio2",
      }),
      cache: "default",
    }).then(function (res) {
      console.log("success", res.json());
    });
  };
  // @ts-ignore
  // const bears = useAuthStore((state) => state.jwt);
  // @ts-ignore
  // const setBears = useAuthStore((state) => state.setJwt);

  return (
    <FullLayout
      menu={<DesktopMenu />}
      body={
        <>

          <button className="p-4 border m-4" onClick={register}>
            register
          </button>
          <SectionHeader title="Transactions" />
          <HStack justify="start">
            {viewState?.data?.length > 0 ? (
              // todo: add types when API was done
              viewState.data.map((el: any, i: number) => {
                return (
                  <Card key={i} width="third">
                    <Avatar
                      size="lg"
                      nick={el.attributes.nick}
                      url={`http://localhost:1337${el.attributes.avatar.data.attributes.url}`}
                    />
                  </Card>
                );
              })
            ) : (
              <div>No data</div>
            )}
          </HStack>
        </>
      }
    />
  );
};
/* #DisablePrerenderer */
// @ts-ignore
Dashboard.getInitialProps = () => ({});
export default Dashboard;
