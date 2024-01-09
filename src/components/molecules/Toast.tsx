"use client";

import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";
import ButtomComponent from "../atoms/Button";

interface IToastMoleculeProps {
  buttonName: string;
  title: string;
  description: string;
  altText?: string;
  toastText: string;
}

const ToastComponent = ({
  buttonName,
  title,
  description,
  altText = "",
  toastText,
}: IToastMoleculeProps) => {
  const { toast } = useToast();

  return (
    <ButtomComponent
      variant="outline"
      onClick={() => {
        toast({
          title,
          description,
          action: <ToastAction altText={altText}>{toastText}</ToastAction>,
        });
      }}
    >
      {buttonName}
    </ButtomComponent>
  );
};

export default ToastComponent;
