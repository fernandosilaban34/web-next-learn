"use client"
import React, { useState } from 'react';
import {signIn} from "next-auth/react"

interface pageProps {
}

/**
 * 
 */
const page = ({ }: pageProps): JSX.Element => {

    const [username, setUsername] = useState<string>();
    const [password, setPassword] = useState<string>();

    const onSubmit = async () => {
        await signIn("credentials", {
            username: username,
            password: password,
            redirect: true,
            callbackUrl: "/"
        })
    }

    return (
        <div>
            <input placeholder='username' type='text' onChange={(e) => setUsername(e.target.value)}/>
            <input placeholder='password' type='password' onChange={(e) => setPassword(e.target.value)}/>
            <button onClick={onSubmit}>Login</button>
        </div>
    );
}
// #endregion

export default page;