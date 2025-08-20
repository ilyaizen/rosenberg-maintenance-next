"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";

interface GalleryImage {
  src: string;
  alt: string;
}

interface GallerySection {
  id: string;
  title: string;
  description: string;
  images: GalleryImage[];
}

export default function Gallery() {
  const t = useTranslations();

  const gallerySections: GallerySection[] = useMemo(
    () => [
      {
        id: "roof-sealing-with-a-solar-system-with-polyuria",
        title: t("gallery.section1.title"),
        description: t("gallery.section1.description"),
        images: [
          {
            src: "/images/gallery/roof-sealing-with-a-solar-system-with-polyuria/01.jpg",
            alt: t("gallery.section1.alt", { num: 1 }),
          },
          {
            src: "/images/gallery/roof-sealing-with-a-solar-system-with-polyuria/02.jpg",
            alt: t("gallery.section1.alt", { num: 2 }),
          },
          {
            src: "/images/gallery/roof-sealing-with-a-solar-system-with-polyuria/03.jpg",
            alt: t("gallery.section1.alt", { num: 3 }),
          },
          {
            src: "/images/gallery/roof-sealing-with-a-solar-system-with-polyuria/04.jpg",
            alt: t("gallery.section1.alt", { num: 4 }),
          },
          {
            src: "/images/gallery/roof-sealing-with-a-solar-system-with-polyuria/05.jpg",
            alt: t("gallery.section1.alt", { num: 5 }),
          },
        ],
      },
      {
        id: "balcony-sealing-with-an-elastic-ft-system",
        title: t("gallery.section2.title"),
        description: t("gallery.section2.description"),
        images: [
          {
            src: "/images/gallery/balcony-sealing-with-an-elastic-ft-system/01.jpg",
            alt: t("gallery.section2.alt", { num: 1 }),
          },
          {
            src: "/images/gallery/balcony-sealing-with-an-elastic-ft-system/02.jpg",
            alt: t("gallery.section2.alt", { num: 2 }),
          },
          {
            src: "/images/gallery/balcony-sealing-with-an-elastic-ft-system/03.jpg",
            alt: t("gallery.section2.alt", { num: 3 }),
          },
          {
            src: "/images/gallery/balcony-sealing-with-an-elastic-ft-system/04.jpg",
            alt: t("gallery.section2.alt", { num: 4 }),
          },
          {
            src: "/images/gallery/balcony-sealing-with-an-elastic-ft-system/05.jpg",
            alt: t("gallery.section2.alt", { num: 5 }),
          },
          {
            src: "/images/gallery/balcony-sealing-with-an-elastic-ft-system/06.jpg",
            alt: t("gallery.section2.alt", { num: 6 }),
          },
          {
            src: "/images/gallery/balcony-sealing-with-an-elastic-ft-system/07.jpg",
            alt: t("gallery.section2.alt", { num: 7 }),
          },
          {
            src: "/images/gallery/balcony-sealing-with-an-elastic-ft-system/08.jpg",
            alt: t("gallery.section2.alt", { num: 8 }),
          },
          {
            src: "/images/gallery/balcony-sealing-with-an-elastic-ft-system/09.jpg",
            alt: t("gallery.section2.alt", { num: 9 }),
          },
          {
            src: "/images/gallery/balcony-sealing-with-an-elastic-ft-system/10.jpg",
            alt: t("gallery.section2.alt", { num: 10 }),
          },
          {
            src: "/images/gallery/balcony-sealing-with-an-elastic-ft-system/11.jpg",
            alt: t("gallery.section2.alt", { num: 11 }),
          },
        ],
      },
      {
        id: "roof-sealing-with-reinforced-polyurethane",
        title: t("gallery.section3.title"),
        description: t("gallery.section3.description"),
        images: [
          {
            src: "/images/gallery/roof-sealing-with-reinforced-polyurethane/00.jpg",
            alt: t("gallery.section3.alt", { num: 0 }),
          },
          {
            src: "/images/gallery/roof-sealing-with-reinforced-polyurethane/01.jpg",
            alt: t("gallery.section3.alt", { num: 1 }),
          },
          {
            src: "/images/gallery/roof-sealing-with-reinforced-polyurethane/02.jpg",
            alt: t("gallery.section3.alt", { num: 2 }),
          },
          {
            src: "/images/gallery/roof-sealing-with-reinforced-polyurethane/03.jpg",
            alt: t("gallery.section3.alt", { num: 3 }),
          },
          {
            src: "/images/gallery/roof-sealing-with-reinforced-polyurethane/04.jpg",
            alt: t("gallery.section3.alt", { num: 4 }),
          },
          {
            src: "/images/gallery/roof-sealing-with-reinforced-polyurethane/05.jpg",
            alt: t("gallery.section3.alt", { num: 5 }),
          },
        ],
      },
    ],
    [t]
  );

  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<number>(0);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const openModal = (sectionIdx: number, imageIdx: number) => {
    setActiveSection(sectionIdx);
    setActiveIndex(imageIdx);
    setIsOpen(true);
  };

  const closeModal = useCallback(() => setIsOpen(false), []);

  const next = useCallback(() => {
    const total = gallerySections[activeSection]?.images.length ?? 0;
    if (!total) return;
    setActiveIndex((i) => (i + 1) % total);
  }, [activeSection, gallerySections]);

  const prev = useCallback(() => {
    const total = gallerySections[activeSection]?.images.length ?? 0;
    if (!total) return;
    setActiveIndex((i) => (i - 1 + total) % total);
  }, [activeSection, gallerySections]);

  // Disable body scroll and handle keyboard navigation when modal is open
  useEffect(() => {
    if (!isOpen) return;

    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        closeModal();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        next();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        prev();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = original;
      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen, closeModal, next, prev]);

  // Basic swipe support for touch devices
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.changedTouches[0].screenX;
  };
  const onTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.changedTouches[0].screenX;
  };
  const onTouchEnd = () => {
    if (touchStartX.current == null || touchEndX.current == null) return;
    const delta = touchStartX.current - touchEndX.current;
    const threshold = 50; // pixels
    if (delta > threshold) next();
    if (delta < -threshold) prev();
    touchStartX.current = null;
    touchEndX.current = null;
  };

  const current = gallerySections[activeSection]?.images[activeIndex];

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="mb-12 text-center text-4xl font-bold text-gray-800">{t("gallery.title")}</h2>

      <div className="space-y-16">
        {gallerySections.map((section, sectionIdx) => (
          <div
            key={section.id}
            className="rounded-xl p-6 shadow-lg sm:p-8"
            style={{ backgroundColor: "oklch(0.9953 0.0119 122.47)" }}
          >
            <div className="mb-6 text-center sm:mb-8">
              <h3 className="mb-2 text-2xl font-bold text-gray-800 sm:mb-4">{section.title}</h3>
              <p className="mx-auto max-w-2xl text-base text-gray-600 sm:text-lg">{section.description}</p>
            </div>

            <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 sm:gap-4 md:grid-cols-5 md:gap-6 xl:grid-cols-6">
              {section.images.map((image, idx) => (
                <button
                  key={idx}
                  type="button"
                  className="group cursor-pointer overflow-hidden rounded-lg shadow-md transition-all duration-300 ease-in-out hover:shadow-xl focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none"
                  onClick={() => openModal(sectionIdx, idx)}
                  aria-label={image.alt}
                >
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 25vw, 20vw"
                      className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/0 transition-all duration-300 ease-in-out group-hover:bg-black/15" />
                  </div>
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      {isOpen && current && (
        <div
          className="fixed inset-0 z-50 flex flex-col bg-black/90 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label="Image viewer"
        >
          {/* Top bar */}
          <div className="flex items-center justify-between p-3 text-white sm:p-4">
            <div className="text-sm opacity-80 sm:text-base">
              {gallerySections[activeSection]?.title} · {activeIndex + 1}/
              {gallerySections[activeSection]?.images.length}
            </div>
            <button
              type="button"
              onClick={closeModal}
              className="inline-flex items-center justify-center rounded-full p-2 focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:outline-none"
              style={{ backgroundColor: "oklch(0.9953 0.0119 101.47 / 0.1)", backdropFilter: "blur(4px)" }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "oklch(0.9953 0.0119 101.47 / 0.2)")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "oklch(0.9953 0.0119 101.47 / 0.1)")}
              aria-label="Close"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="h-6 w-6"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Image area */}
          <div
            className="relative flex flex-1 items-center justify-center overflow-hidden select-none"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            {/* Prev */}
            <button
              type="button"
              onClick={prev}
              className="absolute top-1/2 left-2 -translate-y-1/2 rounded-full p-2 text-white/90 focus:ring-2 focus:outline-none sm:left-4 sm:p-3"
              style={{ backgroundColor: "oklch(0.9953 0.0119 101.47 / 0.1)", backdropFilter: "blur(4px)" }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "oklch(0.9953 0.0119 101.47 / 0.2)")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "oklch(0.9953 0.0119 101.47 / 0.1)")}
              aria-label="Previous image"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="h-6 w-6"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* The image itself */}
            <div className="relative h-[70vh] w-[92vw] sm:h-[78vh] sm:w-[90vw] md:h-[80vh] md:w-[80vw] lg:h-[82vh] lg:w-[72vw]">
              <Image
                key={current.src}
                src={current.src}
                alt={current.alt}
                fill
                priority
                sizes="100vw"
                className="object-contain"
              />
            </div>

            {/* Next */}
            <button
              type="button"
              onClick={next}
              className="absolute top-1/2 right-2 -translate-y-1/2 rounded-full p-2 text-white/90 focus:ring-2 focus:outline-none sm:right-4 sm:p-3"
              style={{ backgroundColor: "oklch(0.9953 0.0119 101.47 / 0.1)", backdropFilter: "blur(4px)" }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "oklch(0.9953 0.0119 101.47 / 0.2)")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "oklch(0.9953 0.0119 101.47 / 0.1)")}
              aria-label="Next image"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="h-6 w-6"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Caption bar */}
          <div className="px-4 py-3 text-center text-sm text-white/80 sm:text-base">{current.alt}</div>
        </div>
      )}
    </div>
  );
}
