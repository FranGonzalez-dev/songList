export function Container ({ title, children }) {
    return (
        <main className="animate__animated animate__fadeIn min-h-full container mx-auto px-4">
            <h1 className="text-4xl font-semibold text-slate-800 text-center mt-8 capitalize dark:text-gray-100">
                { title }
            </h1>
            { children }
        </main>
    )
}