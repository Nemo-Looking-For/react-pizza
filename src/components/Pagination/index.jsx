import styles from "./Pagination.module.scss";
import ReactPaginate from "react-paginate";

const Pagination = ({ onChangePage, currentPage }) => {
  console.log("currentPage = " + currentPage);
  return (
    <ReactPaginate
      className={styles.root}
      breakLabel="..."
      nextLabel=">"
      previousLabel="<"
      onPageChange={(event) => onChangePage(event.selected + 1)}
      pageRangeDisplayed={4}
      pageCount={3}
      //forcePage={currentPage}
      renderOnZeroPageCount={null}
      initialPage={0}
    />
  );
};

export default Pagination;
