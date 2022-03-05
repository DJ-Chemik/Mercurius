import CompanyBlock from "./CompanyBlock";

const Companies = (props: any) => {
  return (
    <div>
      <CompanyBlock
        title={props.items[0].title}
        img_src={props.items[0].img_src}
      />
      <CompanyBlock
        title={props.items[1].title}
        img_src={props.items[1].img_src}
      />
      <CompanyBlock
        title={props.items[2].title}
        img_src={props.items[2].img_src}
      />
    </div>
  );
};

export default Companies;
