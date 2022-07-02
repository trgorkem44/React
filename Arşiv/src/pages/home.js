import { useEffect, useState } from "react";
import BookCard from "../componets/card";
import { Services } from "../services";

function Home() {
    const services = new Services();
    const [bookList, setBooklist] = useState([]);
    useEffect(() => {
        services.getAllBookList().then(res => {
            setBooklist(res);
        })
    }, [])
    return (<div className="container">
    <div className="row">
        {
            bookList.map((item,index)=>(
            <div key={index} className="col-3">
                <BookCard book={item}  />
            </div> 
            ))
        }
    </div>

    </div>);
}

export default Home; <>
</>