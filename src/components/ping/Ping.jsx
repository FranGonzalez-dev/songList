import { pingStyle, animationStyle, containerStyle } from './styles'

export function Ping() {
    return (
        <span className={ containerStyle }>
            <span className={ animationStyle }/>
            <span className={ pingStyle }/>
        </span>
    )
}