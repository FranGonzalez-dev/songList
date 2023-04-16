import { Link } from "react-router-dom"

export function Button ({ bg, hoverBg, textColor, text, icon = null, link = '/', action = null }) {
    return (
        <Link
            to={ link }
            className={`flex flex-row items-center gap-2 ${ bg } ${ textColor } h-8 px-3 rounded-lg transition ${ hoverBg } duration-300 ease-in-out active:scale-95`}
            onClick={ action }
        >
            <span>{ text }</span>
            { icon && <i className={`ri-${ icon }`}/>}
        </Link>
    )
}