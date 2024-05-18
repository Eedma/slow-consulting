import path from "path";
import fs from "fs";
import Image from "next/image";

export const BrandsGrid = () => {
    const files = [];
    for (let i = 1; i <= 54; i++) {
        i === 47 ? files.push(`${i}.jpeg`) : files.push(`${i}.png`);
    }

    console.log(files);

    return (
        <div className="grid grid-cols-3 gap-10 justify-items-center items-center mt-10">
            {files.map((el, i) => (
                <Image
                    key={i}
                    src={`/brands/${el}`}
                    height={200}
                    width={200}
                    alt={el}
                />
            ))}
        </div>
    );
};
