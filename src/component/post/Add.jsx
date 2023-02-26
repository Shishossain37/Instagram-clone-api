import React from 'react';
import { Link } from 'react-router-dom';
import './add.css'
import { useNavigate } from "react-router-dom";

function Add(props) {
    const navigate = useNavigate();
    async function FormHandler(e) {
        e.preventDefault();
        console.log(e.target);
        let formData = new FormData(e.target);
        let dataFromForm = Object.fromEntries(formData.entries());
        console.log(dataFromForm);

        await fetch("/app/posts", {
            method: "post",
            body: formData,
            redirect: "follow"
        })
            .then(res => {
                return res.text();
            })
            .then(text => {
                console.log(text);
            })
            .catch(err => {
                console.log(err);
            })
        navigate("/post");
    }
    return(
        <div>
            
            <h1>Update here</h1>
            <form onSubmit={FormHandler} id="container">
        <input type={"file"} name="PostImage" id="input_file" accept=".jpg, .jpeg, .png, .pdf" required={true}></input>
        <input type={"text"} name="name" id="input_author" placeholder="Author" required={true}></input>
        <input type={"text"} name="location" id="input_location" placeholder="Location" required={true}></input>
        <input type={"text"} name="description" id="input_description" placeholder="Descirption" required={true}></input>
        <button id="button">Post</button>
    </form>
    <Link className='fa' to='/post'><i class="fa fa-arrow-left" aria-hidden="true"></i> Back to home</Link>
        </div>
        
    )
        
}

export default Add;
