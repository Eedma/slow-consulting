import path from "path";
import fs from "fs";
import Image from "next/image";

export const BrandsGrid = () => {
    const imageDirectory = path.join(process.cwd(), "public/brands");
    let imageFilenames: string[] = [];

    fs.readdir(imageDirectory, (err, files) => {
        if (err) console.log(err);
        else {
            imageFilenames = [...files];
            debugger;
            console.log("imageFilenames1", imageFilenames);
        }
    });

    console.log("imageFilenames2", imageFilenames);

    if (Array.isArray(imageFilenames))
        return (
            <div className="grid grid-cols-4 gap-4">
                {
                    !imageFilenames.map((el) => {
                        <p>{el}</p>;

                        <Image
                            src={`${imageDirectory}/${el}`}
                            height={200}
                            width={200}
                            alt={el}
                        />;
                    })
                }
            </div>
        );
};
