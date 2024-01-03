import React from "react";
import Styles from "./styles.module.css";

import ButtonComponent from "@/components/atoms/Button";
import SelectComponent from "@/components/atoms/Select";

import useAnimation from "@/hooks/useAnimation";
import cleanerAnimationJson from "@/assets/animations/json/cleaner.json";
import ModalComponent from "@/components/molecules/Modal";
import { CheckboxGroupComponent } from "@/components/atoms/CheckboxGroup";

import { useTranslation } from "react-i18next";
interface IInteractiveFormSection {
  title: string;
  onButtonClick: () => void;
}

const InteractiveFormSection = ({
  title,
  onButtonClick,
}: IInteractiveFormSection) => {
  const itemsToSelect = [{ id: 1, key: "1", value: "Oficios varios" }];
  const { t } = useTranslation();

  const cleanerAnimation = useAnimation({
    animationJson: cleanerAnimationJson,
    isLoop: true,
  });

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
        />

        <ModalComponent
          buttonName={"Siguiente paso"}
          header={""}
          body={<CheckboxGroupComponent />}
        />
      </section>
    </div>
  );
};

export default InteractiveFormSection;
