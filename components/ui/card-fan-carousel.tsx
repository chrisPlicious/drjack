"use client";

import Image from "next/image";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
} from "react";
import gsap from "gsap";

export interface FanCardItem {
  src: string;
  alt: string;
  name: string;
  width: number;
  height: number;
}

interface CardFanCarouselProps {
  cards: readonly FanCardItem[];
}

const FAN_POSITIONS = [
  { rotation: -21, scale: 0.7756, x: -30, y: 7.3, zIndex: 1 },
  { rotation: -14, scale: 0.8498, x: -22, y: 4, zIndex: 2 },
  { rotation: -7, scale: 0.9346, x: -11, y: 1.3, zIndex: 3 },
  { rotation: 0, scale: 1, x: 0, y: 0, zIndex: 10 },
  { rotation: 7, scale: 0.9346, x: 11, y: 1.3, zIndex: 3 },
  { rotation: 14, scale: 0.8498, x: 22, y: 4, zIndex: 2 },
  { rotation: 21, scale: 0.7756, x: 30, y: 7.3, zIndex: 1 },
] as const;

const CENTER_SLOT = 3;

function getWidthMultiplier(width: number) {
  if (width < 480) return 0.28;
  if (width < 640) return 0.38;
  if (width < 768) return 0.5;
  if (width < 1024) return 0.75;
  return 1;
}

function getHeightMultiplier(width: number) {
  let idealHeight: number;
  if (width < 480) idealHeight = 352;
  else if (width < 640) idealHeight = 416;
  else if (width < 768) idealHeight = 448;
  else if (width < 1024) idealHeight = 544;
  else idealHeight = 608;

  const availableHeight = window.innerHeight * 0.7;
  return availableHeight >= idealHeight ? 1 : availableHeight / idealHeight;
}

function getVisibleSlots(centerIndex: number, totalCards: number) {
  const slots = new Map<number, number>();

  for (let slot = 0; slot < Math.min(totalCards, FAN_POSITIONS.length); slot += 1) {
    const cardIndex =
      ((centerIndex + slot - CENTER_SLOT) % totalCards + totalCards) % totalCards;
    slots.set(cardIndex, slot);
  }

  return slots;
}

function Chevron({ direction }: { direction: "left" | "right" }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <polyline points={direction === "left" ? "15 18 9 12 15 6" : "9 18 15 12 9 6"} />
    </svg>
  );
}

