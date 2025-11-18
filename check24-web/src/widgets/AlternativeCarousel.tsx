"use client";

import React from "react";
import { DotButton, useDotButton } from "./EmblaCarouselDotButton";

import Image from "next/image";
import location from "../../public/location.svg";

import Esim from "@/components/Esim";
import RentalCar from "@/components/RentalCar";
import TravelInsurance from "@/components/TravelInsurance";

import CustomDatePicker from "@/components/DatePicker";
import InsurancePicker from "@/components/InsurancePicker";

import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";
import useEmblaCarousel from "embla-carousel-react";

const AlternativeCarousel = (props: any) => {
  const { slides, options } = props;
  const emblaOptions = {
    align: "start",
    containScroll: "trimSnaps",
    ...(options || {}),
  };
  const [emblaRef, emblaApi] = useEmblaCarousel(emblaOptions);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  const displayItems = [
    {
      src: "https://media.istockphoto.com/id/1155872315/de/foto/wei%C3%9Fe-sim-karte-auf-wei%C3%9Fem-hintergrund.webp?s=2048x2048&w=is&k=20&c=mkA8nEL6B8kUDrQrbs9LJNiGiHKrJ0WCn9vH0mO4eNg=",
      alt: "Placeholder 1",
      label: "Argentinien",
    },
    {
      src: "https://media.istockphoto.com/id/2190195833/de/foto/ein-paar-das-in-einem-auto-sitzt-und-die-schl%C3%BCssel-von-einem-autoh%C3%A4ndler-erh%C3%A4lt.webp?s=2048x2048&w=is&k=20&c=pR3oy0-MkDUA_0AgXlFxoDpUQdxLC0cnw_czwoQUmkU=",
      alt: "Placeholder 2",
    },
    {
      src: "https://media.istockphoto.com/id/2208573887/de/foto/mutter-und-tochter-genie%C3%9Fen-einen-entspannten-tag-am-see.webp?s=2048x2048&w=is&k=20&c=rbEVKk5RCjtxxdzdONDwQ2DeRCY9tR5qLe12cehuGSo=",
      alt: "Placeholder 3",
    },
    {
      src: "https://picsum.photos/seed/d/1200/675",
      alt: "Placeholder 4",
    },
    {
      src: "https://picsum.photos/seed/e/1200/675",
      alt: "Placeholder 5",
    },
  ];

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container p-1">
          <div className="embla__slide">
            <Esim />
          </div>

          <div className="embla__slide">
            <RentalCar />
          </div>

          <div className="embla__slide">
            <TravelInsurance />
          </div>
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

        <div className="embla__dots">
          {scrollSnaps.map((_: any, index: any) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={"embla__dot".concat(
                index === selectedIndex ? " embla__dot--selected" : ""
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AlternativeCarousel;
