import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

import Layout from "../components/Layout";
import { getOnePublicationAction } from "../redux/actions";
import { RootState } from "../redux/store";

export default function Detail() {
  let params = useParams<{ publicationID: string }>();
  const dispatch = useDispatch();
  const {
    publications: { selectedItem },
  } = useSelector((state: RootState) => state);

  useEffect(() => {
    params.publicationID &&
      dispatch(getOnePublicationAction(params.publicationID));
  }, [dispatch, params]);

  return (
    <Layout title={"Detail"}>
      <div>
        <Link to="/">Back to Homepage</Link>
      </div>
      {selectedItem && selectedItem.name && (
        <>
          <h2>{selectedItem.name}</h2>
          <h3>Category: {selectedItem.category}</h3>
          <h3>Level: {selectedItem.level}</h3>
          <p>{selectedItem.name}</p>
        </>
      )}
    </Layout>
  );
}
