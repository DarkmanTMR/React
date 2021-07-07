
import {useDispatch, useSelector} from 'react-redux'

      const NestedChild = () => {
        const counter = useSelector(({counter: {value}}) => value)


        return (
            <header className="App-header">
              <h1>{counter}</h1>


            </header>
        )
      }

function App() {
    const dispatch = useDispatch();

    return (
        <div className="App">
            <button
                onClick={() => {
                    dispatch({type: 'INC'})
                }}
            >
                inc
            </button>

            <button
                onClick={() => {
                    dispatch({type: 'DEC'})
                }}
            >
                dec
            </button>
            <button
                onClick={() => {
                    dispatch({type: 'RESET'})
                }}
            >
                reset
            </button>
            <NestedChild />
        </div>
    );
}

export default App;