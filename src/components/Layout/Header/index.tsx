import { TopHeader } from "./styles";

interface HeaderProps {
  title: string;
}

export default function Header({ title }: HeaderProps): JSX.Element {
  return (
    <TopHeader>
      <h2>{title}</h2>
    </TopHeader>
  );
}
