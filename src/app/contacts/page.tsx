import Image from "next/image";

export default function ContactsPage() {
    return (
        <div className="flex flex-col items-center gap-4">
            <p>+39 345 662 7413</p>
            <p>raffaele.ciardulli@slowconsulting.it</p>
            <Image
                src="/contacts.png"
                width={200}
                height={200}
                alt="contatti"
            />
        </div>
    );
}