export function CardFanCarousel({ cards }: CardFanCarouselProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const previousSlotsRef = useRef<Map<number, number>>(new Map());
  const directionRef = useRef<"left" | "right">("right");
  const hasEnteredRef = useRef(false);
  const isAnimatingRef = useRef(false);
  const [centerIndex, setCenterIndex] = useState(0);

  const goTo = useCallback(
    (nextIndex: number) => {
      if (isAnimatingRef.current || nextIndex === centerIndex || cards.length < 2) return;

      const forwardDistance = (nextIndex - centerIndex + cards.length) % cards.length;
      directionRef.current = forwardDistance <= cards.length / 2 ? "right" : "left";
      setCenterIndex(nextIndex);
    },
    [cards.length, centerIndex],
  );

  const cycle = useCallback(
    (direction: "left" | "right") => {
      if (isAnimatingRef.current || cards.length < 2) return;

      directionRef.current = direction;
      setCenterIndex((current) =>
        direction === "right"
          ? (current + 1) % cards.length
          : (current - 1 + cards.length) % cards.length,
      );
    },
    [cards.length],
  );

  useEffect(() => {
    const container = containerRef.current;
    if (!container || cards.length === 0) return;

    const cardElements = Array.from(
      container.querySelectorAll<HTMLElement>(".fan-card"),
    );
    const visibleSlots = getVisibleSlots(centerIndex, cards.length);
    const previousSlots = previousSlotsRef.current;
    const firstEntry = !hasEnteredRef.current;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const widthMultiplier = getWidthMultiplier(window.innerWidth);
    const heightMultiplier = getHeightMultiplier(window.innerWidth);

    isAnimatingRef.current = true;
    let completedCards = 0;
    const onComplete = () => {
      completedCards += 1;
      if (completedCards >= visibleSlots.size) {
        isAnimatingRef.current = false;
        hasEnteredRef.current = true;
      }
    };

    cardElements.forEach((cardElement, cardIndex) => {
      const slot = visibleSlots.get(cardIndex);
      if (slot === undefined) {
        gsap.set(cardElement, { opacity: 0, pointerEvents: "none" });
        return;
      }

      const position = FAN_POSITIONS[slot];
      const target = {
        xPercent: -50,
        x: `${position.x * widthMultiplier}rem`,
        y: `${position.y * heightMultiplier}rem`,
        rotation: position.rotation,
        scale: position.scale,
        opacity: 1,
        zIndex: position.zIndex,
        pointerEvents: "auto",
      };

      if (reducedMotion) {
        gsap.set(cardElement, target);
        onComplete();
        return;
      }

      if (firstEntry) {
        gsap.set(cardElement, {
          xPercent: -50,
          x: 0,
          y: `${12 * heightMultiplier}rem`,
          rotation: 0,
          scale: 0.5,
          opacity: 0,
        });
        gsap.to(cardElement, {
          ...target,
          duration: 1.2,
          delay: 0.2 + slot * 0.06,
          ease: "elastic.out(1.05, 0.78)",
          onComplete,
        });
        return;
      }

      const previousSlot = previousSlots.get(cardIndex);
      const wrapsAcrossFan =
        previousSlot !== undefined && Math.abs(previousSlot - slot) > CENTER_SLOT;

      if (wrapsAcrossFan) {
        const exitX = directionRef.current === "right" ? -44 : 44;
        const enterX = -exitX;
        gsap.to(cardElement, {
          x: `${exitX * widthMultiplier}rem`,
          opacity: 0,
          scale: 0.55,
          duration: 0.28,
          ease: "power2.in",
          onComplete: () => {
            gsap.set(cardElement, {
              x: `${enterX * widthMultiplier}rem`,
              y: target.y,
              rotation: directionRef.current === "right" ? 28 : -28,
            });
            gsap.to(cardElement, {
              ...target,
              duration: 0.48,
              ease: "power2.out",
              onComplete,
            });
          },
        });
        return;
      }

      gsap.to(cardElement, {
        ...target,
        duration: 0.52,
        ease: "power2.out",
        onComplete,
      });
    });

    previousSlotsRef.current = new Map(visibleSlots);

    const visibleEntries = cardElements
      .map((element, cardIndex) => ({
        element,
        slot: visibleSlots.get(cardIndex),
      }))
      .filter((entry): entry is { element: HTMLElement; slot: number } => entry.slot !== undefined)
      .sort((first, second) => first.slot - second.slot);

    let leaveTimer: ReturnType<typeof setTimeout> | undefined;
    let activeSlot: number | null = null;

    const updateHoverLayout = (hoveredSlot: number | null) => {
      const currentWidthMultiplier = getWidthMultiplier(window.innerWidth);
      const currentHeightMultiplier = getHeightMultiplier(window.innerWidth);

      visibleEntries.forEach(({ element, slot }) => {
        const position = FAN_POSITIONS[slot];
        const distance = hoveredSlot === null ? 0 : Math.abs(slot - hoveredSlot);
        let targetX = position.x * currentWidthMultiplier;
        let targetY = position.y * currentHeightMultiplier;
        let targetRotation: number = position.rotation;
        let targetScale: number = position.scale;

        if (hoveredSlot !== null) {
          if (slot === hoveredSlot) {
            targetY -= 2.5 * currentHeightMultiplier;
            targetScale *= 1.08;
          } else {
            const normalized = (slot - CENTER_SLOT) / CENTER_SLOT;
            const pushStrength =
              8 *
              (1 - Math.abs(normalized)) *
              (1 + 0.2 * Math.max(0, CENTER_SLOT - distance));

            if (slot < hoveredSlot) {
              targetX -= pushStrength * currentWidthMultiplier;
              targetRotation -= 3 / (distance + 1);
            } else {
              targetX += pushStrength * currentWidthMultiplier;
              targetRotation += 3 / (distance + 1);
            }
          }
        }

        gsap.to(element, {
          x: `${targetX}rem`,
          y: `${targetY}rem`,
          rotation: targetRotation,
          scale: targetScale,
          duration: 0.5,
          delay: distance * 0.02,
          ease: "elastic.out(1, 0.75)",
          overwrite: "auto",
        });
        gsap.set(element, { zIndex: position.zIndex });
      });
    };

    const enterHandlers = visibleEntries.map(({ element, slot }) => {
      const handler = () => {
        if (isAnimatingRef.current || reducedMotion) return;
        if (leaveTimer) clearTimeout(leaveTimer);
        activeSlot = slot;
        updateHoverLayout(slot);
      };
      element.addEventListener("mouseenter", handler);
      return { element, handler };
    });

    const onMouseLeave = () => {
      if (isAnimatingRef.current || reducedMotion) return;
      if (leaveTimer) clearTimeout(leaveTimer);
      leaveTimer = setTimeout(() => {
        activeSlot = null;
        updateHoverLayout(null);
      }, 50);
    };

    const onResize = () => {
      if (!isAnimatingRef.current) updateHoverLayout(activeSlot);
    };

    container.addEventListener("mouseleave", onMouseLeave);
    window.addEventListener("resize", onResize);

    return () => {
      gsap.killTweensOf(cardElements);
      enterHandlers.forEach(({ element, handler }) =>
        element.removeEventListener("mouseenter", handler),
      );
      container.removeEventListener("mouseleave", onMouseLeave);
      window.removeEventListener("resize", onResize);
      if (leaveTimer) clearTimeout(leaveTimer);
    };
  }, [cards, centerIndex]);

  if (cards.length === 0) return null;

  return (
    <section
      className="fan-carousel"
      aria-roledescription="carousel"
      aria-label="Recent Dr. Jack Dating matches"
    >
      <div className="fan-layout" ref={containerRef}>
        {cards.map((card, index) => (
          <button
            className="fan-card"
            type="button"
            key={card.src}
            aria-label={`Show ${card.name}`}
            aria-pressed={centerIndex === index}
            onClick={() => goTo(index)}
            style={{ "--fan-card-ratio": `${card.width} / ${card.height}` } as CSSProperties}
          >
            <Image
              src={card.src}
              alt={card.alt}
              width={card.width}
              height={card.height}
              sizes="(max-width: 480px) 42vw, (max-width: 768px) 38vw, (max-width: 1024px) 30vw, 340px"
            />
          </button>
        ))}
      </div>

      <div className="fan-controls">
        <button type="button" onClick={() => cycle("left")} aria-label="Previous match">
          <Chevron direction="left" />
        </button>

        <div className="fan-dots" aria-label="Choose a featured match">
          {cards.map((card, index) => (
            <button
              type="button"
              key={card.src}
              className={centerIndex === index ? "is-active" : undefined}
              aria-label={`Show ${card.name}`}
              aria-current={centerIndex === index ? "true" : undefined}
              onClick={() => goTo(index)}
            />
          ))}
        </div>

        <button type="button" onClick={() => cycle("right")} aria-label="Next match">
          <Chevron direction="right" />
        </button>
      </div>

      <p className="fan-current" aria-live="polite">
        {cards[centerIndex].name}
      </p>
    </section>
  );
}
