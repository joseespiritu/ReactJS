import { useState, useRef, useEffect, useLayoutEffect } from 'react';
import { gsap } from 'gsap';


export const useCounter = ({maxCount = 1}) => {

    const [counter, setCounter] = useState(5);
    const elementToAnimate = useRef<any>(null);

    const tl = useRef(gsap.timeline());

    const handleClick = () => {
        // if (counter >= maxCount) return setCounter(counter);
        setCounter(prev => Math.min(prev + 1, maxCount));
    };

    useLayoutEffect(() => {

        if(!elementToAnimate.current) return;

        tl.current.to(elementToAnimate.current, {y: -10, duration: 0.2, ease: 'ease.out'})
                    .to(elementToAnimate.current, {y: 0, duration: 1, ease: 'bounce.out'})
                    .pause();
        
    }, []);

    useEffect(() => {
        // if ( counter < 10 ) return;
        // console.log('%cse llego al valor maximo', 'color: red; background-color: black;');
        // if(counter < maxCount) return;
        tl.current.play(0);
    }, [counter]);

    return {
        counter,
        elementToAnimate,
        handleClick,
    }
}