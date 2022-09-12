import { VStack } from "components/native/layout";
import { NavItem } from "components/native/navigation";

export const DesktopMenu: React.FC = () => {
  return <VStack>
    <NavItem color="light" text="Dashboard" href="/dashboard"/>
    <NavItem color="light" text="Users" href="/users"/>
  </VStack>;
};

