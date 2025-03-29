import Image from "next/image";

export default function CoachingPage() {
    return (
        <div className="relative">
            <Image
                src="/coaching.png"
                width={300}
                height={600}
                alt="coaching"
                className="absolute top-0 right-4 opacity-[30%]"
            />
            <h3 className="coaching">coaching</h3>

            <p>Sono un coach ICF con credenziali ACC.</p>

            <p>
                Questo vuol dire che posso sostenerti come coach perché
                certifico un percorso di formazione continua presso
                un’associazione internazionale che conta 50.000 associati in 50
                paesi.
            </p>

            <p>
                Un’associazione per la quale mi sono impegnato personalmente
                come volontario nell’area della comunicazione e
                nell’organizzazione di eventi (Coaching Expo e Il Dono del
                Coaching).
            </p>

            <p>
                Un’associazione che definisce il Coaching come una “partnership
                con i clienti che, attraverso un processo creativo, stimola la
                riflessione, ispirandoli a massimizzare il proprio potenziale
                personale e professionale”.
            </p>

            <p>
                Il Coaching che propongo è una forma contemporanea di maieutica
                nella quale metto empatia, leggerezza, rigore etico, attenzione
                al metodo e risultati concreti.
            </p>

            <p>
                Ho compreso che cosa sia il Coaching con Marina Osnaghi, ho
                studiato come team coach con Massimiliano Cardani: i miei
                clienti mi hanno insegnato che cos’è davvero il Coaching e qual
                è l’impatto che genera nella vita degli individui e delle
                organizzazioni.
            </p>

            <p> Faccio parte della Comunità di Pratica di Coaching Milano 5.</p>

            <p>
                Vivo con gratitudine, entusiasmo e disponibilità il mio lavoro
                di coach perché è davvero bello e importante esserci per
                l’altro.
            </p>
            <div className="flex justify-self-center my-[4rem] flex-col items-center">
                <Image
                    src="/certs/acc.png"
                    height={150}
                    width={150}
                    alt="acc"
                />
                <Image
                    src="/certs/cpc.png"
                    height={150}
                    width={200}
                    alt="acc"
                />
            </div>
        </div>
    );
}
