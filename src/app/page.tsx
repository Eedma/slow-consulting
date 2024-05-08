import Image from "next/image";

export default function Home() {
    return (
        <div className="flex flex-col items-center">
            <Image
                src="/homepage.png"
                width={800}
                height={540}
                alt="homepage logo"
            />
            <div className="my-40">
                <p>La vita è fatta di tempo.</p>
                <br />
                <p>
                    Il tempo, come tutte le cose rare, è prezioso e non va
                    sprecato; nessuno ti ridarà indietro le ore spese male.
                </p>
                <br />
                <p>
                    Seneca ha scritto che {'"'}abbastanza lunga è la vita e data
                    con larghezza per la realizzazione delle cose più grandi, se
                    fosse tutta messa bene a frutto; ma quando si perde nella
                    dissipazione e nell{"'"}inerzia, quando non si spende per
                    nulla di buono, costretti dall{"'"}ultima necessità ci
                    accorgiamo che è passata senza averne avvertito il passare.
                    {'"'}
                </p>
                <br />
                <p>
                    Lo slow consulting è un approccio che ti aiuta a riempire lo
                    spazio della tua vita che dedichi al lavoro non di tante
                    cose, ma solo delle cose di cui hai davvero bisogno, delle
                    cose che ti sono utili nel momento in cui ti sono utili.
                </p>
                <br />
                <p>
                    Nel Timeo, Platone sostiene che le cose utili sono
                    necessariamente buone e che le cose buone sono
                    necessariamente belle.
                </p>
                <br />
                <p>E le cose belle meritano tempo.</p>
            </div>
        </div>
    );
}
