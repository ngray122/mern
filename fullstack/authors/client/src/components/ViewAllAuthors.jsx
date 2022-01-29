import React, { useEffect, useState } from 'react';
import {
    BrowserRouter,
    Link
} from 'react-router-dom';
import axios from 'axios'
import { useHistory } from 'react-router-dom';



const ViewAllAuthors = () => {


    let [arrOfAuthorObj, setArrOfAuthorObj] = useState([]);

    let [deleted, setDeleted] = useState(false);

    const history = useHistory();



    // When reloading after delete, don't forget variable in axios brackets
    useEffect(() =>
        axios.get('http://localhost:8000/api/author/all')
            .then(res => {
                // sort alpabetically. Upper case/lowercase?
                res.data.result.sort(function (a, b) {
                    if (a.name < b.name) { return -1; }
                    if (a.name > b.name) { return 1; }
                    return 0;
                })
                setArrOfAuthorObj(res.data.result)

                console.log('GET ALL SUCCESS ==>> ', res)
            })
            .catch(err => console.log("error in submitting get all request")), [deleted])




    const deleteOneAuthor = (authorId) => {
        console.log(authorId)
        axios.delete(`http://localhost:8000/api/author/delete/${authorId}`)
            .then(res =>
                setDeleted(!deleted),
            )
            .catch(err => console.log("error in submitting delete request"))
    }





    return (
        <div className='flex justify-content-center'>
            <h1 className="m-4">Favorite Authors</h1>
            <Link to={'/author/addnew'}>Add an Author</Link>
            <h3 className="m-4">We have quotes by:</h3>
            <br />
            <table className="table table-bordered table-striped align-middle">
                <thead>
                    <tr>
                        <th>Author</th>
                        <th>Actions Available</th>
                    </tr>
                </thead>
                {

                    arrOfAuthorObj.map((authorObj, i) => {
                        return (
                            <tbody key={i}>
                                <tr className="">
                                    {/* <th scope="row"></th> */}
                                    <td>{authorObj.name}</td>
                                    <td> <Link to={`/author/update/${authorObj._id}`} className="btn btn-primary m-3">Edit</Link>
                                        <button onClick={() => deleteOneAuthor(authorObj._id)} className="btn btn-primary">Delete Author</button>
                                    </td>
                                </tr>

                            </tbody>


                        )
                    })


                }

            </table>



        </div>


    )
};

export default ViewAllAuthors;
