import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Layout from "../components/Layout";
import Publications from "../components/Publications";
import Categories from "../components/Categories";
import Search from "../components/Search";
import {
  getAllCategoriesAction,
  getAllPublicationsAction,
  searchPublicationsAction,
} from "../redux/actions";
import { RootState } from "../redux/store";
import { Category } from "../types";

export default function Home() {
  const dispatch = useDispatch();
  const { publications, categories } = useSelector((state: RootState) => state);

  useEffect(() => {
    dispatch(getAllPublicationsAction());
    dispatch(getAllCategoriesAction());
  }, [dispatch]);

  const handleCategoryClicked = (category: Category) => {
    dispatch(getAllPublicationsAction(publications.currentPage, category.key));
  };
  const handleOnPageChange = (selectedItem: { selected: number }) => {
    dispatch(
      getAllPublicationsAction(selectedItem.selected + 1, publications.filter),
    );
  };

  return (
    <Layout title="Publications">
      <Search
        searchFormSubmitted={(input) =>
          dispatch(searchPublicationsAction(input))
        }
      />
      <Categories
        categories={categories}
        onItemClicked={handleCategoryClicked}
        filter={publications.filter}
      />

      <Publications
        publications={publications}
        onPageChange={handleOnPageChange}
      />
    </Layout>
  );
}
