"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export function GiftCardModal() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        setIsOpen(true);
    }, []);

    const closeModal = () => setIsOpen(false);

    const handleImageClick = () => {
        closeModal();
        const giftCardSection = document.querySelector("#giftcard");
        if (giftCardSection) {
            giftCardSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
            onClick={closeModal}
        >
            <div
                className="
          bg-white rounded-lg shadow-lg p-6 
          w-11/12 max-w-md        
          sm:w-full sm:max-w-md
        "
                onClick={(e) => e.stopPropagation()}
            >
                <div className="relative flex flex-col justify-center items-center mb-4">
                    <div className="flex items-center gap-2">
                        <h2 className="text-xl sm:text-2xl font-bold text-center">
                            Regalá una Gift Card
                        </h2>

                        <Image
                            src="/images/gift-card-gmc.png"
                            alt="Icono de regalo"
                            width={20}
                            height={20}
                            className="object-contain sm:w-6 sm:h-6"
                        />
                    </div>

                    <button
                        onClick={closeModal}
                        className="absolute -top-4 -right-2 text-black font-bold hover:text-gray-800"
                        aria-label="Cerrar"
                    >
                        ✕
                    </button>
                </div>

                <div className="flex justify-center mb-2">
                    <Image
                        src="/images/gift-card.jpg"
                        alt="Gift Card GMC"
                        width={260}
                        height={100}
                        className="rounded-lg w-full md:h-[380px] cursor-pointer"
                        onClick={handleImageClick}
                    />
                </div>

                <Link
                    href="https://wa.me/2255627189?text=Hola,%20me%20interesa%20regalar%20una%20Gift%20Card,%20quiero%20más%20info%20..."
                    target="_blank"
                    className="block bg-primary text-white text-center py-2 px-4 rounded-lg shadow hover:bg-primary/90 transition font-semibold"
                >
                    Quiero mas info
                </Link>
            </div>
        </div>
    );
}
