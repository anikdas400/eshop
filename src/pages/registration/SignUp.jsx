import React,{ useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import myContext from '../../context/data/myContext'
import { toast } from 'react-toastify';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import {auth, fireBD} from '../../firebase/FirebaseConfig'
import { addDoc, collection, Timestamp } from 'firebase/firestore';
import Loader from '../../components/loader/Loader'

const SignUp = () => {
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    

    const context = useContext(myContext)
    const {loading, setLoading} = context

    const handleSignup = async () =>{
        setLoading(true)
        // console.log(name,email,password)
        if(name === "" || email === "" || password === ""){
            return toast.error("All required fields")
        }
        try {
            const users = await createUserWithEmailAndPassword( auth, email, password )
            // console.log(users)
            const user ={
                name: name,
                uid: users.user.uid,
                email: users.user.email,
                time: Timestamp.now()
            }
            const userRef = collection(fireBD, "users")
            await addDoc(userRef, user)
            toast.success("signup successfully")      
            setName("")
            setEmail("")
            setPassword("")
            setLoading(false)

        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    } 

    return (
        <div className=' flex justify-center items-center h-screen'>
        {loading && <Loader/>}
        <div className=' bg-gray-800 px-10 py-10 rounded-xl '>
            <div className="">
                <h1 className='text-center text-white text-xl mb-4 font-bold'>SignUp</h1>
            </div>
            <div>
                <input type="text"
                value={name}
                onChange={(e)=> setName(e.target.value)}
                    name='name'
                    className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                    placeholder='Name'
                />
            </div>
            <div>
                <input type="email"
                value={email}
                onChange={(e)=> setEmail(e.target.value)}
                    name='email'
                    className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                    placeholder='Email'
                />
            </div>
            <div>
                <input
                value={password}
                onChange={(e)=> setPassword(e.target.value)}
                    type="password"
                    className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                    placeholder='Password'
                />
            </div>
            <div className=' flex justify-center mb-3'>
                <button
                onClick={handleSignup}
                    className=' bg-purple-500 w-full text-white font-bold  px-2 py-2 rounded-lg'>
                    SignUp
                </button>
            </div>
            <div>
                <h2 className='text-white'>Have an account ? please <Link className=' text-purple-500 font-bold' to={'/login'}>Login</Link></h2>
            </div>
        </div>
    </div>
    );
};

export default SignUp;