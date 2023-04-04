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
    &:hover {
        background-color: #7A7DFE;
        cursor: pointer;
    }
`

const Form = () => {

    

    const [SelectCurrency] = useSelectCurrency('Select your Currency', currency);
    

  return (
    <form>
        <SelectCurrency />

        <InputSubmit 
            type="submit" 
            value="Quote" 
        />
    </form>
  )
}
export default Form