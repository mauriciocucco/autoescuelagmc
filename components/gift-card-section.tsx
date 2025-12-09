import Image from "next/image";

export function GiftCardSection() {
    return (
        <section id="giftcard" className="md:py-20 py-8 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto md:mb-14 mb-6">
                    <div className="flex items-center justify-center gap-4 mb-4">
                        <h2 className=" text-black text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                            GIFT CARD
                        </h2>
                        <Image
                            src="/images/gift-card-gmc.png"
                            alt="Icono Gift Card GMC"
                            width={40}
                            height={40}
                            className="object-contain"
                        />
                    </div>
                    <p className=" text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-2xl/relaxed">
                        Un regalo para toda la vida
                    </p>
                </div>


                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">

                    <div className="flex justify-center">
                        <Image
                            src="/images/gift-card.jpg"
                            alt="Tarjeta de regalo para clases de manejo de autoescuela, con diseño moderno."
                            width={500}
                            height={320}
                            className="rounded-xl shadow-lg"
                        />
                    </div>

                    <div>
                        <p className="text-gray-700 mb-6 leading-relaxed max-w-lg">
                            Regalá confianza, independencia y seguridad al volante.
                            Ideal para estas fiestas, cumpleaños, egresos o para quien está listo
                            para dar su primer paso hacia la conducción.
                            Con nuestra <span className="font-bold">Gift Card</span>, regalás una experiencia completa de aprendizaje.
                        </p>


                        <div className="mb-6">
                            <h4 className="text-xl font-bold text-black mb-3">¿Qué incluye?</h4>
                            <ul className="space-y-2 text-gray-700">
                                <li>✔ Clase personalizada con instructor matriculado</li>
                                <li>✔ Clases prácticas y teóricas de manejo</li>
                                <li>✔ Material de apoyo para el examen teórico</li>
                                <li>✔ Práctica en circuito real</li>
                                <li>✔ Tarjeta digital o física para regalar</li>
                            </ul>
                        </div>
                        <a
                            href="https://wa.me/2255627189?text=Hola,%20me%20interesa%20regalar%20una%20Gift%20Card,%20quiero%20más%20info%20..."
                            target="_blank"
                            rel="noopener"
                            className="inline-block bg-primary text-white px-6 py-3 rounded-lg shadow-lg hover:bg-primary/90 transition duration-200 ease-in-out w-full sm:w-auto text-center font-semibold"
                        >
                            Quiero regalar una Gift Card
                        </a>

                        <p className="text-xs text-gray-500 mt-3">
                            *Consultá por todos los medios de pago.
                        </p>

                        <div className="flex flex-col items-center md:items-start mt-6"> 
                            <p className="text-base font-bold text-gray-700 mb-2">Compartir :</p>
                            <div className="flex space-x-4">
                                <a
                                    href="https://wa.me/?text=¡Mirá%20esta%20Gift%20Card!.%20https://www.autoescuelagmc.com/#giftcard"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Compartir en WhatsApp"
                                >
                                    <img src="/images/whatsapp.png" alt="WhatsApp" className="w-7 h-7" />
                                </a>
                                <a
                                    href="https://www.facebook.com/dialog/send?link=https://www.autoescuelagmc.com/#giftcard&app_id=YOUR_APP_ID&redirect_uri=https://www.autoescuelagmc.com/#giftcard&message=¡Mirá esta Gift Card! Regalá confianza y seguridad al volante."
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Enviar por Facebook Messenger"
                                >
                                    <img src="/images/facebook.png" alt="Facebook Messenger" className="w-6 h-6" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}