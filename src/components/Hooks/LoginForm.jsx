import React, { useState } from 'react';
const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (

        <div className="App">
            <header className="App-header">
                <form onSubmit={(e) => {
                    e.preventDefault();
                    // Handle form submission here
                }}>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input value={password} onChange={(e) => setPassword(e.target.value)} />
                    <button type="submit">Submit</button>
                </form>
            </header>
        </div>
    )

}
export default LoginForm;
