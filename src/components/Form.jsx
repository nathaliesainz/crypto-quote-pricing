import { useEffect } from "react"
import styled from "@emotion/styled"
import useSelectCurrency from "../hooks/useSelectCurrency"
import {currency} from '../data/currency'

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

    const [state, SelectCurrency] = useSelectCurrency('Select your Currency', currency);

    useEffect(() => {
      const requestAPI = async () => {
        const url = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD"
        const answer = await fetch(url)
        const result = await answer.json()
        console.log(result.Data);
      }
      requestAPI();
    }, [])
    
    

  return (
    <form>
        <SelectCurrency />

        {state}

        <InputSubmit 
            type="submit" 
            value="Quote" 
        />
    </form>
  )
}
export default Form