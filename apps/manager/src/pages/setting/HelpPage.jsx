import './ProfilePage.css';
import { PageHeader, PageLayout } from '@chopin/ui-web';
import Faq from '@/components/setting/help/faq';
import AdminDetails from '@/components/setting/help/AdminDetails';

const HelpPage = () => {
    const TopLeftSections = [
        {
            id: 'faq',
            compo: <Faq />
        }
    ]


    const RightSections = [
        {
            id: 'admin',
            compo: <AdminDetails />
        }
    ];


    return (
        <div className="profile-page-container">
            <PageHeader
                title="Need Help?"
            />

            <PageLayout
                TopLeftSections={TopLeftSections}
                RightSections={RightSections}
            />
        </div>
    );
};

export default HelpPage;