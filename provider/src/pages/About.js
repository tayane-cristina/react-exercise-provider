import { useCounterContext } from "../hooks/useCounterContext";

const About = () => {

    const { counter} = useCounterContext();
    return(
        <div>
            <h1>O valor do contador é {counter}</h1>
        </div>
    )
};
export default About;