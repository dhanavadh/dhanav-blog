function VideoSkeleton() {
   

    return (
        <div className="flex flex-col items-center justify-center min-h-screen w-full bg-black">
            <div className="flex items-center">
                {"Loading".split("").map((char, idx) => (
                    <span
                        key={idx}
                        className="text-neutral-200 text-lg uppercase font-bold animate-bounce"
                        style={{ animationDelay: `${idx * 0.1}s` }}
                    >
                        {char}
                    </span>
                ))}
                <span className="border-b-2 border-gray-800 w-full mt-2"></span>
            </div>
            
        </div>
    )
}
export default VideoSkeleton
