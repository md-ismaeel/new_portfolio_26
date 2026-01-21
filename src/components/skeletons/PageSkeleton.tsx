export default function PageSkeleton() {
    return (
        <div className="min-h-screen w-full bg-background px-6 py-16">
            <div className="max-w-6xl mx-auto space-y-12 animate-pulse">

                {/* Title */}
                <div className="space-y-4">
                    <div className="h-10 w-2/5 rounded-xl bg-gray-400/20" />
                    <div className="h-5 w-3/5 rounded bg-gray-400/20" />
                </div>

                {/* Hero */}
                <div className="grid md:grid-cols-2 gap-10 items-center">
                    <div className="space-y-4">
                        <div className="h-6 w-full rounded bg-gray-400/20" />
                        <div className="h-6 w-5/6 rounded bg-gray-400/20" />
                        <div className="h-6 w-4/6 rounded bg-gray-400/20" />

                        <div className="flex gap-4 pt-4">
                            <div className="h-10 w-32 rounded-xl bg-gray-400/20" />
                            <div className="h-10 w-32 rounded-xl bg-gray-400/20" />
                        </div>
                    </div>

                    {/* Image / Profile */}
                    <div className="h-64 w-full rounded-3xl bg-gray-400/20" />
                </div>

                {/* Cards */}
                <div className="space-y-4">
                    <div className="h-8 w-1/4 rounded bg-gray-400/20" />
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
                        {[...Array(6)].map((_, i) => (
                            <div
                                key={i}
                                className="h-40 rounded-3xl bg-gray-400/20"
                            />
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
}