import Spinner from "../Spinner";
import { PublicationsList } from "./styles";
import { PublicationStateType } from "../../types";

interface PublicationsProps {
  publications: PublicationStateType;
  onPageChange: (selectedItem: { selected: number }) => void;
}

export default function Publications({
  publications,
  onPageChange,
}: PublicationsProps): JSX.Element {
  return (
    <>
      <PublicationsList>
        {publications.loading && <Spinner />}

        {publications.list?.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </PublicationsList>
    </>
  );
}
