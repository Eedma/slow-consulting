import Image from "next/image";
import Link from "next/link";

export default function FormazionePage() {
    return (
        <div>
            <h3 className="formazione">Formazione</h3>
            <div className="relative">
                <p>
                    Nella formazione ti porto il vantaggio di avere a che fare
                    con un formatore atipico.
                </p>

                <p>Uno che non ha studiato da formatore.</p>

                <p className="mb-4">
                    Uno che ha studiato e vissuto da manager, da uomo di
                    marketing e comunicazione nell’altera perfezione di Cartier
                    e nella dinamica creatività delle aziende familiari
                    italiane.
                </p>

                <p>Qual è il vantaggio?</p>

                <p>Il vantaggio è che ti posso capire.</p>

                <p>
                    Ti posso capire perché parlo la lingua delle aziende, perché
                    ho provato lo stress del manager, perché ho gioito per i
                    budget raggiunti e ho consolato i venditori quando le cose
                    andavano male.
                </p>
                <Image
                    src="/formazione1.png"
                    width={300}
                    height={400}
                    alt="formazione"
                    className="absolute left-0 top-0 z-0 opacity-[35%]"
                />
            </div>

            <div className="relative">
                <h4>Competenze relazionali</h4>
                <p>
                    A volte le competenze tecniche non sono così rare né così
                    costose da acquisire.
                </p>
                <p>
                    La capacità di creare e nutrire relazioni efficaci, con se
                    stessi e con gli altri, invece è rara e difficile da
                    acquisire; la sua assenza crea ostacoli e incomprensioni che
                    si tramutano in costi.
                </p>
                <p>
                    Come manager ho sperimentato quanto sia indispensabile e
                    come formatore l’ho condivisa lavorando su:
                </p>
                <ul className={"list-disc list-inside"}>
                    <li>
                        Competenze comunicative (con i consigli di Aristotele,
                        Cicerone, Seneca e le tecniche del Teatro di narrazione
                        in un largo orizzonte che va dal parlare in pubblico a
                        tenere un webinar fno alla costruzione di un efficace
                        storytelling aziendale);
                    </li>
                    <li>Comunicazione Empatica;</li>
                    <li>
                        Leadership (condivisione di modelli ma anche creazione e
                        applicazione di nuovi modelli costruiti “su misura”);
                    </li>
                    <li>Gestione del Tempo;</li>
                    <li>
                        Diversità come risorsa (anche in percorsi per
                        l’integrazione nelle squadre di vendita di nuovi
                        colleghi con disabilità intellettiva);
                    </li>
                    <li>
                        Cambiamento: le opportunità da scovare in una minaccia;
                    </li>
                    <li>
                        Feedback (come arte dell’ascolto e della co-costruzione
                        di piani d&#8216;azione ingaggianti);
                    </li>
                    <li>Gestione dello stress;</li>
                    <li>Alfabetizzazione Emotiva (approfondita anche grazie al percorso del C.E.B. tenuto da Fabio Fassone all’Istituto Lama Tzong Kapa di Pomaia);</li>
                    <li>Teoria e prassi della motivazione;</li>
                    <li>Personal Branding contestualizzata.</li>
                </ul>
                <Image
                    src="/formazione2.png"
                    width={300}
                    height={400}
                    alt="formazione"
                    className="absolute right-0 bottom-[-130px] z-0 opacity-[30%]"
                />
            </div>

            <div className="relative">
                <h4>Customer experience</h4>
                <p>
                    Anche qui ti posso sostenere nel raggiungimento dei tuoi
                    obiettivi perché il mondo del retail lo conosco davvero.
                </p>
                <p>
                    Ho avuto il privilegio di lavorare e qualche volta di
                    litigare, anche con Gino Marcellini, uno dei più grandi
                    venditori di Alta Gioielleria di Cartier; conosco la
                    genialità e la fragilità, l’impegno senza limiti e il senso
                    del dettaglio, la centralità dell’empatia anche oltre la
                    tecnica.
                </p>
                <p>
                    Grazie a{" "}
                    <Link
                        href="https://www.linkedin.com/in/danielacottone"
                        target="_blank"
                        className="underline"
                    >
                        Daniela Cottone
                    </Link>
                    , amica e formatrice di grandi capacità, ho potuto
                    collaborare a programmi di formazione nel retail della moda
                    e nel mondo alberghiero.
                </p>
                <p>
                    Con lei abbiamo sostenuto la capacità di chi dialoga con i
                    clienti di passare dal “quanto puoi spendere” al “chi sei
                    davvero e come posso aiutarti a esprimerlo”.
                </p>
            </div>

            <div className="relative">
                <h4>Team building</h4>
                <p>
                    Non c’è nessun obiettivo aziendale che si possa raggiungere
                    senza una squadra unita e coesa.
                </p>
                <p>
                    Con Francesca Pezzutto e la sua Promeet ho capito
                    l’importanza che qualcuno ti faccia capire cosa stai facendo
                    e come tu possa portarlo nella pratica di tutti i giorni.
                </p>
                <p>
                    L’ho sperimentato dalle dragon boats all’enigmistica
                    passando ovviamente per la cucina.
                </p>
                <p>Ma la vela mi è sembrata il mezzo più efficace.</p>
                <p>
                    Se vuoi possiamo costruire dei pacchetti su misura sulle tue
                    necessità con la collaborazione di Maurizio Buscemi (attuale
                    presidente del comitato 1 - Liguria della federazione
                    Italiana Vela, grande velista, grande manager esperto delle
                    reti di vendita nei mestieri del lusso ma soprattutto grande
                    amico) e degli 40 piedi del Grand Soleil che ha chiamato
                    Bluextasy.
                </p>
                <div className="flex justify-center my-4">
                    <Image
                        src="/teambuilding3.png"
                        alt="teambuilding"
                        width={400}
                        height={600}
                    />
                </div>
            </div>

            <div className="relative">
                <Image
                    src="/etnografia.png"
                    width={200}
                    height={300}
                    alt="formazione"
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                />
            </div>
            <div className="relative">
                <h4>Etnografa urbana applicata al retail</h4>
                <p>
                    Devi affrontare una questione strategica e vuoi sapere come
                    l’hanno risolta in altri settori perché guardare ai
                    concorrenti è utile ma a volte non basta?
                </p>
                <p>
                    Vuoi esplorare quali siano i cambiamenti più signifcativi in
                    alcuni settori vicini al tuo?
                </p>
                <p>
                    La chiave è nei negozi. Se c’è una risposta che funziona è
                    già lì.
                </p>
                <p>
                    <Link
                        href="https://www.milanoretailtour.com"
                        target="_blank"
                        className="underline"
                    >
                        Milano Retail Tour
                    </Link>{" "}
                    ti accompagna fisicamente a vedere quelli di Milano o della
                    città che preferisci o virtualmente in giro per il mondo.
                </p>
                <p>
                    Dal 2016 faccio parte del team che accompagna le visite e
                    che, a valle delle visite, facilita l’emergere di
                    consapevolezze e di concreti piani d’azione a sostegno del
                    cambiamento.
                </p>
            </div>
        </div>
    );
}
