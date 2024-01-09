import React, { useState } from "react";
import Styles from "./styles.module.css";

import cleanerAnimationJson from "@/assets/animations/json/cleaner.json";

import useAnimation from "@/hooks/useAnimation";
import { useTranslation } from "react-i18next";

import SelectComponent from "@/components/atoms/Select";
import ModalComponent from "@/components/molecules/Modal";
import { CheckboxGroupComponent } from "@/components/molecules/CheckboxGroup";
import DialogComponent from "@/components/organisms/Dialog";
interface IInteractiveFormSection {
  title: string;
  onButtonClick: () => void;
}

const InteractiveFormSection = ({
  title,
  onButtonClick,
}: IInteractiveFormSection) => {
  const [itemSelected, setItemSelected] = useState("");
  const { t } = useTranslation();

  const itemsToSelect = [
    { id: 1, key: "1", value: "Limpieza" },
    { id: 2, key: "2", value: "Mantenimiento" },
  ];

  const cleanerAnimation = useAnimation({
    animationJson: cleanerAnimationJson,
    isLoop: true,
  });

  const handleSelectItemChanges = (e: any) => {
    const itemValue = itemsToSelect.filter((element) => element.key === e)[0]
      .value;

    setItemSelected(itemValue);
  };

  const handleClickNextStep = () => {};

  return (
    <div className={Styles.container}>
      {cleanerAnimation}
      <h1 className={Styles.title}>{title}</h1>
      <section className={Styles.section}>
        <SelectComponent
          placeholder={t("Home.SelectProfessional")}
          label="Profesion"
          items={itemsToSelect}
          onValueChange={handleSelectItemChanges}
        />

        <DialogComponent
          buttonDispatchName={"Next"}
          body={<h1>hola</h1>}
          footer={<h2>welcome</h2>}
        />
      </section>
    </div>
  );
};

export default InteractiveFormSection;
