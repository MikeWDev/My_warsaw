import { useState } from "react";
import useScreenSize from "../hooks/useScreenSize";
import { useEffect } from "react";
const GoogleMap = () => {
  const screenSize = useScreenSize();
  const [mobileWidth, setMobileWidth] = useState("100%");

  useEffect(() => {
    if (screenSize.width < 800) {
      setMobileWidth("160%");
    } else {
      setMobileWidth("100%");
    }
  }, [screenSize.width]);

  return (
    <>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1436.2310094996135!2d-0.9709143169551966!3d51.45409996744825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48769be0ae235651%3A0x5426ec75e95cc0cf!2sMy%20Warsaw%20-%20Polish%20Street%20Food!5e0!3m2!1sen!2spl!4v1703689363117!5m2!1sen!2spl"
        width="100%"
        height={`${mobileWidth}`}
        style={{ border: "0" }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </>
  );
};

export default GoogleMap;
