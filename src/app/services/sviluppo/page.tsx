import Image from "next/image";

export default function SviluppoPage() {
    return (
        <div>
            <div className="relative">
                <h3 className="sviluppo">Sviluppo di nuove competenze</h3>
                <p>
                    Sono fero della mia barba bianca e sono convinto che in un
                    mondo in costante trasformazione la mia esperienza possa
                    essere d’aiuto a chi si affaccia al mondo del lavoro, specie
                    nei mestieri del lusso che chiedono mani, cuori e menti
                    intelligenti.
                </p>
                <h4 className="mt-[6rem]">Design delle scuole dei mestieri</h4>
                <p>
                    Grazie a Giovanna Zambelli sono diventato uno specialista.
                    Ho collaborato all’ ingegnerizzazione delle scuole dei
                    mestieri di Bvlgari, di Gucci-Ecole de l’Amour, di Marcolin,
                    Balenciaga e Bottega Veneta.
                </p>
                <p>
                    Dalla definizione del “purpuose” della Scuola, al dettaglio
                    dei programmi per lo sviluppo delle competenze tecniche e
                    relazionali degli Allievi, dalla formazione e al coaching
                    dei Maestri dei Mestieri, fno alla stesura dei protocolli di
                    accoglienza delle nuove risorse nelle isole di produzione.
                </p>
                <Image
                    src="/sviluppo-competenze1.png"
                    width={300}
                    height={400}
                    alt="sviluppo competenze"
                    className="absolute top-0 right-0"
                />
            </div>
            <div className="relative">
                <h4 className="mt-[6rem]">Trasmissione di esperienza</h4>
                <p>
                    Come la vita, il senso del lusso e della moda cambia in
                    continuazione. La mia esperienza può aiutare chi si affaccia
                    a questo mondo ad interpretarlo, a capire cosa sia davvero
                    per i Clienti, a scoprirne i sensi possibili, qualche
                    segreto del retail, dello sviluppo prodotto e della
                    comunicazione, le evoluzioni più recenti e qualche squarcio
                    su possibili futuri.
                </p>
                <p>
                    L’ho fatto per i ragazzi del Tads
                    (https://www.taridesignschool.it) , per quelli del Milano
                    Fashion Institute e per alcuni di quelli che seguono lo
                    splendido lavoro di Alba Cappellieri al Politecnico di
                    Milano (https://www.linkedin.com/in/albacappellieri) .
                </p>
                <Image
                    src="/sviluppo-competenze2.png"
                    width={300}
                    height={400}
                    alt="sviluppo competenze"
                    className="absolute top-0 left-1/2 transform -translate-x-1/2 translate-y-0"
                />
            </div>
        </div>
    );
}
