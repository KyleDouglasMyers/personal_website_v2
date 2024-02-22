import {useDispatch} from 'react-redux';
import { setPageState } from "../store";

import classNames from 'classnames';

import ReactDOM from 'react-dom';
function Page({children}){

    const dispatch = useDispatch();

    const handleClick = (event) => {
        console.log('Returning to main screen')
        dispatch(setPageState(''))
    }

    const outterPageClasses = classNames(
        'absolute',
        'inset-0',
        'bg-black/50'
    )

    const innerPageClasses = classNames(
        'absolute',
        'inset-20',
        'p-10',
        'bg-white/100',
        'text-[2vh]',
        'overflow-y-scroll'

    )

    return ReactDOM.createPortal(
        <div className={outterPageClasses} onClick={handleClick}>
            <div className={innerPageClasses}>
                {children}
            </div>
        </div>,
        document.querySelector('.page-container')
    );

}
export default Page;