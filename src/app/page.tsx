"use client";
import "../config/Language/index";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation();

  return (
    <main
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      Content
    </main>
  );
}
