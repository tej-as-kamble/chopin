import './TableLayout.css';
import { FaSearch, FaChevronDown } from 'react-icons/fa';

const TableToolbar = ({
    search = { value: '', onChange: () => { }, placeholder: 'Search...' },
    filters = [],
    actions = []
}) => {
    return (
        <div className="table-toolbar">
            <div className="toolbar-left">
                <div className="search-pill">
                    <FaSearch className="search-icon" />
                    <input
                        type="text"
                        className="search-input-field"
                        placeholder={search.placeholder}
                        value={search.value}
                        onChange={(e) => search.onChange(e.target.value)}
                    />
                </div>

                {filters.length > 0 && <div className="toolbar-divider"></div>}

                {filters.length > 0 && filters.map((filter, index) => (
                    <div key={index} className="filter-pill-wrapper">
                        <span className="filter-label">{filter.label}:</span>
                        <div className="select-wrapper">
                            <select
                                value={filter.value}
                                onChange={(e) => filter.onChange(e.target.value)}
                                className="filter-select"
                            >
                                {filter.options.map(opt => (
                                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                                ))}
                            </select>
                            <FaChevronDown className="select-chevron" />
                        </div>
                    </div>
                ))}
            </div>


            <div className="toolbar-right">
                {actions.map((action, index) => (
                    <button
                        key={index}
                        className={`action-btn ${action.variant || 'secondary'}`}
                        onClick={action.onClick}
                    >
                        {action.icon && <span className="btn-icon">{action.icon}</span>}
                        {action.label}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default TableToolbar;