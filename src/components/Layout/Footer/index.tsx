import { AppFooter } from "./styles";

export default function Footer(): JSX.Element {
  return (
    <AppFooter>
      <p>© {new Date().getFullYear()} Foleon, All rights reserved</p>
    </AppFooter>
  );
}
