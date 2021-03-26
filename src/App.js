import {useState} from 'react'
import CountButton from './CountButton';
import CountDisplay from './CountDisplay';

function App() {

  const [countOne, setCountOne] = useState(0);
  const [countTwo, setCountTwo] = useState(0);

  return (
    <div>
      <CountButton
        countOneButtonClick={() => setCountOne(countOne+1)}
        countTwoButtonClick={() => setCountTwo(countTwo+1)}
        />
      <CountDisplay countOne={countOne} countTwo={countTwo} />
    </div>
  );
}

export default App;
