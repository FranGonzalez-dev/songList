import { useParams } from "react-router-dom";
import { useSong } from "../../hooks";

import { Container, Loader } from "../../components"
import { Check, CreatedDate, AdminButtons, Author } from "./_components";


const ExternalLinkButton = ({ link, children }) => {
    return (
        <a 
            href={ link }
            target="_blank"
            className="flex justify-center items-center gap-2 py-2 px-6 dark:text-gray-200 dark:bg-neutral-800 dark:border-neutral-900 text-gray-900 md:w-52 border-2 border-gray-100 bg-white h-16 rounded-lg transition duration-200 ease-in-out active:scale-90 hover:border-blue-200 hover:shadow-lg hover:scale-95"
        >
            { children }
        </a>
    )
}





export function SongDetails () {

    const { id } = useParams();
    const { song, isLoading } = useSong({ id })

    return (    
        isLoading 
        ? <Loader />
        : <Container title={ song.title }>

            <div className="flex flex-col items-center mt-4 relative" style={{minHeight: '60vh'}}>
            
                <Author name={ song.author }/>

                <Check rehearsed={ song.rehearsed } id={ song.id }/>
                

                <div className="flex flex-col md:flex-row justify-center gap-2 w-full my-4">

                    <ExternalLinkButton link={ song.lyrics }>
                        <i className="ri-play-list-fill"/>
                        Ver letra
                    </ExternalLinkButton>
                    
                    <ExternalLinkButton link={ song.url }>
                        <i className="ri-headphone-fill"/>
                        Escuchar
                    </ExternalLinkButton>    

                </div>
                
                <CreatedDate createdAt={ song.createdAt }/>
                
                <AdminButtons id={ song.id }/>

            </div>
        </Container>
    )
}