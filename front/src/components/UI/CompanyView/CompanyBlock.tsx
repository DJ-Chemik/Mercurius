import { CompanyStyle } from "./Company.styled";
import { CompanyText } from "./Company.styled";

const CompanyBlock = (props: any) => {
  return (
    <CompanyStyle>
      <img src={props.img_src} alt="logo" width="240" height="120" />
      <CompanyText>{props.title}</CompanyText>
    </CompanyStyle>
  );
};

export default CompanyBlock;
