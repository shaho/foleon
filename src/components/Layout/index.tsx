import { Container } from "./styles";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps): JSX.Element {
  return <Container>{children}</Container>;
}
