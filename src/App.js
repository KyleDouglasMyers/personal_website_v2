import { useHorizontalScroll } from './hooks/useHorizontalScroll';
import { useSelector } from 'react-redux';

import classNames from 'classnames';

import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import HorizontalScrollSection from './components/HorizontalScrollSection';

import Page from './pages/Page';
import IndustrialProjectsPage from './pages/IndustrialProjectsPage';
import MorganStanleyPage from './pages/MorganStanleyPage';
import FednavPage from './pages/FednavPage';


function App() {

    const [scrollSectionRef, appRef] = useHorizontalScroll();

    const pageState = useSelector((state) => {
        return state.nav.page
    })

    let currentPage = null;

    if (pageState) {
        switch (pageState) {
            case 'industrialProjectsPage':
                currentPage = <IndustrialProjectsPage />
                break;
            case 'morganStanleyPage':
                currentPage = <MorganStanleyPage />
                break;
            case 'fednavPage':
                currentPage = <FednavPage />
                break;
            default:
            // code block
        }
    }

    //Global app tailwin css definitons:
    const appClassNames = classNames(
        'font-[Oxanium]',
        'min-h-[100vh]',
        'min-w-[100vw]',
        'flex',
        'flex-col',
    )
    const containerSectionClasses = classNames(
        'grow',
        'flex',
        'flex-row',

    )
    return (
        <>
            <div className={appClassNames} ref={appRef}>
                <Navbar />
                <div className={containerSectionClasses}>
                    <Sidebar />
                    <HorizontalScrollSection ref={scrollSectionRef} />
                </div>

            </div>
            {(pageState === '') ? null :

                <Page>
                    {currentPage}
                </Page>

            }
        </>

    )
}
export default App;
