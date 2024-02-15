import classNames from 'classnames';

import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'



function App(){

    //Global app tailwin css definitons:
    const appClassNames = classNames(
        'font-[Oxanium]',
        'min-h-[100vh]',
        'min-w-[100vw]',
        'flex',
        'flex-col'
    )
    const containerSectionClasses = classNames(
        'grow',
        'flex',
        'flex-row'
    )

    return(
        <div className={appClassNames}>
            <Navbar/>
            <div className={containerSectionClasses}>
                <Sidebar/>
            </div>

        </div>
    )
}
export default App;
