import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import ButtomComponent from "../atoms/Button";

interface IDialogProps {
  buttonDispatchName: string;
  headerTitle?: string;
  headerDescription?: string;
  body: React.ReactNode;
  footer: React.ReactNode;
}

const DialogComponent = ({
  buttonDispatchName,
  headerTitle,
  headerDescription,
  body,
  footer,
}: IDialogProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <ButtomComponent>{buttonDispatchName}</ButtomComponent>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{headerTitle}</DialogTitle>
          <DialogDescription>{headerDescription}</DialogDescription>
        </DialogHeader>
        {body}
        <DialogFooter>{footer}</DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DialogComponent;
