import classNames from 'classnames';
import {AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle, AiFillLock} from 'react-icons/ai';

function Sidebar() {

    // Tailwind Class Names

    const sidebarClassNames = classNames(
        'flex',
        'flex-col',
        'text-[2vw]',
        'w-[5vw]',
        'border-r-[2px]',
        'border-black',
        'items-center',
        'justify-around',
        'pt-[5vh]',
        'pb-[5vh]'
        
    )

    const sidebarItemClassNames = classNames(
        'mt-[5vh]',
        'custom-pulse',
    )

    return (
        <div className={sidebarClassNames}>
            
                <a href='https://www.linkedin.com/in/kyle-douglas-myers/'><AiFillLinkedin className={sidebarItemClassNames}/></a>
                <a href='https://www.linkedin.com/in/kyle-douglas-myers/'><AiFillGithub className={sidebarItemClassNames}/></a>
                <a href='https://www.linkedin.com/in/kyle-douglas-myers/'><AiFillInstagram className={sidebarItemClassNames}/></a>                
                <a href='https://www.linkedin.com/in/kyle-douglas-myers/'><AiFillTwitterCircle className={sidebarItemClassNames}/></a>
                <a href='https://www.linkedin.com/in/kyle-douglas-myers/'><AiFillLock className={sidebarItemClassNames}/></a>        
        </div>
    );
}

export default Sidebar;