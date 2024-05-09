import Image from "next/image";
import Link from "next/link";

export default function ServicesPage() {
    return (
        <div>
            <p>
                La parola consulenza viene dal latino cum-sidere che potresti
                tradurre con “sedere con”, “stare affianco a”.
            </p>
            <br />
            <p>
                Un concetto molto “slow” che ho applicato sostenendo aziende del
                design, della gioielleria e della meccanica preziosa a cercare e
                a esprimere la parte migliore di se stesse.
            </p>
            <br />
            <p>Metto a tua disposizione:</p>
            <br />
            <ul className={"list-disc list-inside"}>
                <li>
                    quest’approccio che si esprime anche attraverso il coaching,
                    la formazione e la narrazione;
                </li>
                <br />
                <li>
                    una visione sistemica che mi viene dall’aver lavorato su
                    molti progetti diversi e aver percepito quanto si
                    influenzino a vicenda.
                </li>
            </ul>
            <Image
                src="/flowers.png"
                height={680}
                width={300}
                alt="flowers"
                style={{
                    transform: "rotate(45deg)",
                    position: "absolute",
                    top: "25rem",
                    left: "0",
                }}
            />
            <div className="flex flex-col items-center my-10">
                <div>
                    <Link href="/services/coaching">
                        <h3>coaching</h3>
                    </Link>
                </div>
                <div>
                    <Link href="/services/formazione">
                        <h3>formazione</h3>
                    </Link>
                </div>
                <div>
                    <Link href="/services/sviluppo">
                        <h3>sviluppo nuove competenze</h3>
                    </Link>
                </div>
                <div>
                    <Link href="/services/story-telling">
                        <h3>(hi)story telling</h3>
                    </Link>
                </div>
            </div>
        </div>
    );
}
