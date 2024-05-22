import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
    return (
        <div>
            <p>
                Cittadino Italiano & Francese, napoletano di nascita e varesotto
                di adozione, classe 1962, sposato con la stessa donna da molto
                più di trent’anni e orgoglioso padre di un giovane artista.
                Prima del mio 110 e lode in scienze politiche ho “fatto” studi
                classici e mi è rimasta attaccata la passione per la saggezza
                antica. Ho lavorato nella gioielleria come manager nel marketing
                e nella comunicazione: una bella esperienza di 18 anni in
                Richemont, di cui 11 come direttore marketing Cartier in Italia,
                affnata in aziende imprenditoriali italiane, come Stefan Hafner,
                Roberto Demeglio e Chantecler. Nel mondo della gioielleria ho
                imparato a far emergere la bellezza. La bellezza di una pietra,
                di un metallo, di una emozione. Ma anche quella di un negozio,
                di una marca, di un’équipe, di un collaboratore. In fondo è
                quello che faccio ancora come ICF coach e come
                consulente/formatore; di mestiere ascolto, faccio domande,
                connetto persone, esperienze, visioni, racconto storie.
            </p>

            <p>
                Se vuoi leggere tutto il CV, puoi cliccare su questo link ma
                devi armarti davvero di grande pazienza
            </p>
            <div className="my-10 flex justify-between md:flex-row flex-col">
                <div>
                    <a href="/CV.pdf" download>
                        <h4 className="m-0">Scarica CV</h4>
                    </a>
                </div>

                <div className="relative flex mr-10">
                    <Image
                        src="/chisono.png"
                        width={200}
                        height={200}
                        alt="portrait illustration"
                        className="md:absolute md:right-[160px] static"
                    />
                    <Image
                        src="/chisono-2.png"
                        width={200}
                        height={200}
                        alt="portrait"
                    />
                </div>
            </div>
            <div>
                <h4>Credits</h4>
                <p>
                    Vinicius de Moraes ha scritto che la vita è l’arte
                    dell’incontro e nella mia vita ho avuto il privilegio di
                    fare incontri straordinari.
                </p>
                <p>
                    Alcuni di questi incontri mi hanno consentito di scrivere le
                    righe di questo sito; li cito in alfabetico come
                    ringraziamento sapendo di averne dimenticati tanti altri.
                </p>
                <ul>
                    <li className="underline">
                        <Link href="https://www.chantecler.it" target="_blank">
                            I fratelli Aprea
                        </Link>
                    </li>
                    <li>Giacomo Bozzi</li>
                    <li>Maurizio Buscemi</li>
                    <li>Alba Cappellieri</li>
                    <li className="underline">
                        <Link
                            href="https://www.milanoretailtour.com"
                            target="_blank"
                        >
                            Maria Roberta Castelli e Andrea Bertagnoglio di
                            Milano Retail Tour
                        </Link>
                    </li>
                    <li className="underline">
                        <Link
                            href="https://www.futurecoaching.it"
                            target="_blank"
                        >
                            Massimo Cardani
                        </Link>
                    </li>
                    <li>Paolo e Azzurra Cesari</li>
                    <li>Franco Cologni</li>
                    <li className="underline">
                        <Link
                            href="https://www.linkedin.com/in/danielacottone"
                            target="_blank"
                        >
                            Daniela Cottone
                        </Link>
                    </li>
                    <li className="underline">
                        <Link
                            href="https://www.luximpact.com/team"
                            target="_blank"
                        >
                            Frédéric de Narp
                        </Link>
                    </li>
                    <li className="underline">
                        <Link href="https://silviafrasson.com" target="_blank">
                            Silvia Frasson
                        </Link>
                    </li>
                    <li className="underline">
                        <Link href="https://78edizioni.it" target="_blank">
                            Alessandra Marconato
                        </Link>
                    </li>
                    <li className="underline">
                        <Link
                            href="https://www.marinaosnaghi.com"
                            target="_blank"
                        >
                            Marina Osnaghi
                        </Link>
                    </li>
                    <li className="underline">
                        <Link
                            href="https://www.linkedin.com/in/petrozzineurocoaching"
                            target="_blank"
                        >
                            Federico Petrozzi
                        </Link>
                    </li>
                    <li>Francesca Pezzutto</li>
                    <li>
                        Barbara Viamin che mi ha aiutao a passare alla
                        consulenza e al coaching
                    </li>
                    <li className="underline">
                        <Link
                            href="https://www.linkedin.com/in/giovannazambelli"
                            target="_blank"
                        >
                            Giovanna Zambelli
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}
