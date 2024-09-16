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
import ImageClassificationProjectPage from './pages/ImageClassificationProjectPage';
import PersonalWebsitePage from './pages/PersonalWebsitePage';
import FacialRecognitionPage from './pages/FacialRecognitionPage';


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
            case 'imageClassificationProjectPage':
                currentPage = <ImageClassificationProjectPage />
                break;
            case 'personalWebsitePage':
                currentPage = <PersonalWebsitePage />
                break;
            case 'faceRecPage':
                currentPage = <FacialRecognitionPage/>
                break;
            default:
                currentPage = null;
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
        <div className='flex flex-col min-h-[100vh] min-w-[100vw] bg-black items-center justify-center'>
            <div className='p-10'>
                <h1 className='text-white'>
                    New website link:
                </h1>
                <a className='text-blue-500' href="https://kyledouglasmyers.github.io/personal_website/">Visit new website</a>
                <h1 className='text-white'>- Kyle Myers :)</h1>
            </div>
            {/* <div className={appClassNames} ref={appRef}>
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

                } */}
        </div>
        </>

    )
}
export default App;
