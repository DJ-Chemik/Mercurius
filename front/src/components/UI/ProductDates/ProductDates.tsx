import { FieldsetStyledWrapper, Information, StyledInput } from "./ProductDates.styled"


const ProductDates = () => {
  return (
    <FieldsetStyledWrapper>
      <Information>
        Data utworzenia produktu:
      </Information>
      <StyledInput>
        <input type="date" id="fname" name="fname" />
      </StyledInput>
      <Information>
        Data ostatniej modyfikacji produktu:
      </Information>
      <StyledInput>
        <input type="date" id="fname" name="fname" />
      </StyledInput>
      <Information>
        Link do aukcji:
      </Information>
      <StyledInput>
        <input type="text" id="fname" name="fname" />
      </StyledInput>
    </FieldsetStyledWrapper>
  )
}

export default ProductDates
