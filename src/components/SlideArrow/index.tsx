import { ArrowForwardIos as ArrowRight } from "@styled-icons/material-outlined/ArrowForwardIos";
import { ArrowBackIos as ArrowLeft } from "@styled-icons/material-outlined/ArrowBackIos";
import { CustomArrowProps } from "react-slick";

const NextArrow = ({
  currentSlide,
  slideCount,
  side,
  ...props
}: CustomArrowProps & { side: "right" | "left" }) => (
  <div {...props}>{side === "right" ? <ArrowRight /> : <ArrowLeft />}</div>
);

export default NextArrow;
