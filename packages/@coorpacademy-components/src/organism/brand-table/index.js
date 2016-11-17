import {checker, createValidate} from '../../util/validation';
import createTable from '../../molecule/table';
import createPagination from '../../molecule/pagination';
import createSearch from '../../molecule/search';
import createLoader from '../../atom/loader';
import style from './style.css';

const conditions = checker.shape({
  props: checker.shape({
    createHref: checker.string,
    search: checker.shape({
      value: checker.string.optional,
      placeholder: checker.string,
      onChange: checker.func
    }).optional,
    pagination: checker.shape({
      value: checker.string,
      nextHref: checker.string.optional,
      previousHref: checker.string.optional
    }).optional,
    displayOptions: checker.shape({
      value: checker.string,
      values: checker.array,
      onChange: checker.func
    }),
    emptyValue: checker.string,
    isPending: checker.bool.optional,
    rows: checker.array.optional,
    columns: checker.array.optional
  }),
  children: checker.none
});

export default (treant, options = {}) => {
  const {h} = treant;

  const Table = createTable(treant, options);
  const Pagination = createPagination(treant, options);
  const Search = createSearch(treant, options);
  const Loader = createLoader(treant, options);

  const BrandTable = (props, children) => {
    const {
      createHref,
      pagination,
      search,
      rows = [],
      columns = [],
      isPending,
      emptyValue
    } = props;

    const tableView = isPending ? (
      <div className={style.loading}>
        <Loader/>
      </div>
    ) : (
      rows.length > 0 ? (
        <Table rows={rows} columns={columns} />
      ) : (
        <div className={style.empty}>
          {emptyValue}
        </div>
      )
    );

    return (
      <div className={style.wrapper}>
        <div className={style.headerWrapper}>
          <div className={style.create}>
            <a href={createHref}>+</a>
          </div>
          <div className={style.search}>
            <Search {...search} />
          </div>
          <div className={style.pagination}>
            <Pagination {...pagination} />
          </div>
        </div>
        <div className={style.tableWrapper}>
          {tableView}
        </div>
        <div className={style.footerWrapper}>
        </div>
      </div>
    );
  };

  BrandTable.validate = createValidate(conditions);
  return BrandTable;
};
