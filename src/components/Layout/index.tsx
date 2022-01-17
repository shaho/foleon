import Header from "./Header";
import Footer from "./Footer";

import { Container } from "./styles";

type LayoutProps = {
  children: React.ReactNode;
  title: string;
};

export default function Layout({ children, title }: LayoutProps): JSX.Element {
  return (
    <Container>
      <Header title={title} />
      {children}
      <Footer />
    </Container>
  );
}
