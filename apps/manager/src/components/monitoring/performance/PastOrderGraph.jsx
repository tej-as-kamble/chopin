import { generateChartData } from '@/data/performanceData';
import { Graph, SectionHeader } from '@chopin/ui-web';
import { FaCalendarWeek } from "react-icons/fa";

const PastOrderGraph = () => {
    const weeklyData = generateChartData(7, 1000, 5000);

    return (
        <>
            <SectionHeader
                heading={"Daily Performance (7 Days)"}
                icon={<FaCalendarWeek />}
            />
            <Graph data={weeklyData} color="#3b82f6" />
        </>
    );
};

export default PastOrderGraph;