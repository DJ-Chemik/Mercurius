import Button from "../../UI/Button/Button";
import RouteLink from "../../UI/RouteLink/RouteLink.styled";
import { APP_PAGE } from "../App";
import { ProductAreaStyled, Container, Form, Information, InputStyle, Send, Picture } from "./ProductArea.styled";

const ProductArea = () => {
  return (
    <ProductAreaStyled>
      Product Area
      <Container>

        <Information>
          Nazwa produktu:
        </Information>
        <InputStyle>
          <input type="text" id="fname" name="fname" />
        </InputStyle>

        <Information>
          Opis produktu:
        </Information>
        <InputStyle>
          <input type="text" id="fname" name="fname" />
        </InputStyle>

        <Information>
          Nazwa kategorii:
        </Information>
        <InputStyle>
          <input type="text" id="fname" name="fname" />
        </InputStyle>

        <Information>
          Nazwa kategorii w serwisie:
        </Information>
        <InputStyle>
          <input type="text" id="fname" name="fname" />
        </InputStyle>

        <Information>
          Nazwa kategorii w programie Mercurius:
        </Information>
        <InputStyle>
          <input type="text" id="fname" name="fname" />
        </InputStyle>

        <Information>
          Liczba dostęnych sztuk:
        </Information>
        <InputStyle>
          <input type="text" id="fname" name="fname" />
        </InputStyle>

        <Information>
          Czy produkt został sprzedany:
        </Information>
        <InputStyle>
          <input type="text" id="fname" name="fname" />
        </InputStyle>

        <Information>
          Cena zakupu:
        </Information>
        <InputStyle>
          <input type="text" id="fname" name="fname" />
        </InputStyle>

        <Information>
          Cena w jakiej został wystawiony:
        </Information>
        <InputStyle>
          <input type="text" id="fname" name="fname" />
        </InputStyle>

        <Information>
          Czy wysyłka jest możliwa poprzez portal
        </Information>
        <InputStyle>
          <input type="text" id="fname" name="fname" />
        </InputStyle>

        <Information>
          Jeżeli tak, cena wysyłki
        </Information>
        <InputStyle>
          <input type="text" id="fname" name="fname" />
        </InputStyle>

        <Information>
          Kwota prowizji
        </Information>
        <InputStyle>
          <input type="text" id="fname" name="fname" />
        </InputStyle>

        <Information>
          Nazwa konta na jakim jest wystawiony produkt
        </Information>
        <InputStyle>
          <input type="text" id="fname" name="fname" />
        </InputStyle>

        <Information>
          Data utworzenia produktu
        </Information>
        <InputStyle>
          <input type="text" id="fname" name="fname" />
        </InputStyle>

        <Information>
          Data ostatniej modyfikacji produktu
        </Information>
        <InputStyle>
          <input type="text" id="fname" name="fname" />
        </InputStyle>

        <Information>
          Czy produkt jest już opublikowany
        </Information>
        <InputStyle>
          <input type="text" id="fname" name="fname" />
        </InputStyle>

        <Information>
          Link do aukcji
        </Information>
        <InputStyle>
          <input type="text" id="fname" name="fname" />
        </InputStyle>


        <Picture>
          Dołącz zdjecie produktu
        </Picture>

        <Send>
          <input type="submit" value="Wyślij" />
        </Send>

      </Container>




      <RouteLink to={APP_PAGE.SALES}>
        <Button title="Powrót do panelu sprzedaży" />
      </RouteLink>
      <RouteLink to={APP_PAGE.HOME}>
        <Button title="Powrót do strony głównej" />
      </RouteLink>

    </ProductAreaStyled>
  )
}

export default ProductArea;