import Image from "next/image";
import BannerProps from "@/types/Banner";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const Banner = ({ title, summary, backgroundImage, ratio }: BannerProps) => {
    return (
        <div className="container mx-auto py-12 md:py-16 lg:py-20">
            <div className="relative h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden rounded-lg">
                <AspectRatio ratio={eval(ratio)}>
                    <Image
                        alt="Banner Image"
                        className="absolute inset-0 h-full w-full object-cover"
                        layout="fill"
                        objectFit="cover"
                        src={backgroundImage}
                    />
                </AspectRatio>
                <div className="absolute inset-0 flex items-center justify-center px-4 text-center">
                    <div className="max-w-2xl space-y-4">
                        <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
                            {title}
                        </h1>
                        <p className="text-lg text-gray-200 md:text-xl">
                            {summary}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
