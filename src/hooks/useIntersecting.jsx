import $ from "jquery";
import { useEffect, useState } from "react";
const UseIntersecting = () => {
  const [intersectingState, setIntersectingState] = useState(true);

  useEffect(() => {
    const obs = new IntersectionObserver(
      function (entires) {
        const ent = entires[0];

        if (ent.isIntersecting === false) {
          setIntersectingState(false);
        } else {
          setIntersectingState(true);
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
  }, []);

  return intersectingState;
};

export default UseIntersecting;
