import { useState } from 'react';
import { useEffect } from 'react';

const Home = () => {

    const [msg, setMsg] = useState('');

    useEffect(() => {
        fetch('/api/test')
            .then(res => res.json())
            .then(data => setMsg(data.message));
    }, []);


    return (
        <div className="home">
            <h1>Welcome to Fade District</h1>
            <p>Your modern barbershop in Varna</p>
            <p>{msg}</p>
            <button>Book an Appointment</button>
        </div>
    );
};

export default Home;