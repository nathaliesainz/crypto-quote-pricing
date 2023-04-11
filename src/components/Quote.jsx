import styled from "@emotion/styled"

const Quote = ({quote}) => {
  const {PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } = quote
  return (
    <div>
        <p>Price is: <span>{PRICE}</span></p>
        <p>Highest price of the day: <span>{HIGHDAY}</span></p>
        <p>Lowest price of the day: <span>{LOWDAY}</span></p>
        <p>Change in the last 24 hours: <span>{CHANGEPCT24HOUR}</span></p>
        <p>Last update: <span>{LASTUPDATE}</span></p>
    </div>
  )
}
export default Quote