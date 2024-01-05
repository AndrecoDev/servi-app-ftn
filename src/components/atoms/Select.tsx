import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface IItem {
  id: string | number;
  key: string;
  value: string | number;
}

const SelectComponent: React.FC<any> = (props) => {
  return (
    <Select {...props}>
      <SelectTrigger className="h-[50px]">
        <SelectValue placeholder={props.placeholder} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>{props.label}</SelectLabel>
          {props.items.map((e: IItem) => (
            <SelectItem key={e.id} value={e.key}>
              {e.value}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default SelectComponent;
