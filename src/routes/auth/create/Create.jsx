import React, { useState } from 'react';
import {FcGoogle} from "react-icons/fc"
import { instance } from '../../../api/instance';
import { auth, provider } from '../../../firebase/FireBaseConfig';
import {useDispatch} from "react-redux"
import { useHistory } from 'react-router-dom';

const Create = () => {
    const dispatch = useDispatch();
    const history = useHistory()
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        name: "",
        avatar: ""

    })

    console.log(formData);
    const createAccountWithGoole = () => {
        auth.signInWithPopup(provider)
        .then(response => console.log(response))
        .cath(err => console.log(err))
    }

    const createUserWithEmail = (e) => {
        e.preventDefault()
        instance
            .post('/users', formData)
            .then(response =>  {
                if(response.data){
                    //send to store
                    dispatch(
                        {
                            email: response.data.email, type: "CREATE_EMAIL",
                            
                        }
                    )
                    history.push("/home")
                    
                }
            })
            .catch(err => console.log(err))
    }
    return (
        <div className='auth__create'>
            <button onClick={createAccountWithGoole} className='btn__google' > <FcGoogle/> Google bilan Xisob yaratish</button>
            <form className='form__create' onSubmit={createUserWithEmail}>
                <input type="text" placeholder='Email' onChange={e => setFormData({...formData, email: e.target.value})} />
                <input type="password" placeholder='Password'  onChange={e => setFormData({...formData, password: e.target.value})} />
                <input type="text" placeholder='Name' onChange={e => setFormData({...formData, name: e.target.value})} />
                <input type="url" placeholder='Avatar'  onChange={e => setFormData({...formData, avatar: e.target.value})} />
                <button type='submit'>Xisob yaratish</button>
            </form>
        </div>
    );
}

export default Create;
