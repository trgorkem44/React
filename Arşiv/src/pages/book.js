import { useFormik } from "formik";
import { Services } from "../services";

function Book() {
    const services = new Services();
    const {handleSubmit,values,handleChange,handleReset} = useFormik({initialValues:{
        id:null,
        name:'',
        anathor:'',
        publisher:'',
        pageCount:'',
        imgUrl:'',
    },
    onSubmit:(values)=>{
        services.saveBook(values).then(()=>{
        alert('Kayıt Başarılı')
        handleReset();
        });
    }
        
    })
    return ( <div className="container">
        <form onSubmit={handleSubmit}>
            <div className="row">
                <div className="col-4">
                    <label htmlFor="name">Kitap İsmi</label>
                    <input name="name" value={values.name} onChange={handleChange} />
                </div>
                <div className="col-4">
                    <label htmlFor="anathor">Yazar</label>
                    <input name="anathor" value={values.anathor} onChange={handleChange} />
                </div>
                <div className="col-4">
                    <label htmlFor="publisher">Yayın Evi</label>
                    <input name="publisher" value={values.publisher} onChange={handleChange} />
                </div>
                <div className="col-4">
                    <label htmlFor="pageCount">Sayfa Sayısı</label>
                    <input name="pageCount" value={values.pageCount} onChange={handleChange} />
                </div>
                <div className="col-4">
                    <label htmlFor="imgUrl">Görsel</label>
                    <input name="imgUrl" value={values.imgUrl} onChange={handleChange} />
                </div>
                <div>
                    <button className="btn btn-success">Kaydet</button>
                </div>
            </div>
        </form>
    </div> );
}

export default Book;