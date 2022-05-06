import {
  CategoryTreeHeader,
  CategoryTreeStyled,
  CategoryTreeHeaderList,
  CategoryTreeHeaderListItem,
  CategoryTreeHeaderButton,
  CategoryTreeSubcategoriesDiv,
  CategoryTreeItemsDiv,
  CategoryTreeItemsList,
  CategoryTreeItemsListItem,
  CategoryTreeButton,
  CategoryTreeFooter,
} from "./MaintenanceAreaCategoryTree.styled";

import axios from "axios";
import { useEffect, useState } from "react";
import { InputWidth } from "../../UI/Input/Input.styled";

interface Category {
  id: number;
  name: string;
  position: number;
  parentId?: number;
  categoryId?: number;
  subcategoryId?: number;
}

const CategoryTree = () => {
  const data: Category[] = [];
  const [categories, setCategories] = useState(data);
  const [currentCategory, setCurrentCategory] = useState(0);
  const [subcategories, setSubcategories] = useState(data);
  const [subcategoriesToPrint, setSubcategoriesToPrint] = useState(data);
  const [currentSubcategory, setCurrentSubcategory] = useState(0);
  const [items, setItems] = useState(data);
  const [itemsToPrint, setItemsToPrint] = useState(data);
  const [charInput, setCharInput] = useState("");
  const [visibleItems, setVisibleItems] = useState(false);
  const [visibleSubs, setVisibleSubs] = useState(false);

  useEffect(() => {
    const getData = () => {
      axios.get("http://localhost:4000/categories").then((resp) => {
        setCategories(resp.data);
      });
      axios.get("http://localhost:4000/subcategories").then((resp) => {
        setSubcategories(resp.data);
      });
      axios.get("http://localhost:4000/items").then((resp) => {
        setItems(resp.data);
      });
    };
    getData();
  }, []);

  categories.sort((a, b) => {
    return a.position > b.position ? 1 : -1;
  });

  subcategories.sort((a, b) => {
    return a.position > b.position ? 1 : -1;
  });

  items.sort((a, b) => {
    return a.position > b.position ? 1 : -1;
  });

  const selectedCategory = (id: number) => {
    let subcategory: Array<Category> = [];
    setSubcategoriesToPrint([]);
    for (let i = 0; i < subcategories.length; i++) {
      if (subcategories[i].parentId === id) {
        subcategory.push(subcategories[i]);
      }
    }
    setSubcategoriesToPrint(subcategory);
    setVisibleSubs(true);
    setVisibleItems(false);
    return setCurrentCategory(id);
  };

  const selectedSubcategory = (id: number) => {
    let item: Array<Category> = [];
    setItemsToPrint([]);
    for (let i = 0; i < items.length; i++) {
      if (items[i].subcategoryId === id) {
        item.push(items[i]);
      }
    }
    setItemsToPrint(item);
    setVisibleItems(true);
    return setCurrentSubcategory(id);
  };

  const renderCategories = categories.map((val, key) => {
    return (
      <CategoryTreeHeaderListItem
        key={key}
        onClick={() => selectedCategory(val.id)}
      >
        {val.name}
      </CategoryTreeHeaderListItem>
    );
  });

  const renderSubcategories = subcategoriesToPrint.map((val, key) => {
    return (
      <CategoryTreeHeaderListItem
        key={key}
        onClick={() => selectedSubcategory(val.id)}
      >
        {val.name}
      </CategoryTreeHeaderListItem>
    );
  });

  let renderItems = itemsToPrint.map((val, key) => {
    return (
      <CategoryTreeItemsListItem key={key}>
        {val.name}
      </CategoryTreeItemsListItem>
    );
  });

  const addItem = (type: string) => {
    if (charInput === "") {
      window.alert("Dane są puste!");
      return;
    }
    let maxPosition = 0;
    switch (type) {
      case "category":
        for (let i = 0; i < categories.length; i++) {
          if (charInput === categories[i].name) {
            return window.alert("Kategoria " + charInput + " już istnieje!");
          }
        }
        if (categories.length !== 0) {
          maxPosition = categories[categories.length - 1].position + 1;
        }
        axios({
          method: "post",
          url: "http://localhost:4000/categories",
          data: {
            name: charInput,
            position: maxPosition,
          },
        });
        // axios.get("http://localhost:4000/categories").then((resp) => {
        //   setCategories(resp.data);
        // });
        window.location.reload();
        break;
      case "subcategory":
        for (let i = 0; i < subcategoriesToPrint.length; i++) {
          if (charInput === subcategoriesToPrint[i].name) {
            return window.alert("Podkategoria " + charInput + " już istnieje!");
          }
        }
        if (subcategoriesToPrint.length !== 0) {
          maxPosition =
            subcategoriesToPrint[subcategoriesToPrint.length - 1].position + 1;
        }
        axios({
          method: "post",
          url: "http://localhost:4000/subcategories",
          data: {
            name: charInput,
            position: maxPosition,
            parentId: currentCategory,
          },
        });
        // axios.get("http://localhost:4000/subcategories").then((resp) => {
        //   setSubcategories(resp.data);
        // });
        window.location.reload();
        break;
      case "item":
        for (let i = 0; i < itemsToPrint.length; i++) {
          if (charInput === itemsToPrint[i].name) {
            return window.alert("Przedmiot " + charInput + " już istnieje!");
          }
        }
        if (itemsToPrint.length !== 0) {
          maxPosition = itemsToPrint[itemsToPrint.length - 1].position + 1;
        }
        axios({
          method: "post",
          url: "http://localhost:4000/items",
          data: {
            name: charInput,
            position: maxPosition,
            categoryId: currentCategory,
            subcategoryId: currentSubcategory,
          },
        });
        // axios.get("http://localhost:4000/items").then((resp) => {
        //   setItems(resp.data);
        // });
        window.location.reload();
        break;
      default:
        console.log("POST Error!");
    }
  };

  const subcategoriesArea = (
    <CategoryTreeSubcategoriesDiv>
      <CategoryTreeHeaderList>
        {renderSubcategories}
        <CategoryTreeHeaderListItem>
          <CategoryTreeButton onClick={() => addItem("subcategory")}>
            +
          </CategoryTreeButton>
        </CategoryTreeHeaderListItem>
      </CategoryTreeHeaderList>
    </CategoryTreeSubcategoriesDiv>
  );

  const itemsArea = (
    <CategoryTreeItemsDiv>
      <CategoryTreeItemsList>
        {renderItems}
        <CategoryTreeItemsListItem>
          <CategoryTreeButton onClick={() => addItem("item")}>
            +
          </CategoryTreeButton>
        </CategoryTreeItemsListItem>
      </CategoryTreeItemsList>
    </CategoryTreeItemsDiv>
  );

  return (
    <CategoryTreeStyled>
      <CategoryTreeHeader>
        <CategoryTreeHeaderList>
          {renderCategories}
          <CategoryTreeHeaderListItem>
            <CategoryTreeHeaderButton onClick={() => addItem("category")}>
              +
            </CategoryTreeHeaderButton>
          </CategoryTreeHeaderListItem>
        </CategoryTreeHeaderList>
      </CategoryTreeHeader>
      {visibleSubs ? subcategoriesArea : null}
      {visibleItems ? itemsArea : null}
      <CategoryTreeFooter>
        Wpisz dane:
        <InputWidth
          id="input"
          maxLength={100}
          onChange={(e) => setCharInput(e.target.value)}
        ></InputWidth>
      </CategoryTreeFooter>
    </CategoryTreeStyled>
  );
};

export default CategoryTree;
