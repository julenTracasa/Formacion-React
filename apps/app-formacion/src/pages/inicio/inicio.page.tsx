import React from "react";
import "./inicio.page.css";
import { useTranslation } from "react-i18next";

export type InicioPageProps = object;

const InicioPage: React.FC<InicioPageProps> = () => {
  const { t } = useTranslation();
  return <div>{t("inicio.titulo")}</div>;
};

export default InicioPage;
