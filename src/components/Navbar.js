import SectionLink from "./SectionLink";
import classNames from "classnames";

function Navbar() {

    // Tailwind Class Names

    // Nav bar container tailwind classes
    const navBarClasses = classNames(
        'flex',
        'flex-row',
        'pt-[5vh]',
        'pb-[5vh]',
        'pl-[7vw]',
        'pr-[7vw]',
        'justify-evenly',
        'text-[1.2vw]'
        
    )
    
    // Home button tailwind classes
    const homeButtonClasses = classNames(
        'p-2',
        'cursor-pointer',
        'custom-pulse'
        )

    // Individual nav button classes
    const navItemClasses = classNames(
        'p-2',
        'cursor-pointer',
        'custom-pulse'
    )


    // Output
    return (
        <div className={navBarClasses}>
            <SectionLink section='/home' className={homeButtonClasses}>Home</SectionLink>
            <SectionLink section='/about' className={navItemClasses}>About</SectionLink>
            <SectionLink section='/experience' className={navItemClasses}>Experience</SectionLink>
            <SectionLink section='/skills' className={navItemClasses}>Skills</SectionLink>
            <SectionLink section='/projects' className={navItemClasses}>Projects</SectionLink>
            <SectionLink section='/contact' className={navItemClasses}>Contact</SectionLink>
            <SectionLink section='/extra' className={navItemClasses}>Extra</SectionLink>
        </div>
    );
}
export default Navbar;

