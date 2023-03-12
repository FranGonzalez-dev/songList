

export const SongList = ( { data } ) => {
    return (
        <div className="song--container"> 
            {
                data.map( (item, id) => (
                    <div className="song" key={id}>
                        <div className="song--info">
                            <p>{item.title}</p>
                            <a href={item.link}>Link</a>
                        </div>
                        <input type="checkbox" checked={item.completed}/>
                    </div>
                ))
            }       
        </div>
    )
}
