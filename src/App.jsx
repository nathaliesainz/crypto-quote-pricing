import { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import Form from './components/Form'
import Quote from './components/Quote'
import CryptoImage from './img/crypto-image.png'

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  width: 90%;
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`

const Heading = styled.h1`
  font-family: 'Lato', sans-serif;
  color: #FFF;
  text-align: center;
  font-weight: 700;
  margin-top: 80px;
  margin-bottom: 50px;
  font-size: 34px;

  &::after {
    content: '';
    width: 100px;
    height: 6px;
    background-color: #66A2FE;
    display: block;
    margin: 10px auto 0 auto;
  }
`

const Image = styled.img`
  max-width: 400px;
  width: 80%;
  margin: 100px auto 0 auto;
  display: block;
`

function App() {

  const [currencies, setCurrencies] = useState({});
  const [quote, setQuote] = useState({});

  useEffect(() => {
    if(Object.keys(currencies).length > 0) {
      const {currency, cryptocurrency} = currencies
      const quoteCrypto = async () => {
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cryptocurrency}&tsyms=${currency}`
        
        const answer = await fetch(url)
        const result = await answer.json()

        setQuote(result.DISPLAY[cryptocurrency][currency]);
      }

      quoteCrypto();
    }
  }, [currencies]);

  return (
    <Container>
      <Image
        src={CryptoImage}
        alt="Crypto Image"
      />
      <div>
        <Heading>Quote Price Cryptocurrency</Heading>
        <Form
          setCurrencies={setCurrencies}
        />

        {quote.PRICE && <Quote quote={quote} />}
      </div>
    </Container>
  )
}

export default App
