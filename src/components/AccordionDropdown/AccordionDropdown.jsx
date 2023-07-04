import { Fragment, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
  Checkbox,
} from "@material-tailwind/react";
import { BsChevronCompactUp } from "react-icons/bs";

const sortOptions = [
  { name: "Most Popular", href: "#", current: true },
  { name: "Best Rating", href: "#", current: false },
  { name: "Newest", href: "#", current: false },
  { name: "Price: Low to High", href: "#", current: false },
  { name: "Price: High to Low", href: "#", current: false },
];
const subCategories = [
  { name: "Totes", href: "#" },
  { name: "Backpacks", href: "#" },
  { name: "Travel Bags", href: "#" },
  { name: "Hip Bags", href: "#" },
  { name: "Laptop Sleeves", href: "#" },
];
const filters = [
  {
    id: "color",
    name: "Color",
    options: [
      { value: "white", label: "White", checked: false },
      { value: "beige", label: "Beige", checked: false },
      { value: "blue", label: "Blue", checked: true },
      { value: "brown", label: "Brown", checked: false },
      { value: "green", label: "Green", checked: false },
      { value: "purple", label: "Purple", checked: false },
    ],
  },
  {
    id: "category",
    name: "Category",
    options: [
      { value: "new-arrivals", label: "New Arrivals", checked: false },
      { value: "sale", label: "Sale", checked: false },
      { value: "travel", label: "Travel", checked: true },
      { value: "organization", label: "Organization", checked: false },
      { value: "accessories", label: "Accessories", checked: false },
    ],
  },
  {
    id: "size",
    name: "Size",
    options: [
      { value: "2l", label: "2L", checked: false },
      { value: "6l", label: "6L", checked: false },
      { value: "12l", label: "12L", checked: false },
      { value: "18l", label: "18L", checked: false },
      { value: "20l", label: "20L", checked: false },
      { value: "40l", label: "40L", checked: true },
    ],
  },
];

export default function AccordionDropdown() {
  const [openMenu, setOpenMenu] = useState(false);

  const [openAcc1, setOpenAcc1] = useState(true);
  const [openAcc2, setOpenAcc2] = useState(true);
  const [openAcc3, setOpenAcc3] = useState(true);

  const handleOpenAcc1 = () => {
    setOpenAcc1((cur) => !cur);
    openAcc1 ? setOpenMenu(true) : setOpenMenu(false);
  };
  const handleOpenAcc2 = () => setOpenAcc2((cur) => !cur);
  const handleOpenAcc3 = () => setOpenAcc3((cur) => !cur);

  return (
    <Fragment>
      <Accordion open={openAcc1}>
        <AccordionHeader className="" onClick={handleOpenAcc1}>
          Color
          <BsChevronCompactUp
            strokeWidth={2.5}
            className={`h-3.5 w-3.5 transition-transform ${
              openMenu ? "rotate-180" : ""
            }`}
          />
        </AccordionHeader>
        <AccordionBody className="flex flex-col">
          {filters[0].options.map((color) => (
            <Checkbox key={color.value} label={color.value} />
          ))}
        </AccordionBody>
      </Accordion>
      <Accordion open={openAcc2}>
        <AccordionHeader onClick={handleOpenAcc2}>Category</AccordionHeader>
        <AccordionBody className="flex flex-col">
          {filters[1].options.map((category) => (
            <Checkbox key={category.value} label={category.value} />
          ))}
        </AccordionBody>
      </Accordion>
      <Accordion open={openAcc3}>
        <AccordionHeader onClick={handleOpenAcc3}>Size</AccordionHeader>
        <AccordionBody>
          {filters[2].options.map((size) => (
            <Checkbox key={size.value} label={size.value} />
          ))}
        </AccordionBody>
      </Accordion>
    </Fragment>
  );
}
