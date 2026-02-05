import { Timeline } from '@chopin/ui-web';
import { FaHistory } from 'react-icons/fa';

const TimelineCard = ({ data }) => {
    const history = data.map(item => {
        return {
            id: item.id,
            label: `${item.author}`,
            note: `${item.text} • ${item.time}`
        }
    });

    return (
        <Timeline heading="History & Activity" data={history} icon={<FaHistory />} />
    )
}

export default TimelineCard
