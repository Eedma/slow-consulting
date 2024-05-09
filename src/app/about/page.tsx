import Image from "next/image";

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
            <br />
            <p>
                Se vuoi leggere tutto il CV, puoi cliccare su questo link ma
                devi armarti davvero di grande pazienza
            </p>
            <div className="my-10 flex justify-between">
                <h4>scarica CV</h4>
                <div className="relative flex mr-10">
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
                <h4>credits</h4>
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
                <h6>I fratelli Aprea (https://www.chantecler.it)</h6>
            </div>
        </div>
    );
}
