import { useEffect, useState } from "react";
const UseIntersecting = () => {
  const [interSticky, setInterSticky] = useState("");
  const [interHomePadding, setInterHomePadding] = useState("");

  const obs = new IntersectionObserver(
    function (entires) {
      const ent = entires[0];

      if (ent.isIntersecting === false) {
        setInterSticky("sticky-inter-ob");
        setInterHomePadding("home-padding");
      } else {
        setInterSticky(" ");
        setInterHomePadding(" ");
      }
    },
    {
      root: null,
      threshold: 0,
      rootMargin: "-90px",
    }
  );

  const homeElement = document.querySelectorAll(".home-section");

  homeElement.forEach((el) => {
    obs.observe(el);
  });

  return { interSticky, interHomePadding };
};

export default UseIntersecting;
