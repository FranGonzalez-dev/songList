export const Author = ({ name }) => {
    if( name ) {
        return (
            <h2 className="capitalize font-medium tracking-widest text-blue-500 dark:text-blue-400 mb-2">
                { name }
            </h2>
        )
    } else { return null }
}