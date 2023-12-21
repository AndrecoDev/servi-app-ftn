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

interface ISelect {
  placeholder?: string;
  label?: string;
  items: IItem[];
}

const SelectComponent = ({ placeholder, label, items = [] }: ISelect) => {
  return (
    <Select>
      <SelectTrigger className="">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>{label}</SelectLabel>
          {items.map((e: IItem) => (
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
