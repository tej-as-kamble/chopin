import './PerformancePage.css';
import { generateDashboardData } from '@/data/dashboardData';
import { MetricCard, PageHeader, PageLayout } from '@chopin/ui-web';
import { StatusMonitor } from '@/components/dashboard/StatusMonitor';
import { AlertFeed } from '@/components/dashboard/AlertFeed';
import PastOrderGraph from '@/components/monitoring/performance/PastOrderGraph';
import TodayOrderGraph from '@/components/monitoring/performance/TodayOrderGraph';


const PerformancePage = () => {
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
          value={m.value}
          label={m.label}
        />
      )
    }
  ));

  const BottomLeftSections = [
    {
      id: 'snap-rest',
      compo: <PastOrderGraph />
    },
    {
      id: 'snap-fleet',
      compo: <TodayOrderGraph />
    },
  ];

  const RightSections = [
    {
      id: 'alerts',
      compo: <AlertFeed alerts={dashboardData.alerts} />
    }
  ];

  return (
    <div className="performance-container">
      <PageHeader
        title="Performance"
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

export default PerformancePage;