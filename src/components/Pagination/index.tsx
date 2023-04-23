import { Container } from "./style";

interface PaginationProps {
  pagesFilter: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

export function Pagination({ pagesFilter, setCurrentPage }: PaginationProps) {
  return (
    <nav>
      {Array.from(Array(pagesFilter), (item, index) => {
        return (
          <Container
            key={index}
            value={index}
            onClick={(e: any) => setCurrentPage(Number(e.target.value))}
          >
            {index + 1}
          </Container>
        );
      })}
    </nav>
  );
}
