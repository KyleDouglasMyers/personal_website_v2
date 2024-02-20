import { useHorizontalScroll } from './hooks/useHorizontalScroll';
import { useSelector } from 'react-redux';

import classNames from 'classnames';

import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import HorizontalScrollSection from './components/HorizontalScrollSection';
import Page from './pages/Page';




function App() {

    const [scrollSectionRef, appRef] = useHorizontalScroll();
    
    const pageState = useSelector((state) => {
        return state.nav.page
    })

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
            {(pageState === '') ? false : 
            <Page>

            </Page>
            }
        </>

    )
}
export default App;
