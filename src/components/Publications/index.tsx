import ReactPaginate from "react-paginate";

import Card from "../Card";
import Spinner from "../Spinner";
import { PublicationsList, PaginationWrapper, SpinnerWrapper } from "./styles";
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
        {publications.loading ? (
          <SpinnerWrapper>
            <Spinner />
          </SpinnerWrapper>
        ) : (
          publications.list?.map((item) => (
            <li key={item.id}>
              <Card
                id={item.id}
                link={`/publication/${item.id}`}
                name={item.name}
                category={item.category}
              />
            </li>
          ))
        )}
      </PublicationsList>

      {publications && !publications.loading && publications.totalPages !== 0 && (
        <PaginationWrapper>
          <ReactPaginate
            nextLabel="next >"
            onPageChange={onPageChange}
            pageRangeDisplayed={3}
            marginPagesDisplayed={2}
            pageCount={Math.ceil(
              publications.totalPages / publications.pageCount,
            )}
            previousLabel="< previous"
            pageClassName="page-item"
            pageLinkClassName="page-link"
            previousClassName="page-item"
            previousLinkClassName="page-link"
            nextClassName="page-item"
            nextLinkClassName="page-link"
            breakLabel="..."
            breakClassName="page-item"
            breakLinkClassName="page-link"
            containerClassName="pagination"
            activeClassName="active"
          />
        </PaginationWrapper>
      )}
    </>
  );
}
