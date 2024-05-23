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
                    Da qualche tempo, grazie ad Assogemme di Paolo Cesari
                    (https://www.assogemme.it) porto alla Fiera di Vicenza
                    (https://www.iegexpo.it) qualche rifessione sul mondo della
                    gioielleria costruita con per- sonaggi come Giampiero Bodino
                    (https://www.giampierobodino.com) Alessia Crivelli
                    (https://crivelligioielli.com) Loredana Prosperi
                    (https://www.igi.it) Simone Rizzetto am- ministratore
                    delegato del Laboratorio Damiani, Guido Grassi Damiani
                    (https://www.damiani.com/it), Dominique Dufermont
                    (https://www.dior.com) Carlo Bartorelli
                    (https://www.bartorelli.it) Olga Corsini
                    (https://www.chaumet.com)
                </p>
                <p>
                    E poi ci siamo divertiti molto a “ridefnire i confni
                    dell’Arte Orafa” con Bruto Pomodoro
                    (http://www.brutopomodoro.it)
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
                    la rivista della Fondazione Cologni
                    (https://www.fondazionecologni.it) per Preziosa Magazine di
                    Giovanni Micera, (https://www.preziosamagazine.com)
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
                    <Link href="https://drive.google.com/drive/folders/1XCGaL_wLdWOyI6H6ySoiJ26_0O5hlzp3?usp=drive_link">
                        Storie già scritte
                    </Link>
                </p>
                <p>Buona lettura</p>
                <Image
                    src="/story-telling1.png"
                    width={150}
                    height={200}
                    alt="story telling"
                    className="absolute top-[-35px] right-0"
                />
            </div>
        </div>
    );
}
