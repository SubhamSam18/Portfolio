import React, { useState } from 'react'
import './index.scss'



const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [text, setText] = useState('');

    return (
        <div className='contact-container'>
            <div className='contact-heading'>
                <h1><br />Contact Me<br /></h1>
            </div>
            <form className='contact-body' >
                <div>
                    <input type="text" placeholder="Name" className='input-span' onChange={(e) => { setName(e.target.value) }}></input>
                    <input type="text" placeholder="Email ID" className='input-span' onChange={(e) => { setEmail(e.target.value) }}></input>
                </div>
                <div>
                    <input type="text" placeholder="Subject" className='input-text' onChange={(e) => { setSubject(e.target.value) }}></input>
                </div>
                <div>
                    <textarea placeholder="Text" rows='8' onChange={(e) => { setText(e.target.value) }} />
                </div>

                <a href={`mailto:subhamsamanta198@gmail.com?email =${email} &subject=${name} : ${subject} &body=${text}` }>
                S E N D</a>
            </form>
        </div>
    )
}

export default Contact
