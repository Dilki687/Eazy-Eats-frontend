import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
} from "@mui/material";
import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Category } from "@mui/icons-material";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

// const ingredients=[
//     {
//         category:"Nuts & Seeds",
//         ingredients:"Cashews"
//     },
//     {
//         category:"Protein",
//         ingredients:"Protein"
//     },
//     {
//         category:"Protein",
//         ingredients:"Bacon Strips"

//     }
// ]

const demo = [
  {
    category: "Nuts & Seeds",
    ingredients: ["Cashews"],
  },
  {
    category: "Protein",
    ingredients: ["Ground beef", "Bacon Strips"],
  },
];

const MenuCard = () => {
  const handleCheckBoxChange = (value) => {
    console.log("value");
  };
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1-content"
        id="panel1-header"
      >
        <div className="lg:flex items-center justify-between">
          <div className="lg:flex items-center lg:gap-5">
            <img
              className="w-[7rem] h-[7rem] object-cover"
              src="https://images.pexels.com/photos/1199957/pexels-photo-1199957.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt=""
            />
            <div className="space-y-1 lg:space-y-5 lg:max-w-2xl">
              <p className="font-semibold text-xl">Burger</p>
              <p>$6</p>
              <p className="text-gray-400">
                A juicy, perfectly seasoned patty nestled in a soft, toasted
                bun, topped with melted cheese, crisp lettuce, ripe tomatoes,
                and a dollop of tangy sauce—every bite bursts with flavor and
                satisfaction.
              </p>
            </div>
          </div>
        </div>
      </AccordionSummary>
      <AccordionDetails>
        <form>
          <div className="flex gap-5 flex-wrap">
            {demo.map((item) => (
              <div>
                <p>{item.category}</p>
                <FormGroup>
                  {item.ingredients.map((item) => (
                    <FormControlLabel
                      control={
                        <Checkbox onChange={() => handleCheckBoxChange(item)} />
                      }
                      label={item}
                    />
                  ))}
                </FormGroup>
              </div>
            ))}
          </div>
          <div className="pt-5">
            <Button variant="contained" disabled={false} type="submit">
              {true ? "Add to Cart" : "Out of Stock"}
            </Button>
          </div>
        </form>
      </AccordionDetails>
    </Accordion>
  );
};

export default MenuCard;
