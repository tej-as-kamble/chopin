import { useState, useEffect } from 'react';
import './SlotRestrictionsPage.css';
import { getTodayData, generateFutureData } from '@/data/slotData';

import TodaySummary from '@/components/monitoring/slot-restriction/TodaySummary';
import SlotList from '@/components/monitoring/slot-restriction/SlotList';
import DaySlotDetails from '@/components/monitoring/slot-restriction/DaySlotDetails';
import EmergencyControl from '@/components/monitoring/slot-restriction/EmergencyControl';

import { PageLayout, CalendarWidget, PageHeader, LoadingSpinner, SectionHeader } from '@chopin/ui-web';

import { FaCalendarAlt } from "react-icons/fa";

const SlotRestrictionsPage = () => {
    const [loading, setLoading] = useState(true);
    const [todayData, setTodayData] = useState(null);
    const [futureData, setFutureData] = useState([]);
    const [selectedDate, setSelectedDate] = useState(new Date());

    useEffect(() => {
        setTodayData(getTodayData());
        setTimeout(() => {
            setFutureData(generateFutureData(7));
            setLoading(false);
        }, 800);
    }, []);

    if (!todayData) return <div>Loading Dashboard...</div>;


    const TopLeftSections = [
        {
            id: 'summary',
            compo: <TodaySummary data={todayData} />
        },
        {
            id: 'slot-list',
            compo: <>
                {loading ? (
                    <LoadingSpinner msg='Loading slots' />
                ) : (
                    <SlotList data={futureData} />
                )}
            </>
        }
    ]

    const RightSections = [
        {
            id: 'calender',
            compo: <>
                <SectionHeader
                    heading={"Calendar"}
                    icon={<FaCalendarAlt />}
                />
                <div className='slot-page-calender'>
                    <CalendarWidget selectedDate={selectedDate} onDateSelect={setSelectedDate} />
                </div>
            </>
        },
        {
            id: 'details',
            compo: <DaySlotDetails date={selectedDate} />
        },
        {
            id: 'emergency',
            compo: <EmergencyControl />
        }
    ];

    return (
        <div className="slot-page-container">
            <PageHeader
                title="Overview"
                subtitle="Area: Downtown Metro • Operations"
            />

            <PageLayout
                TopLeftSections={TopLeftSections}
                RightSections={RightSections}
            />
        </div>
    );
};

export default SlotRestrictionsPage;