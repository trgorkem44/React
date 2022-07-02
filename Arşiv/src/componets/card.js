function BookCard({book}) {
    return (<>
        <div className="card " style={{width:'18rem'}}>
            <img src={book.imgUrl} className="card-img-top"  alt="..." />
            <div className="card-body">
                <h5 className="card-title">{book.name}</h5>
            
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">Yazar Adı {book.anathor}</li>
                <li className="list-group-item">Sayfa Sayısı {book.pageCount}</li>
                <li className="list-group-item">Yayın Evi {book.publisher}</li>
            </ul>
        </div>
    </>);
}

export default BookCard;