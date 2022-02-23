import { useState } from "react";
const ShowsList = (props)=>{
    const[shows, setShows] = useState(props.initialShows || []);
    const[show,setShow] = useState('')

    const renderShows =()=>{
        return shows.map((x)=>{
            return(
                <div
                key={x.id}
                style={{textDecoration : x.watched ? 'line-through':''}}
                >
                    <p onClick={()=>toggleShow(x.id)}>{x.show}</p>
                    <button onClick = {()=>deleteShow(x.id)}>Delete</button>

                </div>
            );
        });
    };
    const toggleShow =(changedToWatched)=>{
        const updatedShows = shows.map((show)=>{
            if(show.id===changedToWatched.id){
                return{...show, watched: !show.watched}
            }
            return show
        })
        setShows(updatedShows)
    }

    const deleteShow = (id)=>{
        let filterShows = shows.filter(x=>{
            return x.id !==id
        })
        setShows(filterShows)
    }

    const handleSubmit = (event)=>{
        event.preventDefault()
        console.log(event)
        console.log('Show:', show)
        const newShows = [...shows, {id:Math.random(), show: show, watched: false}]
        setShows(newShows)
        setShow('')
        return(event)
    }
    return (
        <div>
            
            <h1>{props.name}</h1>
            <form onSubmit={handleSubmit}>
            <p>Show Name:</p>
            <input value={show} onChange={(event)=> {setShow(event.target.value)}}/>
            <button type='submit'>add</button>
            </form>
            <div>{renderShows()}</div>
        </div>
    )
};

export default ShowsList;