import { generateChartData } from '@/data/performanceData';
import { Graph, SectionHeader } from '@chopin/ui-web';
import { FaCalendarDay } from "react-icons/fa";

const TodayOrderGraph = () => {
    const hourlyData = generateChartData(24, 150, 400);

    return (
        <>
            <SectionHeader
                heading={"Today's Performance"}
                icon={<FaCalendarDay />}
            />
            <Graph data={hourlyData} color="#8b5cf6" />
        </>
    );
};

export default TodayOrderGraph;