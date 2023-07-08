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
      { value: "white", label: "White" },
      { value: "beige", label: "Beige" },
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
  const [openMenu2, setOpenMenu2] = useState(false);
  const [openMenu3, setOpenMenu3] = useState(false);
  const [checked , setChecked] = useState([])

  const [openAcc1, setOpenAcc1] = useState(true);
  const [openAcc2, setOpenAcc2] = useState(true);
  const [openAcc3, setOpenAcc3] = useState(true);

  const handleOpenAcc1 = () => {
    setOpenAcc1((cur) => !cur);
    openAcc1 ? setOpenMenu(true) : setOpenMenu(false);
  };
  const handleOpenAcc2 = () => {setOpenAcc2((cur) => !cur)
    openAcc2 ? setOpenMenu2(true) : setOpenMenu2(false);
  };
  const handleOpenAcc3 = () => {setOpenAcc3((cur) => !cur);
    openAcc3 ? setOpenMenu3(true) : setOpenMenu3(false);
  }

  const handleChange = (id) => {
    setChecked((prev) => {
      const isChecked = prev.includes(id);
      if (isChecked) {
        return prev.filter((value) => value !== id);
      } else {
        return [...prev, id];
      }
    });

  };
  console.log(checked);
  return (
    
    <Fragment >
      <Accordion open={openAcc1} className="">
        <AccordionHeader onClick={handleOpenAcc1}>
          <span className="flex-1">Color</span>
          <BsChevronCompactUp
            strokeWidth={2.5}
            className={`h-3.5 w-3.5 transition-transform ${
              openMenu ? "rotate-180" : ""
            }`}
          />
        </AccordionHeader>
          <AccordionBody className="flex flex-col overflow-visible">
          {filters[0].options.map((color) => {
            return (
              <div className="inline-block  flex items-center " >
                <Checkbox 
                  className="overflow-visible before:w-0 "
                  containerProps={{ className: "p-0 my-[0.75rem] mr-[0.75rem] rounded" }}
                  checked={checked.includes(color.value)}
                  onChange={() => handleChange(color.value)}
                  />
                  <span className="text-gray-600" style= {{cursor: 'pointer', userSelect: 'none'}} onClick={() => handleChange(color.value)}>{color.label}</span>
              </div>
            );
          })}
          </AccordionBody>
      </Accordion>
      <Accordion open={openAcc2}>
        <AccordionHeader onClick={handleOpenAcc2}>
        <span className="flex-1">Category</span>
        <BsChevronCompactUp
            strokeWidth={2.5}
            className={`h-3.5 w-3.5 transition-transform ${
              openMenu2 ? "rotate-180" : ""
            }`}
          />
        </AccordionHeader>
        
        <AccordionBody className="flex flex-col">
          {filters[1].options.map((category) => (
            <div className="inline-block  flex items-center " >
              <Checkbox
              className=" overflow-visible before:w-0"
              containerProps={{
                className: "p-0 my-[0.75rem] mr-[0.75rem] rounded "
              }}
              checked={checked.includes(category.value)}
              onChange={() => handleChange(category.value)}
              key={category.value}
              />
              <span className="text-gray-600" style= {{cursor: 'pointer', userSelect: 'none'}} 
              onClick={() => handleChange(category.value)}>{category.label}</span>
          </div>
          ))}
        </AccordionBody>
      </Accordion>
      <Accordion open={openAcc3}>
        <AccordionHeader onClick={handleOpenAcc3}>
          <span className="flex-1">Size</span>
        <BsChevronCompactUp
            strokeWidth={2.5}
            className={` h-3.5 w-3.5 transition-transform ${
              openMenu3 ? "rotate-180" : ""
            }`}
          />
        </AccordionHeader>
        <AccordionBody>
          {filters[2].options.map((size) => (
            <div className="inline-flex items-center">
              <Checkbox
                className="overflow-visible before:w-0 mxr-[15px]"
                containerProps={{
                  className: "p-0 my-[0.75rem] rounded"
                }}
                checked={checked.includes(size.value)}
                onChange={() => handleChange(size.value)}
                key={size.value}
              />
            <span className=" w-[20px] mx-[12px] text-gray-600 mt-[5px]" style={{ cursor: 'pointer', userSelect: 'none' }}
                onClick={() => handleChange(size.value)}
            >{size.label}</span>
          </div>
          
            
          ))}
        </AccordionBody>
      </Accordion>
    </Fragment>
  );
}
