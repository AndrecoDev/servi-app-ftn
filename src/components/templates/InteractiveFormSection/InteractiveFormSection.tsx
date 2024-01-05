import React, { useState } from "react";
import Styles from "./styles.module.css";

import cleanerAnimationJson from "@/assets/animations/json/cleaner.json";

import SelectComponent from "@/components/atoms/Select";
import ModalComponent from "@/components/molecules/Modal";
import { CheckboxGroupComponent } from "@/components/molecules/CheckboxGroup";

import useAnimation from "@/hooks/useAnimation";
import { useTranslation } from "react-i18next";
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
    { id: 1, key: "1", value: "Oficios varios" },
    { id: 2, key: "2", value: "Limpieza" },
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

        <ModalComponent
          buttonName={"Siguiente paso"}
          header={""}
          buttonDisabled={!itemSelected}
          body={<CheckboxGroupComponent />}
        />
      </section>
    </div>
  );
};

export default InteractiveFormSection;
