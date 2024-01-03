"use client";
import { SetStateAction, useState } from "react";
import { CheckboxGroup } from "keep-react";
import ButtonComponent from "./Button";

export const CheckboxGroupComponent = () => {
  const [selected, setSelected] = useState("");

  const handleOptionChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setSelected(event.target.value);
  };

  return (
    <form className="space-y-4 p-1">
      <h3 style={{ fontSize: "18px" }}>
        When would you like the job to start?
      </h3>
      <CheckboxGroup
        title="Limpiar casa o apartamento"
        checkboxType="circle"
        checkboxPosition="left"
        fieldName="Circle Checkbox"
        value="value5"
        selected={selected}
        onOptionChange={handleOptionChange}
      />
      <CheckboxGroup
        title="Limpiar oficina"
        checkboxType="circle"
        checkboxPosition="left"
        fieldName="Circle Checkbox"
        value="value6"
        selected={selected}
        onOptionChange={handleOptionChange}
      />
      <CheckboxGroup
        title="Limpiar Airbnb"
        checkboxType="circle"
        checkboxPosition="left"
        fieldName="Circle Checkbox"
        value="value7"
        selected={selected}
        onOptionChange={handleOptionChange}
      />
      <CheckboxGroup
        title="Otro"
        checkboxType="circle"
        checkboxPosition="left"
        fieldName="Circle Checkbox"
        value="value8"
        selected={selected}
        onOptionChange={handleOptionChange}
      />
      <ButtonComponent name="Volver" type="outlineGray" />
    </form>
  );
};
