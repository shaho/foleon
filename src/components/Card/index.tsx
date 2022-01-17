import { Link } from "react-router-dom";

import { Box, Image } from "./styles";

export interface CardProps {
  id: number;
  // created_on?: Date;
  name: string;
  category?: string;
  link: string;
}

export default function Card({
  id,
  // created_on,
  name,
  category,
  link,
}: CardProps): JSX.Element {
  return (
    <Box>
      <Link to={`/publication/${id}`}>
        <Image />
        <h3>{name}</h3>
        <span>{category}</span>
        {/* <span>{created_on}</span> */}
      </Link>
    </Box>
  );
}
