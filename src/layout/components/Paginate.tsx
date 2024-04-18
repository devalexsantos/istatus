import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'

export function Paginate() {
  return (
    <Pagination>
      <PaginationContent className="w-full flex justify-center items-center md:justify-normal">
        <PaginationItem>
          <span className="text-xs">Página 1 de 20</span>
        </PaginationItem>
        <PaginationItem>
          <PaginationPrevious href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href="#" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}
