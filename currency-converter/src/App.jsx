import { useState } from 'react';
import './App.css';

const currencies = {
  CLP: 0.00109737,
  ARS: 0.00122,
  USD: 1,
  EUR: 1.02,
  TRY: 0.03318,
  GBP: 1.26365,
};

function App() {
  const [amount, setAmount] = useState(0);
  const [convertedAmount, setConvertedAmount] = useState(0);
  const [initialCurrency, setInitialCurrency] = useState('');
  const [conversionCurrency, setConversionCurrency] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform conversion logic
    const convertedAmount = (amount * currencies[initialCurrency]) / currencies[conversionCurrency];
    
    setConvertedAmount(convertedAmount)
  };

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handleInitialCurrencyChange = (event) => {
    setInitialCurrency(event.target.value);
  };

  const handleConversionCurrencyChange = (event) => {
    setConversionCurrency(event.target.value);
  };

  return (
    <>
      <h1>Currency Converter</h1>
      <div className='section'>
        <form onSubmit={handleSubmit}>
          <label>
            Amount:
            <input type="number" name="amount" value={amount} onChange={handleAmountChange} />
          </label>
          <label>
            Choose your currency:
            <select value={initialCurrency} onChange={handleInitialCurrencyChange}>
              {Object.keys(currencies).map((currency) => (
                <option key={currency} value={currency}>
                  {currency}
                </option>
              ))}
            </select>
          </label>
          <label>
            Choose conversion:
            <select value={conversionCurrency} onChange={handleConversionCurrencyChange}>
              {Object.keys(currencies).map((currency) => (
                <option key={currency} value={currency}>
                  {currency}
                </option>
              ))}
            </select>
          </label>
          <button type="submit">Convertir</button>
        </form>

        <h1>Conversion Result: {convertedAmount}</h1>
      </div>
    </>
  );
}

export default App;
