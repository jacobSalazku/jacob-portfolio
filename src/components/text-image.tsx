'use client';

import { useState } from 'react';
import Image from 'next/image';
import { client } from '@/sanity/lib/client';
import urlBuilder from '@sanity/image-url';
import { Experience } from '../../sanity.types';

const TextImageComponent = ({
  value,
  isInline,
}: {
  value: Experience['mainImage'];
  isInline: boolean;
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!value) {
    return null;
  }

  const handleImageClick = () => {
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto'; // Restore scrolling when modal is closed
  };

  return (
    <>
      <div
        className="mx-auto mb-4 ml-2 hidden max-w-[200px] cursor-pointer rounded-xl border-2 border-beige-1 border-opacity-45 p-1 transition-transform duration-200 ease-in-out hover:scale-105 md:float-right md:mb-0 md:ml-4 md:flex"
        onClick={handleImageClick}
      >
        <Image
          src={urlBuilder(client)
            .image(value.asset || '')
            .width(1080)
            .height(1080)
            .url()}
          alt={value.alt || ''}
          className="h-auto w-full rounded-lg"
          width={200}
          height={200}
        />
      </div>
      {isModalOpen && (
        <div
          className="bg-black fixed inset-0 z-50 flex items-center justify-center bg-opacity-75 backdrop-blur-sm"
          onClick={handleCloseModal}
        >
          <div
            className="relative w-full max-w-xs rounded-lg bg-white p-4 shadow-lg md:max-w-md lg:max-w-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="text-black absolute right-2 top-2"
              onClick={handleCloseModal}
            >
              &times;
            </button>
            <img
              src={urlBuilder(client)
                .image(value.asset || '')
                .width(1080)
                .url()}
              alt={value.alt || ' '}
              className="max-h-[80vh] w-full rounded-lg"
            />
          </div>
        </div>
      )}
    </>
  );
};

export { TextImageComponent };
