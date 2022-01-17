import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Layout from "../components/Layout";
import Publications from "../components/Publications";
// import Categories from "../components/Categories";

import {
  // getAllCategoriesAction,
  getAllPublicationsAction,
  // searchPublicationsAction,
} from "../redux/actions";
import { RootState } from "../redux/store";
import { Category } from "../types";
// import Search from "../components/Search";

export default function Home() {
  const dispatch = useDispatch();
  const { publications } = useSelector((state: RootState) => state);

  useEffect(() => {
    dispatch(getAllPublicationsAction());
    // dispatch(getAllCategoriesAction());
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
    <div>
      <Layout title="Publications">
        <Publications
          publications={publications}
          onPageChange={handleOnPageChange}
        />
      </Layout>
    </div>
  );
}
