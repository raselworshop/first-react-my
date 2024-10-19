import './book.css'
export default function Book({book}){
    const {id, name, price, edition}=book
    return(
        <div className='book'>
            <h3>Book Name:{name}</h3>
            <p>ID: {id}</p>
            <p>Price: {price}</p>
            <p>Edition: {edition}</p>
        </div>
    )
}