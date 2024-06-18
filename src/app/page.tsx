import Image from "next/image";

export default function Home() {
    return (
        <div className="flex flex-col items-center">
            <div className="h-[23vh] md:h-[35vh] w-[80vw] relative my-8">
                <Image
                    src="/homepage.png"
                    alt="profile"
                    objectFit="contain"
                    fill
                />
            </div>

            <div>
                <p>La vita è fatta di tempo.</p>

                <p>
                    Il tempo, come tutte le cose rare, è prezioso e non va
                    sprecato; nessuno ti ridarà indietro le ore spese male.
                </p>

                <p>
                    Seneca ha scritto che {'"'}abbastanza lunga è la vita e data
                    con larghezza per la realizzazione delle cose più grandi, se
                    fosse tutta messa bene a frutto; ma quando si perde nella
                    dissipazione e nell{"'"}inerzia, quando non si spende per
                    nulla di buono, costretti dall{"'"}ultima necessità ci
                    accorgiamo che è passata senza averne avvertito il passare.
                    {'"'}
                </p>

                <p>
                    Lo slow consulting è un approccio che ti aiuta a riempire lo
                    spazio della tua vita che dedichi al lavoro non di tante
                    cose, ma solo delle cose di cui hai davvero bisogno, delle
                    cose che ti sono utili nel momento in cui ti sono utili.
                </p>

                <p>
                    Nel Timeo, Platone sostiene che le cose utili sono
                    necessariamente buone e che le cose buone sono
                    necessariamente belle.
                </p>

                <p>E le cose belle meritano tempo.</p>
            </div>
        </div>
    );
}
