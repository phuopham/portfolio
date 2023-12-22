export const SectionTitle = ({ children, className }: { children: string, className?: string }) => {
    return (
        <h2 className={`m-auto mt-32 py-3 px-12 inline-block text-3xl font-medium text-purple-700 mb-8 text-center ${className}`}>{children}</h2>
    )
}