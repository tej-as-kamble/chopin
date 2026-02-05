import './ProfilePage.css';
import { generateManagerData } from '@/data/profileData';
import { PageHeader, PageLayout } from '@chopin/ui-web';
import PersonalDetails from '@/components/setting/profile/PersonalDetails';
import AddressDetails from '@/components/setting/profile/AddressDetails';
import BankDetails from '@/components/setting/profile/BankDetails';
import PayoutHistory from '@/components/setting/profile/PayoutHistory';

const ProfilePage = () => {
    const data = generateManagerData();

    const TopLeftSections = [
        {
            id: 'personal-details',
            compo: <PersonalDetails data={data.personal} />
        }
    ]


    const BottomLeftSections = [
        {
            id: 'address',
            compo: <AddressDetails data={data.address} />
        },
        {
            id: 'bank',
            compo: <BankDetails data={data.bank} />
        },
    ];

    const RightSections = [
        {
            id: 'payouts',
            compo: <PayoutHistory data={data.payouts} />
        }
    ];


    return (
        <div className="profile-page-container">
            <PageHeader
                title="Your Profile"
            />

            <PageLayout
                TopLeftSections={TopLeftSections}
                BottomLeftSections={BottomLeftSections}
                RightSections={RightSections}
            />
        </div>
    );
};

export default ProfilePage;