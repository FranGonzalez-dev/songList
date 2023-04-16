export const CreatedDate = ({ createdAt }) => {
    let date = '';
    if( createdAt !== undefined ) {
        date = new Date( createdAt.seconds * 1000).toLocaleDateString('es-ES', {
            day: 'numeric', 
            month: 'long', 
            year: 'numeric'
        });
    }
    return (
        <>
            { createdAt && 
                <h3 className="mt-4 text-xs text-gray-900 dark:text-gray-200 text-center italic">
                    Agregada el { date }
                </h3> 
            }
        </>        
    )
}