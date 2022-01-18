import { Link } from "react-router-dom";

import { Box, CardImage, CardCategory } from "./styles";

export interface CardProps {
  id: number;
  name: string;
  category?: string;
  link: string;
}

export default function Card({
  id,
  name,
  category,
  link,
}: CardProps): JSX.Element {
  return (
    <Box>
      <Link to={`/publication/${id}`}>
        <CardImage />
        <CardCategory>{category}</CardCategory>
        <h3>{name}</h3>
      </Link>
    </Box>
  );
}
