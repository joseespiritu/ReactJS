import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

interface Props {
    initialValue?: number;
};

const MAXIMUN_COUNT: number = 10;

export const CounterEffect = ( {initialValue = 5}: Props ) => {

    const [counter, setCounter] = useState(initialValue);
    const counterElement = useRef<HTMLHeadingElement>(null);

    const handleClick = () => {
        // if (counter >= MAXIMUN_COUNT) return setCounter(counter);
        setCounter(prev => Math.min(prev + 1, MAXIMUN_COUNT));
    };

    useEffect(() => {
        if ( counter < 10 ) return;

        console.log('%cse llego al valor maximo', 'color: red; background-color: black;');

        const tl = gsap.timeline();

        tl.to(counterElement.current, {y: -10, duration: 0.2, ease: 'ease.out'})
            .to(counterElement.current, {y: 0, duration: 1, ease: 'bounce.out'});

    }, [counter]);
    

    return (
        <>
            <h1>Counter Effect:</h1>
            <h2 ref={counterElement}>{counter}</h2>
            <button onClick={handleClick}>
                +1
            </button>
        </>
    );
};
