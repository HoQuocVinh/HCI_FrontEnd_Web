import axios from "api/axios";
import { IconArrowDown } from "components/icon/Icon";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [collection, setCollection] = useState<any>([]);
  const [style, setStyle] = useState<any>([]);
  const [listCollection, setlistCollection] = useState<any>([]);
  const [listStyle, setlistStyle] = useState<any>([]);

  const MENU_CHILD_ITEM = [
    {
      heading: "Style",
      items: listStyle,
    },
    {
      heading: "Collection",
      items: listCollection,
    },
    {
      heading: "Gender",
      items: [
        { title: "Male", to: "/gender/male" },
        { title: "Female", to: "/gender/femeale" },
      ],
    },
    {
      heading: "Age",
      items: [
        { title: "Teenager (13 - 19 years old)", to: "/age/teenager" },
        { title: "Young adult (20 - 29 years old", to: "/age/young-adult" },
        { title: "Adult (30 - 59 years old)", to: "/age/adult" },
        { title: "Senior (60 years old and above)", to: "/age/senior" },
      ],
    },
  ];

  function fetchDataCollection() {
    const response = {
      orders: [],
      filter: [],
      size: 20,
      totalElement: 0,
      pageNumber: 1,
    };
    axios
      .post("product/collection", response)
      .then((response) => {
        const { result } = response.data;
        const newListCollection = result.data.map((element: any) => ({
          title: element.name,
          to: `collection/${element.name.toLowerCase().replace(/ /g, "-")}/${
            element.id
          }`,
        }));
        setlistCollection(newListCollection);
      })
      .catch((error) => console.log(error));
  }

  function fetchDataStyle() {
    const response = {
      orders: [],
      filter: [],
      size: 20,
      totalElement: 0,
      pageNumber: 1,
    };
    axios
      .post("product/style", response)
      .then((response) => {
        const { result } = response.data;
        const newListStyle = result.data.map((element: any) => ({
          title: element.name,
          to: `style/${element.name.toLowerCase().replace(/ /g, "-")}/${
            element.id
          }`,
        }));
        setlistStyle(newListStyle);
      })
      .catch((error) => console.log(error));
  }

  useEffect(() => {
    fetchDataCollection();
    fetchDataStyle();
  }, []);

  return (
    <nav>
      <ul id="menu">
        <li className="menu__item">
          <Link to="">Introduction</Link>
        </li>
        <li className="menu__item">
          <Link to="" className="flex items-center">
            Products
            <i className="menu__icon ml-1">
              <IconArrowDown />
            </i>
          </Link>
          <div className="menu__child">
            <div className="mx-auto flex max-w-[calc(1152px+20px)] px-[10px]">
              {MENU_CHILD_ITEM.map((menu: any, index: number) => (
                <div className="menu__child-item" key={index}>
                  <h4 className="menu__child-item-heading">{menu.heading}</h4>
                  {menu.items.map((item: any, index: number) => (
                    <ul className="menu__child-item-list" key={index}>
                      <li>
                        <Link to={item.to}>{item.title}</Link>
                      </li>
                    </ul>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </li>
        <li className="menu__item">
          <Link to="">News</Link>
        </li>
        <li className="menu__item">
          <Link to="">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
