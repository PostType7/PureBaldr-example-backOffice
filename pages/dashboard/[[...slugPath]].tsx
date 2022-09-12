import { SidebarLayout } from "components/themes/PureBaldrTheme/layouts";
import { Card, Image, HStack, VStack} from "components/native/layout";
import { SectionHeader, TextCell, TextMD, TextSM } from "components/native/typo";
import { NavItem } from "components/native/navigation";

import { FiRotateCw } from "react-icons/fi";
import { DesktopMenu } from "pages/DesktopMenu";

export const Body: React.FC = () => 
  <>
    <SectionHeader title="General report dashboard" />
    <VStack>
      <Card
        horizontal={true}
        header={
          <HStack>
            <TextMD>To jest header</TextMD>
            <NavItem icon={<FiRotateCw />} text="Reload" />
          </HStack>
        }
      >
        <Image rounded="md"/>
        <TextCell title="to jestr znowu cos dziwnego" subTitle="yyy" />
        <TextSM>dwa i gitara siema</TextSM>
        <TextSM>trzy</TextSM>
      </Card>
      <HStack className="uppercase" padding="md">
        <TextMD width="full">full</TextMD>
        <TextMD width="full">full</TextMD>
        <TextMD width="third">trzy</TextMD>
        <TextMD width="twelfth">small</TextMD>
      </HStack>
      <Card horizontal={true}>
        <TextSM width="full">ewrewr</TextSM>
        <TextCell width="full" title="Nikon" subTitle="Photography" />
        <TextSM width="third">trzy 2r23r</TextSM>
        <TextSM width="twelfth">fit 23</TextSM>
      </Card>
      <Card horizontal={true}>
        <TextSM width="full">ewrewr</TextSM>
        <TextCell width="full" title="Nikon" subTitle="Photography" />
        <TextSM width="third">trzy 2r23r</TextSM>
        <TextSM width="twelfth">fit 23</TextSM>
      </Card>
    </VStack>
  </>
;

export const SideBar: React.FC = () => 
  <>
    <SectionHeader title="Transactions" />
    <VStack>
      <Card horizontal={true}>
        <Image/>
        <TextCell
          title="Santonio Gonderas"
          subTitle="22 June 2011"
          className="flex-1"
        />
        <TextSM color="success">+$204</TextSM>
      </Card>
      <Card horizontal={true}>
        <Image/>
        <TextCell title="Bard Bit" subTitle="22 June 2011" className="flex-1" />
        <TextSM color="error">-$104</TextSM>
      </Card>
    </VStack>
  </>
;

const Dashboard: React.FC = () => {
  return <SidebarLayout menu={<DesktopMenu />} body={<Body/>} sideBar={<SideBar/>} />;
};
/* #DisablePrerenderer */
// @ts-ignore
Dashboard.getInitialProps = () => ({});
export default Dashboard;
