import {useState} from 'react'
import CountButton from './CountButton';
import CountDisplay from './CountDisplay';

function App() {

  const [countOne, setCountOne] = useState(0);
  const [countTwo, setCountTwo] = useState(0);
  const [countTwoMessage, setCountTwoMessage] = useState('');

  return (
    <div>
      {!!(countTwoMessage && countTwoMessage.length) && (
        <div>{countTwoMessage}</div>
      )}
      <CountButton
        countOneButtonClick={() => setCountOne(countOne+1)}
        countTwoButtonClick={() => setCountTwo(countTwo+1)}
        />
      <CountDisplay
        countOne={countOne}
        countTwo={countTwo}
        onCountTwoChange={(value) => setCountTwoMessage(`Count of button 2 changed to ${value}`)}
        />
    </div>
  );
}

export default App;
