import { useCounterContext } from "../hooks/useCounterContext";
import { useTitleColorContext } from "../hooks/useTitleColorContext";

const About = () => {

    const { color, dispatch } = useTitleColorContext();

    const { counter} = useCounterContext();

    const setColor = (color) => {
        dispatch({type: color})
    }
    return(
        <div>
            <h1 style={{color: color}} >O valor do contador é {counter}</h1>
            <button onClick={() => setColor("RED")}>Vermelho</button>
            <button onClick={() => setColor("BLUE")}>Azul</button>
        </div>
    )
};
export default About;