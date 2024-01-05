"use client";
import { Navbar, TextInput } from "keep-react";
import {
  CaretDown,
  FacebookLogo,
  InstagramLogo,
  MagnifyingGlass,
  TwitterLogo,
} from "phosphor-react";
import ButtonComponent from "../atoms/Button";

import logoIcon from "@/assets/icons/webp/logo.webp";
import Image from "next/image";

export const NavbarComponent = () => {
  return (
    <Navbar fluid={true}>
      <Navbar.Container className="flex items-center justify-between">
        <Navbar.Brand>
          <Image src={logoIcon} alt="RapidPro 360" width="120" height="80" />
        </Navbar.Brand>
        <Navbar.Container className="flex items-center gap-6">
          <Navbar.Container
            tag="ul"
            className="lg:flex hidden items-center justify-between gap-4"
          >
            {/* <TextInput
              id="#id-10"
              placeholder="Search anything"
              color="gray"
              sizing="sm"
              type="text"
              addon={<MagnifyingGlass size={20} color="#5E718D" />}
              addonPosition="left"
            /> */}
            <ButtonComponent>Únete a la comunidad</ButtonComponent>
            <Navbar.Link
              icon={<FacebookLogo size={20} color="#444" />}
              iconAnimation={false}
            />
            <Navbar.Link
              icon={<InstagramLogo size={20} color="#444" />}
              iconAnimation={false}
            />
            <Navbar.Link
              icon={<TwitterLogo size={20} color="#444" />}
              iconAnimation={false}
            />
          </Navbar.Container>
          <Navbar.Container className="flex gap-2">
            <Navbar.Toggle className="block" />
          </Navbar.Container>
        </Navbar.Container>

        <Navbar.Collapse
          collapseType="sidebar"
          className="fixed right-0 top-2 bg-white p-6 lg:!w-2/6 xl:!w-1/6 md:!w-2/6 w-1/2"
        >
          <Navbar.Container tag="ul" className="flex flex-col gap-5">
            <ButtonComponent>Únete como Rapider</ButtonComponent>

            {/* <Navbar.Link
              linkName="Home"
              icon={<CaretDown size={20} />}
              className="!py-0"
            /> */}

            <Navbar.Link linkName="Noticias" className="!py-0" />
            <Navbar.Link linkName="Quienes somos" className="!py-0" />
          </Navbar.Container>
        </Navbar.Collapse>
      </Navbar.Container>
    </Navbar>
  );
};
