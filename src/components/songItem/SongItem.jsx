import { Link } from "react-router-dom"
import { style } from "./styles"
import { Ping } from "../ping/Ping";

export function SongItem ( song ) {
    const now = new Date();
    return (
        <Link to={`/song/${ song.id }`} className={ style }>
            { 
                song.createdAt?.toDate() > new Date(now.getTime() - 7200000) && 
                <Ping />
            }
            <h3 className="capitalize text-gray-900 dark:text-gray-200">{ song.title }</h3>
        </Link>
    )
}