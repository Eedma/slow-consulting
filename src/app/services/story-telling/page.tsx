import Image from "next/image";
import Link from "next/link";

export default function StorytellingPage() {
    return (
        <div>
            <h3 className="story-telling">(HI)STORY TELLING</h3>

            <div className="relative mt-6">
                <h4>Public speaking</h4>
                <p>Parlare in pubblico mi piace e mi riesce bene</p>
                <p>
                    Ho animato diverse “conventions” e nessuno si è mai
                    addormentato.
                </p>
                <p>
                    Da qualche tempo, grazie ad{" "}
                    <Link
                        href="https://www.assogemme.it"
                        target="_blank"
                        className="underline"
                    >
                        Assogemme
                    </Link>{" "}
                    di Paolo Cesari porto alla{" "}
                    <Link
                        href="https://www.iegexpo.it"
                        target="_blank"
                        className="underline"
                    >
                        Fiera di Vicenza
                    </Link>{" "}
                    qualche rifessione sul mondo della gioielleria costruita con
                    personaggi come{" "}
                    <Link
                        href="https://www.giampierobodino.com"
                        target="_blank"
                        className="underline"
                    >
                        Giampiero Bodino
                    </Link>
                    ,{" "}
                    <Link
                        href="https://crivelligioielli.com"
                        target="_blank"
                        className="underline"
                    >
                        Alessia Crivelli
                    </Link>
                    ,{" "}
                    <Link
                        href="https://www.igi.it"
                        target="_blank"
                        className="underline"
                    >
                        Loredana Prosperi
                    </Link>
                    , Simone Rizzetto amministratore delegato del Laboratorio
                    Damiani,{" "}
                    <Link
                        href="https://www.damiani.com/it"
                        target="_blank"
                        className="underline"
                    >
                        Guido Grassi Damiani
                    </Link>
                    ,{" "}
                    <Link
                        href="https://linkedin.com/in/dominique-dufermont-22284968"
                        target="_blank"
                        className="underline"
                    >
                        Dominique Dufermont
                    </Link>
                    ,{" "}
                    <Link
                        href="https://www.bartorelli.it"
                        target="_blank"
                        className="underline"
                    >
                        Carlo Bartorelli
                    </Link>
                    ,{" "}
                    <Link
                        href="https://www.chaumet.com"
                        target="_blank"
                        className="underline"
                    >
                        Olga Corsini
                    </Link>
                </p>
                <p>
                    E poi ci siamo divertiti molto a “ridefinire i confini
                    dell’Arte Orafa” con{" "}
                    <Link
                        href="http://www.brutopomodoro.it"
                        target="_blank"
                        className="underline"
                    >
                        Bruto Pomodoro
                    </Link>
                </p>
                <Image
                    src="/story-telling2.png"
                    width={150}
                    height={200}
                    alt="story telling"
                    className="absolute opacity-50 top-[-100px] md:left-[-75px] right-0"
                />
            </div>
            <div className="relative mt-6">
                <h4>Storie già scritte</h4>
                <p>Ho scritto molto. Da Cartier mi chiamavano “penna lunga”.</p>
                <p>
                    Ho fatto da ghost writer per colleghi e superiori, ho
                    scritto molto ai Clienti di Cartier, ho scritto qualcosa per
                    la rivista della{" "}
                    <Link
                        href="https://www.fondazionecologni.it"
                        target="_blank"
                        className="underline"
                    >
                        Fondazione Cologni
                    </Link>{" "}
                    per{" "}
                    <Link
                        href="https://www.preziosamagazine.com"
                        target="_blank"
                        className="underline"
                    >
                        Preziosa Magazine
                    </Link>{" "}
                    di Giovanni Micera.
                </p>
                <p>
                    Ho scritto anche per “78 pagine”. Ho conosciuto Alessandra
                    Marconato come coach, poi come editrice.
                </p>
                <p>
                    Ho curato per lei la rubrica “Brevi appunti di umana
                    resistenza” con qualche articolo forse può darti una idea
                    della mia maniera di lavorare.
                </p>
                <p>
                    Per leggerli puoi accedere a questo link:{" "}
                    <Link
                        href="https://drive.google.com/drive/folders/1XCGaL_wLdWOyI6H6ySoiJ26_0O5hlzp3?usp=drive_link"
                        target="_blank"
                        className="underline"
                    >
                        Storie già scritte
                    </Link>
                </p>
                <p>Buona lettura</p>
                <Image
                    src="/story-telling1.png"
                    width={300}
                    height={400}
                    alt="story telling"
                    className="absolute top-[-35px] right-0"
                />
            </div>
        </div>
    );
}
