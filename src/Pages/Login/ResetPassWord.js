import React, { useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../Contexts/AuthProvider';

const ResetPassWord = () => {
    const [userEmail, setUserEmail] = useState('');
    const { resetPassword } = useContext(AuthContext);

    //Onblur to get email
    const handleEmail = event => {
        const email = event.target.value;
        console.log(email);
        setUserEmail(email)
    }

    //Reset password function
    const handleReset = (event) => {
        event.preventDefault()
        const form = event.target
        resetPassword(userEmail)
            .then(() => {
                alert("Reset PassWord Email send.")
                form.reset()
            })
            .catch(error => console.log(error))
    }



    return (
        <div>
            <form onSubmit={handleReset} className='h-96 text-center pt-24'>
                <h2 className='text-3xl mb-7 font-bold'>Reset Password</h2>
                <input onBlur={handleEmail} name='email' type="email" placeholder="Email" className="input input-bordered w-full max-w-xs" />
                <br />
                <input type="submit" className='btn btn-info mt-5' value={'Reset password'} />
            </form>
        </div>
    );
};

export default ResetPassWord;