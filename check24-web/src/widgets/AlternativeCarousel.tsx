"use client";

import { DotButton, useDotButton } from "../components/ui/EmblaCarouselDotButton";

import Esim from "@/components/Esim";
import RentalCar from "@/components/RentalCar";
import TravelInsurance from "@/components/TravelInsurance";

import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "../components/ui/EmblaCarouselArrowButtons";
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

  const title = "Unsere Services für Ihre bevorstehende Reise";

  return (
    <section className="embla">
      {title && (
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-4">
          {title}
        </h2>
      )}
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
