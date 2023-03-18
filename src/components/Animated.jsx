export const Animated = ({ children, userClass = '' }) => {
    return (
        <div className={`animate__animated animate__fadeIn ${ userClass }`}>
            { children }
        </div>
    )
}