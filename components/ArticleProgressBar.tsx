"use client";

import React, { useEffect, useState } from "react";
import { Progress } from "@/components/ui/progress";

const ArticleReadingProgress = ({ initialProgress = 0 }) => {
    const [progress, setProgress] = useState(initialProgress);

    useEffect(() => {
        const handleScroll = () => {
            const totalHeight = document.body.scrollHeight - window.innerHeight;
            const progressValue = (window.pageYOffset / totalHeight) * 100;

            setProgress(progressValue);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <Progress
            className="sticky bottom-0 left-0 right-0 z-50 h-2 w-full overflow-hidden"
            value={progress}
        />
    );
};

export default ArticleReadingProgress;
