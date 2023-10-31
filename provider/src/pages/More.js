import { useCounterContext } from "../hooks/useCounterContext";

const More = () => {

    const { counter: contador } = useCounterContext();

    return(
        <div>
            <h1>O valor do contador permanece {contador}</h1>
        </div>
    )
};
export default More;