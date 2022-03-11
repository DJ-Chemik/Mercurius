import { FieldsetStyledWrapper, Information, StyledInput } from "./ProductPrices.styled"


const ProductPrices = () => {
  return (
    <FieldsetStyledWrapper>
      <Information>
        Liczba dostęnych sztuk:
      </Information>
      <StyledInput>
        <input type="number" id="fname" name="fname" />
      </StyledInput>
      <Information>
        Czy produkt jest już opublikowany:
      </Information>
      <StyledInput>
        <input type="radio" name="radio" value="TAK" />
        TAK
        <input type="radio" name="radio" value="NIE" />
        NIE
      </StyledInput>
      <Information>
        Czy produkt został sprzedany:
      </Information>
      <StyledInput>
        <input type="radio" name="radio" value="TAK" />
        TAK
        <input type="radio" name="radio" value="NIE" />
        NIE
      </StyledInput>
      <Information>
        Cena zakupu:
      </Information>
      <StyledInput>
        <input type="number" id="fname" name="fname" /> zł
      </StyledInput>
      <Information>
        Cena w jakiej został wystawiony:
      </Information>
      <StyledInput>
        <input type="number" id="fname" name="fname" /> zł
      </StyledInput>
      <Information>
        Czy wysyłka jest możliwa poprzez portal:
      </Information>
      <StyledInput>
        <input type="radio" name="radio" value="TAK" />
        TAK
        <input type="radio" name="radio" value="NIE" />
        NIE
      </StyledInput>
      <Information>
        Jeżeli tak, cena wysyłki:
      </Information>
      <StyledInput>
        <input type="number" id="fname" name="fname" />
      </StyledInput>
      <Information>
        Kwota prowizji:
      </Information>
      <StyledInput>
        <input type="number" id="fname" name="fname" /> zł
      </StyledInput>
    </FieldsetStyledWrapper>
  )
}

export default ProductPrices
