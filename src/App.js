import {useState} from 'react'
import CountButton from './CountButton';
import CountDisplay from './CountDisplay';

function App() {

  const [count, setCout] = useState(0);

  return (
    <div>
      <CountButton onClick={() => setCout(count+1)}/>
      <CountDisplay count={count} />
    </div>
  );
}

export default App;
