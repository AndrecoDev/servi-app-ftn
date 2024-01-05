import React from "react";
import { Button, ButtonProps } from "@/components/ui/button";

interface IButtomComponentProps extends ButtonProps {}

const ButtomComponent: React.FC<IButtomComponentProps> = (props) => {
  return <Button {...props}>{props.children}</Button>;
};

export default ButtomComponent;
