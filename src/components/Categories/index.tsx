import Spinner from "../Spinner";
import { Category, CategoryStateType } from "../../types/category";
import { Wrapper, Tag } from "./styles";

interface CategoryProps {
  categories: CategoryStateType;
  onItemClicked: (category: Category) => void;
  filter: string;
}

export default function Categories({
  categories,
  onItemClicked,
  filter,
}: CategoryProps): JSX.Element {
  return (
    <>
      <Wrapper>
        {categories.loading ? (
          <Spinner />
        ) : (
          <>
            <h4>Categories</h4>
            {categories.list.map((category) => (
              <Tag
                key={category.key}
                id={category.key}
                onClick={() => onItemClicked(category)}
                className={filter === category.key ? "active" : ""}
              >
                {category.name}
              </Tag>
            ))}
          </>
        )}
      </Wrapper>
    </>
  );
}
