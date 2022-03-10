import CompanyBlock from "./CompanyBlock";
import { CompanyProps } from "./CompanyBlock";

interface CompanySectorProps {
  items: Array<CompanyProps>;
}

const Companies = (props: CompanySectorProps) => {
  return (
    <ul>
      {props.items.map(
        (company: { title: string; img_src: string; id: string }) => (
          <CompanyBlock
            id={company.id}
            title={company.title}
            img_src={company.img_src}
          />
        )
      )}
    </ul>
  );
};

export default Companies;
