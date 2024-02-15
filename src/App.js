import Navbar from './components/Navbar'
import classNames from 'classnames';

function App(){

    //Global app tailwin css definitons:
    const appClassNames = classNames(
        'font-[Oxanium]',
        'min-w-full',
        'min-h-full'
    )
    const containerSection = classNames('')

    return(
        <div className={appClassNames}>
            <Navbar/>
            <div className={containerSection}>
            </div>

        </div>
    )
}
export default App;
