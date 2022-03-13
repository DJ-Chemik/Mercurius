import { FieldsetStyledWrapper, Information, StyledInput, Col1, Col2 } from "./ProductPrices.styled"

const ProductPrices = () => {
  return (
    <FieldsetStyledWrapper>
      <Col1>
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
          Data ostatniej modyfikacji produktu:
        </Information>
        <StyledInput>
          <input type="date" id="fname" name="fname" />
        </StyledInput>
      </Col1>
      <Col2>
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
        <Information>
          Data utworzenia produktu:
        </Information>
        <StyledInput>
          <input type="date" id="fname" name="fname" />
        </StyledInput>
      </Col2>
    </FieldsetStyledWrapper>
  )
}

export default ProductPrices
