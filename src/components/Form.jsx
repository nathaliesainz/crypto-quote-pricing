import { useEffect, useState } from "react"
import styled from "@emotion/styled"
import Error from "./Error"
import useSelectCurrency from "../hooks/useSelectCurrency"
import {currencies} from '../data/currencies'

const InputSubmit = styled.input`
    background-color: #9497FF;
    border: none;
    width: 100%;
    padding: 10px;
    color: #FFF;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 20px;
    border-radius: 5px;
    transition: background-color .3s ease;
    margin-top: 30px;
    &:hover {
        background-color: #7A7DFE;
        cursor: pointer;
    }
`

const Form = () => {
    const [cryptos, setCryptos] = useState([]);
    const [error, setError] = useState(false);

    const [currency, SelectCurrency] = useSelectCurrency('Select your Currency', currencies);
    const [cryptocurrency, SelectCryptocurrency] = useSelectCurrency('Select your Crypto', cryptos);

    useEffect(() => {
      const requestAPI = async () => {
        const url = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD"
        const answer = await fetch(url)
        const result = await answer.json()

        const arrayCryptos = result.Data.map( crypto => {
          const object = {
            id: crypto.CoinInfo.Name,
            name: crypto.CoinInfo.FullName
          }
          return object;
        })

        setCryptos(arrayCryptos)

      }
      requestAPI();
    }, [])
    
    const handleSubmit = e => {
      e.preventDefault()

      if([currency, cryptocurrency].includes('')) {
        setError(true)
        return
      }

      setError(false)
    }

  return (
    <>
      {error && <Error>All fields are required</Error>}

      <form
        onSubmit={handleSubmit}
      >
          <SelectCurrency />
          <SelectCryptocurrency />
        
          <InputSubmit 
              type="submit" 
              value="Quote" 
          />
      </form>
    </>
  )
}
export default Form