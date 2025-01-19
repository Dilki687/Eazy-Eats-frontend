import { Card, Button } from "@mui/material";
import React from "react";

export const OrderCard = () => {
  return (
    <Card className="flex justify-between items-center p-5">
      <div className="flex items-center space-x-5">
        <img
        className="h-16 w-16"
          src="https://media.istockphoto.com/id/1410130688/photo/mutton-biryani-served-in-a-golden-dish-isolated-on-dark-background-side-view-indian-food.jpg?b=1&s=612x612&w=0&k=20&c=DiaW0yTvt1-ydUk_f_i7YyJ8KoS8ODeHeGlJawwS0o0="
          alt=""
        />
        <div>
            <p>Biriyani</p>
            <p>$4</p>
        </div>
      </div>
      <div>
        <Button className="cursor-not-allowed">Completed</Button>
      </div>
    </Card>
  );
};
