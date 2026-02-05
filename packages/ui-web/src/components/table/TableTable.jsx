import './TableLayout.css';
import TableRow from './TableRow';

const TableTable = ({ columns, data, onRowClick }) => {
  return (
    <div className="table-wrapper">
      <table className="custom-table">
        <thead>
          <tr>
            {columns.map((col) => (
              <th key={col.key} style={{ width: col.width }}>
                {col.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((row, index) => (
              <TableRow
                key={row.id || index}
                row={row}
                columns={columns}
                onRowClick={onRowClick}
              />
            ))
          ) : (
            <tr>
              <td colSpan={columns.length} className="empty-state">
                No data available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TableTable;