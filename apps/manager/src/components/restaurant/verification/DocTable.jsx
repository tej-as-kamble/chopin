import { SectionHeader, TableTable } from '@chopin/ui-web';
import { IoMdOpen } from "react-icons/io";
import { IoDocumentTextSharp } from "react-icons/io5";


const DocTable = ({ data }) => {
    if (!data) return;

    const columns = [
        {
            key: 'docType',
            title: 'Document Type',
            width: '10%',
            render: (doc) => (
                <span>
                    <span>{doc.type}</span><br />
                    <span style={{ fontSize: '11px', color: '#9ca3af' }}>{doc.date}</span>
                </span>
            )
        },
        {
            key: 'filename',
            title: 'Filename (Link)',
            width: '6%',
            render: (doc) => (
                <span>
                    <a href={doc.url} target="_blank" rel="noopener noreferrer" className="rvd-doc-link">
                        {doc.filename} <IoMdOpen fontSize={12} />
                    </a>
                    <div style={{ fontSize: '11px', color: '#9ca3af' }}>Hash: {doc.hash}</div>
                </span>
            )
        },
        {
            key: 'status',
            title: 'Status',
            width: '10%',
            render: (doc) => (
                doc.status === 'Passed' ?
                    <span className="rvd-ocr-pass">OCR Match</span>
                    :
                    <span className="rvd-ocr-fail">OCR Failed</span>
            )
        },
        {
            key: 'docdata',
            title: 'Document Data',
            width: '10%',
            render: (doc) => (
                <span style={{ fontSize: '12px', fontFamily: 'monospace', color: '#4b5563' }}>
                    {doc.preview}
                </span>
            )
        }
    ]

    return (
        <div className="rvd-card">
            <SectionHeader heading={<span>Documents ({data.length})</span>} icon={<IoDocumentTextSharp />} />
            <TableTable
                columns={columns}
                data={data}
            />
        </div>
    )
}

export default DocTable
