import { useContext } from 'react'
import { CounterContext } from '../context/CounterContext';

const Home = () => {

    //EXEMPLO DE FATORAÇÃO DO CONTEXTO FEITO MANUALMENTE 
    const { counter: contador,  setCounter } = useContext(CounterContext)

    return(
        <div>
            <h1>Home</h1>
            <p>O valor do contador está em {contador} </p>
            <button onClick={() => setCounter(contador + 1)}>Adicionar ao contador</button>
            <button onClick={() => setCounter(contador - 1 )}>Reduzir do contador</button>
        </div>
    )
};
export default Home;