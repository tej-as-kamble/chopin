import { Timeline } from '@chopin/ui-web';
import { FaHistory } from "react-icons/fa";

const HistoryCard = ({ data }) => {

    const history = data.map(item => {
        return {
            id: item.id,
            label: item.action,
            note: item.note,
            name: item.actor,
            time: new Date(item.timestamp).toLocaleString()
        }
    });

    return (
        <Timeline heading="History & Activity" data={history} icon={<FaHistory />} />
    )
}

export default HistoryCard
