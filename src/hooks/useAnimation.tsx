import React from "react";
import { useLottie } from "lottie-react";

interface IuseAnimation {
  animationJson: any;
  isLoop: boolean;
}

const useAnimation = ({ animationJson, isLoop }: IuseAnimation) => {
  const options = {
    animationData: animationJson,
    loop: isLoop,
  };

  const { View } = useLottie(options);

  return <>{View}</>;
};

export default useAnimation;
