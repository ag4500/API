import Pagination from "react-bootstrap/Pagination";
const SelectPagination = (props) => {
  const { filters } = props;

  const handleLimitChange = (e) => {
    const { name, value } = e.target;
    props.setFilters({ ...props.setFilters, [name]: value });
  };

  const handlePageChange = (page) => {
    props.setFilters({ ...props.setFilters, page: page + filters.page });
  };
  
  return (
    <>
      <div class="container">
        <div class="row">
          <div class="col-2">
            <select
              className="form-select my-3"
              value={filters.limit}
              onChange={handleLimitChange}
              name="limit"
            >
              {" "}
              <option value={3}>3</option>
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={15}>15</option>
              <option value={20}>20</option>
            </select>
            <Pagination>
              <Pagination.Prev
                disabled={filters.page === 1}
                onClick={() => handlePageChange(-1)}
              />
              <Pagination.Item>{filters.page}</Pagination.Item>
              <Pagination.Next
                disabled={filters.page === filters.pages}
                onClick={() => handlePageChange(1)}
              />
            </Pagination>
          </div>
        </div>
      </div>
    </>
  );
};

export default SelectPagination;
