import classNames from "classnames"

function FednavPage() {

    const mainTitleClasses = classNames(
        'text-[4vh]',
        'mb-[2vh]',
    )

    const subTitleClasses = classNames(
        'text-[3vh]',
        'mb-[2vh]',
        'mt-[2vh]',
        'underline'
    )
    const paragraphClasses = classNames(
        'mt-[2vh]',
        'mb-[2vh]'

    )

    const pointListItemClasses = classNames(
        'flex',
        'items-center',
        'text-center',
        'whitespace-pre-line'
    )

    const ipImagesClasses = classNames(
        'max-h-[20vh]',
        'max-w-[30vw]',
        'object-contain',
        'm-[2vw]',
        //Transition classes
        // 'transition',
        // 'ease-in-out',
        // 'transform',
        // 'hover:scale-150',
        // 'hover:z-10'

    )

    const keyTakeAwaySpanClasses = classNames(
        'font-[Oxanium-Bold]'
    )
    return (
        <div>
            <h1 className={mainTitleClasses}>Fednav Ltd.</h1>
            <p classname={paragraphClasses}>
                Fednav is a Canadian company privately held that operates within the maritime transport sector, facilitating the movement of more than 30 million tonnes of bulk and break bulk cargo globally. It's fleet consists of around 120 vessels under long-term and spot charters.
            </p>
            <p classname={paragraphClasses}>
                
            </p>
        </div>
    );
}
export default FednavPage;