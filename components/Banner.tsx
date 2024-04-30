const Banner = () => {
    return (
        <div className="container mx-auto py-12 md:py-16 lg:py-20">
            <div className="relative h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden rounded-lg">
                <img
                    alt="Banner Image"
                    className="absolute inset-0 h-full w-full object-cover"
                    height={1000}
                    src="/placeholder.svg"
                    style={{
                        aspectRatio: "1600/1000",
                        objectFit: "cover",
                    }}
                    width={1600}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/50 dark:to-gray-950/50" />
                <div className="absolute inset-0 flex items-center justify-center px-4 text-center">
                    <div className="max-w-2xl space-y-4">
                        <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
                            The Joke Tax Chronicles
                        </h1>
                        <p className="text-lg text-gray-200 md:text-xl">
                            A tale of a lazy king, a mischievous jokester, and
                            the birth of the world's most absurd tax.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
