import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
    return (
        <div>
            <p>
                Cittadino Italiano & Francese, napoletano di nascita e varesotto
                di adozione, classe 1962, sposato con la stessa donna da molto
                più di trent’anni e orgoglioso padre di un giovane artista.
            </p>
            <p>
                Prima del mio 110 e lode in scienze politiche ho “fatto” studi
                classici e mi è rimasta attaccata la passione per la saggezza
                antica.
            </p>
            <p>
                Ho lavorato nella gioielleria come manager nel marketing e nella
                comunicazione: una bella esperienza di 18 anni in Richemont, di
                cui 11 come direttore marketing Cartier in Italia, affinata in
                aziende imprenditoriali italiane, come Stefan Hafner, Roberto
                Demeglio e Chantecler.
            </p>
            <p>
                Nel mondo della gioielleria ho imparato a far emergere la
                bellezza.
            </p>
            <p>
                La bellezza di una pietra, di un metallo, di un{"'"}emozione. Ma
                anche quella di un negozio, di una marca, di un’équipe, di un
                collaboratore.
            </p>
            <p>
                In fondo è quello che faccio ancora come ICF coach e come
                consulente/formatore; di mestiere ascolto, faccio domande,
                connetto persone, esperienze, visioni, racconto storie.
            </p>

            <p>
                Se vuoi leggere tutto il CV, puoi cliccare su questo link ma
                devi armarti davvero di grande pazienza
            </p>
            <div className="my-10 flex justify-between md:flex-row flex-col md:pr-[25%]">
                <div>
                    <a href="/CV.pdf" download>
                        <h4 className="m-0 text-[#620F1B]">Scarica CV</h4>
                    </a>
                </div>

                <div className="relative flex justify-end">
                    <Image
                        src="/chisono.png"
                        width={200}
                        height={200}
                        alt="portrait illustration"
                        className="absolute right-[160px]"
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
                <h4 className="text-[#39455A]">Credits</h4>
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
                            Costanza, Gabriele e Maria Elena Aprea
                        </Link>
                    </li>
                    <li className="underline">
                        <Link
                            href="https://www.linkedin.com/in/giacomo-bozzi-23b08047"
                            target="_blank"
                        >
                            Giacomo Bozzi
                        </Link>
                    </li>
                    <li className="underline">
                        <Link
                            href="https://www.linkedin.com/in/maurizio-buscemi-394b3071"
                            target="_blank"
                        >
                            Maurizio Buscemi
                        </Link>
                    </li>
                    <li className="underline">
                        <Link
                            href="https://www.linkedin.com/in/albacappellieri"
                            target="_blank"
                        >
                            Alba Cappellieri
                        </Link>
                    </li>
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
                            Massimiliano Cardani
                        </Link>
                    </li>
                    <li className="underline">
                        <Link href="https://www.assogemme.it/" target="_blank">
                            Paolo e Azzurra Cesari
                        </Link>
                    </li>

                    <li className="underline">
                        <Link
                            href="https://www.fondazionecologni.it/it/chi-siamo/franco-cologni"
                            target="_blank"
                        >
                            Franco Cologni
                        </Link>
                    </li>
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
                        <Link
                            href="https://www.linkedin.com/in/luigiiagulli/"
                            target="_blank"
                        >
                            Luigi Iagulli
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
                    <li>Nadia Peron</li>
                    <li className="underline">
                        <Link
                            href="https://www.linkedin.com/in/petrozzineurocoaching"
                            target="_blank"
                        >
                            Federico Petrozzi
                        </Link>
                    </li>
                    <li className="underline">
                        <Link
                            href="https://www.linkedin.com/in/francescapezzutto57"
                            target="_blank"
                        >
                            Francesca Pezzutto
                        </Link>
                    </li>
                    <li className="underline">
                        <Link
                            href="https://www.linkedin.com/in/bviamin"
                            target="_blank"
                        >
                            Barbara Viamin
                        </Link>
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
