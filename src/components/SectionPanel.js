import { forwardRef } from "react";
import classNames from "classnames";

const SectionPanel = forwardRef(function SectionPanel({title, children, className}, ref){

    const sectionPanelClassNames = classNames(
        'inline-block', 
        'p-2', 
        'overflow-y-hidden',
        'min-w-[50vw]',
        'p-[2vw]',
        // For sizing
        // 'border-red-200',
        // 'border-2',
        className
    );

      const titleClassNames = classNames(
        'text-[4vh]',
        'mb-[2vh]'
    )

    return (
        <div ref={ref} className={sectionPanelClassNames}>
            <div className={titleClassNames}>{title}</div>
            {children}
        </div>
    );
})
export default SectionPanel;