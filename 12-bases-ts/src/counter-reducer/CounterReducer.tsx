import { useReducer } from "react";
import { CounterState } from "./interfaces/interfaces";
import { counterReducer } from "./state/counterReducer";
import * as CounterActions from "./actions/action";

const INITIAL_STATE: CounterState = {
    counter: 0,
    previous: 0,
    changes: 0,
}

export const CounterReducerComponent = ( ) => {

    const [counterState, dispatch] = useReducer(counterReducer, INITIAL_STATE);

    const handleReset = () => {
        // setCounter(prev => prev + 1);
        dispatch(CounterActions.doReset());
    };

    const increaseBy = (value: number) => {
        dispatch(CounterActions.doIncreaseBy(value));
    }

    return (
        <>
            <h1>Counter Reducer Segmentado</h1>
            <pre>
                {JSON.stringify(counterState, null, 2)}
            </pre>

            <button onClick={() => increaseBy(1)}>
                +1
            </button>
            <button onClick={() => increaseBy(5)}>
                +5
            </button>
            <button onClick={() => increaseBy(10)}>
                +10
            </button>
            <button onClick={handleReset}>
                reset
            </button>
        </>
    );
};
