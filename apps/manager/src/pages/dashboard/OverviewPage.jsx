import './OverviewPage.css';
import { generateDashboardData } from '@/data/dashboardData';
import { StatusMonitor } from '@/components/dashboard/StatusMonitor';
import { RestaurantSnapshot, FleetSnapshot } from '@/components/dashboard/LiveSnapshot';
import { AlertFeed } from '@/components/dashboard/AlertFeed';
import { PageHeader, PageLayout, MetricCard } from '@chopin/ui-web';

const OverviewPage = () => {
    const dashboardData = generateDashboardData();

    const TopLeftSections = [
        {
            id: 'monitor',
            compo: <StatusMonitor data={dashboardData.systemHealth} />
        }
    ]

    const MiddleLeftSections = dashboardData.metrics.map((m) => (
        {
            id: m.id,
            compo: (
                <MetricCard
                    label={m.label}
                    value={m.value}
                />
            )
        }
    ));

    const BottomLeftSections = [
        {
            id: 'snap-rest',
            compo: <RestaurantSnapshot data={dashboardData.liveSnapshot} />
        },
        {
            id: 'snap-fleet',
            compo: <FleetSnapshot data={dashboardData.liveSnapshot} />
        },
    ];

    const RightSections = [
        {
            id: 'alerts',
            compo: <AlertFeed alerts={dashboardData.alerts} />
        }
    ];


    return (
        <div className="overview-container">
            <PageHeader
                title="Overview"
                subtitle="Area: Downtown Metro • Operations"
            />

            <PageLayout
                TopLeftSections={TopLeftSections}
                MiddleLeftSections={MiddleLeftSections}
                BottomLeftSections={BottomLeftSections}
                RightSections={RightSections}
            />
        </div>
    );
};

export default OverviewPage;