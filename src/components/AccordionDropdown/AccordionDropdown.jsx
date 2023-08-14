import { Fragment, useEffect, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
  Checkbox,
} from "@material-tailwind/react";
import { BsChevronCompactUp } from "react-icons/bs";

export default function AccordionDropdown({
  categories,
  setProductByCategory,
  data,
}) {
  const [openMenu, setOpenMenu] = useState(false);
  const [openMenu2, setOpenMenu2] = useState(false);

  const [openAcc1, setOpenAcc1] = useState(true);
  const [openAcc2, setOpenAcc2] = useState(true);

  const [tarotCategory, setTarotCategory] = useState([]);
  const [oracleCategory, setOracleCategory] = useState([]);

  const [checked, setChecked] = useState([]);

  useEffect(() => {
    const tarot = categories.filter((cat) => cat.type === "Tarot");
    const oracle = categories.filter((cat) => cat.type === "Oracle");

    setTarotCategory(tarot);
    setOracleCategory(oracle);
  }, [categories]);

  const handleOpenAcc1 = () => {
    setOpenAcc1((cur) => !cur);
    openAcc1 ? setOpenMenu(true) : setOpenMenu(false);
  };
  const handleOpenAcc2 = () => {
    setOpenAcc2((cur) => !cur);
    openAcc2 ? setOpenMenu2(true) : setOpenMenu2(false);
  };

  const handleChecked = (e) => {
    if (e.target.checked) {
      setChecked((prevValues) => [...prevValues, e.target.value]);
    } else {
      setChecked((prevValues) =>
        prevValues.filter((value) => value !== e.target.value)
      );
    }
  };

  useEffect(() => {
    if (checked.length != 0) {
      const filter = data.filter((product) => {
        const productCatIDs = product.category.map((p) => p._id);
        return productCatIDs.some((cat) => checked.includes(cat));
      });
      setProductByCategory(filter);
    } else {
      setProductByCategory(data);
    }
  }, [checked]);

  return (
    <Fragment>
      <Accordion open={openAcc1} className="">
        <AccordionHeader onClick={handleOpenAcc1}>
          <span className="flex-1">Tarot</span>
          <BsChevronCompactUp
            strokeWidth={2.5}
            className={`h-3.5 w-3.5 transition-transform ${
              openMenu ? "rotate-180" : ""
            }`}
          />
        </AccordionHeader>
        <AccordionBody className="flex flex-col overflow-visible">
          {tarotCategory.map((tarotCat, index) => {
            return (
              <Checkbox
                key={index}
                id={tarotCat._id}
                value={tarotCat._id}
                label={tarotCat.categoryName}
                ripple={false}
                color="pink"
                onChange={handleChecked}
              />
            );
          })}
        </AccordionBody>
      </Accordion>
      <Accordion open={openAcc2}>
        <AccordionHeader onClick={handleOpenAcc2}>
          <span className="flex-1">Oracle</span>
          <BsChevronCompactUp
            strokeWidth={2.5}
            className={`h-3.5 w-3.5 transition-transform ${
              openMenu2 ? "rotate-180" : ""
            }`}
          />
        </AccordionHeader>

        <AccordionBody className="flex flex-col">
          {oracleCategory.map((oracleCat, index) => {
            return (
              <Checkbox
                key={index}
                id={oracleCat._id}
                value={oracleCat._id}
                label={oracleCat.categoryName}
                ripple={false}
                color="pink"
                onChange={handleChecked}
              />
            );
          })}
        </AccordionBody>
      </Accordion>
    </Fragment>
  );
}
