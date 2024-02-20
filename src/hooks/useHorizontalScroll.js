import { useEffect, useRef } from 'react';

export function useHorizontalScroll() {
    const elRef = useRef();
    const appRef = useRef();

    useEffect(() => {
        const el = elRef.current;
        const app = appRef.current;
        console.log('Wheel')
        if (el) {
            const onWheel = (e) => {
                if (e.deltaY === 0) {
                    return;
                }
                if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
                    e.preventDefault();
                    el.scrollLeft += e.deltaX;
                }
                el.scrollTo({ left: el.scrollLeft + e.deltaY });
            };
            app.addEventListener('wheel', onWheel);
            return () => app.removeEventListener('wheel', onWheel);
        }
    }, []);
    return [elRef, appRef];
}