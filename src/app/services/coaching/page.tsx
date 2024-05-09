import Image from "next/image";

export default function CoachingPage() {
    return (
        <div className="relative">
            <Image
                src="/coaching.png"
                width={200}
                height={400}
                alt="coaching"
                className="absolute top-0 right-4"
            />
            <h3>coaching</h3>
            <br />
            <p>Sono un coach ICF con credenziali ACC.</p>
            <br />
            <p>
                Questo vuol dire che posso sostenerti come coach perché certifco
                un percorso di formazione continua presso un’associazione
                internazionale che conta 50.000 associati in 50 paesi.
            </p>
            <br />
            <p>
                Un’associazione per la quale mi sono impegnato personalmente
                come volontario nell’area della comunicazione e
                nell’organizzazione di eventi (Coaching Expo e Il Dono del
                Coaching).
            </p>
            <br />
            <p>
                Un’associazione che defnisce il Coaching come una “partnership
                con i clienti che, attraverso un processo creativo, stimola la
                rifessione, ispirandoli a massimizzare il proprio potenziale
                personale e professionale”.
            </p>
            <br />
            <p>
                Il Coaching che propongo è una forma contemporanea di maieutica
                nella quale metto empatia, leggerezza, rigore etico, attenzione
                al metodo e risultati concreti.
            </p>
            <br />
            <p>
                Ho compreso che cosa sia il Coaching con Marina Osnaghi, ho
                studiato come team coach con Massimo Cardani: i miei clienti mi
                hanno insegnato che cos’è davvero il Coaching e qual è l’impatto
                che genera nella vita degli individui e delle organizzazioni.
            </p>
            <br />
            <p> Faccio parte della Comunità di Pratica di Coaching Milano 5.</p>
            <br />
            <p>
                Vivo con gratitudine, entusiasmo e disponibilità il mio lavoro
                di coach perché è davvero bello e importante esserci per
                l’altro.
            </p>
        </div>
    );
}
