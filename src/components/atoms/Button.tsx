import React, { useState } from "react";
import { Button } from "keep-react";

interface IButtonComponentProps {
  name: string;
  onClick?: () => void;
  type: string;
  isCircle?: boolean;
  size?: string;
}

const ButtonComponent: React.FC<IButtonComponentProps> = ({
  name,
  onClick,
  type,
  isCircle = false,
  size = "md",
}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const handleClick = async () => {
    if (onClick) {
      try {
        setIsLoading(true);
        onClick();
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <Button
      size={size}
      width="full"
      onClick={handleClick}
      type={type}
      circle={isCircle}
      // isLoading={isLoading}
    >
      {name}
    </Button>
  );
};

export default ButtonComponent;
