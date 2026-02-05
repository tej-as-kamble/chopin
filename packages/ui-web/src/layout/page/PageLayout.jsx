import './PageLayout.css';

const PageLayout = ({
    TopLeftSections = [],
    MiddleLeftSections = [], // 4 times
    BottomLeftSections = [], // 2 times
    RightSections = []
}) => {
    return (
        <div className="cpl-dash-wrapper">
            <main className="cpl-dash-main-area">
                {TopLeftSections.length > 0 && <div className='cpl-dash-top-left-section'>
                    {TopLeftSections.map((item) => (
                        <div key={item.id} className="cpl-dash-card-base">
                            {item.compo}
                        </div>
                    ))}
                </div>}

                {MiddleLeftSections.length > 0 && <div className='cpl-dash-middle-left-section'>
                    {MiddleLeftSections.map((item) => (
                        <div key={item.id} className="cpl-dash-card-base">
                            {item.compo}
                        </div>
                    ))}
                </div>}

                {BottomLeftSections.length > 0 && <div className='cpl-dash-bottom-left-section'>
                    {BottomLeftSections.map((item) => (
                        <div key={item.id} className="cpl-dash-card-base">
                            {item.compo}
                        </div>
                    ))}
                </div>}

            </main>

            {RightSections.length > 0 && <aside className="cpl-dash-right-section">
                {RightSections.map((item) => (
                    <div key={item.id} className="cpl-dash-card-base">
                        {item.compo}
                    </div>
                ))}
            </aside>}

        </div>
    );
};

export default PageLayout