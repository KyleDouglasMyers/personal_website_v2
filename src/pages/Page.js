import {useDispatch} from 'react-redux';
import { setPageState } from "../store";

import ReactDOM from 'react-dom';
function Page({children}){

    const dispatch = useDispatch();

    const handleClick = (event) => {
        console.log('Returning to main screen')
        dispatch(setPageState(''))
    }

    return ReactDOM.createPortal(
        <div className="absolute inset-0 bg-black/50" onClick={handleClick}>
            <div className="absolute inset-40 p-10 bg-white/100">
                {children}
            </div>
        </div>,
        document.querySelector('.page-container')
    );

}
export default Page;