const TableRow = ({ row, columns, onRowClick }) => {
  return (
    <tr
      className={`table-row ${onRowClick ? 'clickable' : ''}`}
      onClick={() => onRowClick && onRowClick(row)}
    >
      {columns.map((col) => (
        <td key={`${row.id || Math.random()}-${col.key}`}>
          {col.render ? col.render(row) : row[col.key]}
        </td>
      ))}
    </tr>
  );
};

export default TableRow;