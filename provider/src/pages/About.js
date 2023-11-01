import { useCounterContext } from "../hooks/useCounterContext";
import { useTitleColorContext } from "../hooks/useTitleColorContext";

const About = () => {

    const { color } = useTitleColorContext();

    const { counter} = useCounterContext();
    return(
        <div>
            <h1 style={{color: color}} >O valor do contador é {counter}</h1>
        </div>
    )
};
export default About;