import { FieldsetStyledWrapper, Information, StyledInput } from "./ProductNames.styled"

const ProductNames = () => {
  return (
    <FieldsetStyledWrapper >
      <Information>
        Nazwa produktu:
      </Information>
      <StyledInput>
        <input type="text" id="fname" name="fname" />
      </StyledInput>
      <Information>
        Opis produktu:
      </Information>
      <StyledInput>
        <textarea name="texarea"></textarea>
      </StyledInput>
      <Information>
        Nazwa kategorii:
      </Information>
      <StyledInput>
        <input type="text" id="fname" name="fname" />
      </StyledInput>
      <Information>
        Nazwa kategorii w serwisie:
      </Information>
      <StyledInput>
        <input type="text" id="fname" name="fname" />
      </StyledInput>
      <Information>
        Nazwa kategorii w programie Mercurius:
      </Information>
      <StyledInput>
        <input type="text" id="fname" name="fname" />
      </StyledInput>
      <Information>
        Nazwa konta na jakim jest wystawiony produkt:
      </Information>
      <StyledInput>
        <input type="text" id="fname" name="fname" />
      </StyledInput>
    </FieldsetStyledWrapper>
  )
}

export default ProductNames
