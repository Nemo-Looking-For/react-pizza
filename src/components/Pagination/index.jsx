import styles from "./Pagination.module.scss";
import ReactPaginate from "react-paginate";

const Pagination = ({ onChangePage, currentPage }) => {
  return (
    <ReactPaginate
      className={styles.root}
      breakLabel="..."
      nextLabel=">"
      previousLabel="<"
      onPageChange={(event) => onChangePage(event.selected + 1)}
      pageRangeDisplayed={4}
      pageCount={3}
      initialPage={currentPage}
      renderOnZeroPageCount={null}
    />
  );
};

export default Pagination;
