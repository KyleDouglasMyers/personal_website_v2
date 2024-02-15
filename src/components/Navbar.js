import SectionLink from "./SectionLink";
import classNames from "classnames";

function Navbar() {

    // Tailwind Class Names

    // Nav bar container tailwind classes
    const navBarClasses = classNames(
        'flex',
        'flex-row',
        'mt-[5vh]',
        'mb-[5vh]',
        'ml-[7vw]',
        'mr-[7vw]',
        'justify-evenly',
        'text-[1.2vw]'
        
    )
    
    // Home button tailwind classes
    const homeButtonClasses = classNames('')

    // Individual nav button classes
    const navItemClasses = classNames(
        'p-2',
        'cursor-pointer',
        'animate-pulse'
    )


    // Output
    return (
        <div className={navBarClasses}>
            <SectionLink path='/home' className={homeButtonClasses}>Home</SectionLink>
            <SectionLink path='/about' className={navItemClasses}>About</SectionLink>
            <SectionLink path='/experience' className={navItemClasses}>Experience</SectionLink>
            <SectionLink path='/skills' className={navItemClasses}>Skills</SectionLink>
            <SectionLink path='/projects' className={navItemClasses}>Projects</SectionLink>
            <SectionLink path='/contact' className={navItemClasses}>Contact</SectionLink>
            <SectionLink path='/extra' className={navItemClasses}>Extra</SectionLink>
        </div>
    );
}
export default Navbar;

