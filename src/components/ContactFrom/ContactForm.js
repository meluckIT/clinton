import React, { useState } from 'react'
import SimpleReactValidator from 'simple-react-validator';

const ContactForm = () => {

    const [forms, setForms] = useState({
        name: '',
        email: '',
        subject: '',
        phone: '',
        message: ''
    });

    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);

    const [validator] = useState(new SimpleReactValidator({
        className: 'errorMessage'
    }));

    const changeHandler = e => {
        setForms({ ...forms, [e.target.name]: e.target.value })

        if (validator.allValid()) {
            validator.hideMessages();
        } else {
            validator.showMessages();
        }
    };

    const submitHandler = async (e) => {
        e.preventDefault();

        if (validator.allValid()) {

            setLoading(true);
            setSuccess(false);
            setError(false);

            try {
                const response = await fetch("https://formspree.io/f/xqedrkna", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "application/json"
                    },
                    body: JSON.stringify(forms)
                });

                if (response.ok) {

                    setSuccess(true);

                    setForms({
                        name: '',
                        email: '',
                        subject: '',
                        phone: '',
                        message: ''
                    });

                } else {
                    setError(true);
                }

            } catch {
                setError(true);
            }

            setLoading(false);
            validator.hideMessages();

        } else {
            validator.showMessages();
        }
    };

    return (
        <form onSubmit={submitHandler} className="contact-validation-active">

            {success && (
                <p className="text-green-500 mb-4">
                    ✅ Message sent successfully!
                </p>
            )}

            {error && (
                <p className="text-red-500 mb-4">
                    ❌ Something went wrong. Please try again.
                </p>
            )}

            <div className='grid grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-3'>
                <div className="form-field">
                    <input
                        value={forms.name}
                        type="text"
                        name="name"
                        onBlur={changeHandler}
                        onChange={changeHandler}
                        placeholder="Your Name"
                    />
                    {validator.message('name', forms.name, 'required|alpha_space')}
                </div>

                <div className="form-field">
                    <input
                        value={forms.email}
                        type="email"
                        name="email"
                        onBlur={changeHandler}
                        onChange={changeHandler}
                        placeholder="Your Email"
                    />
                    {validator.message('email', forms.email, 'required|email')}
                </div>
            </div>

            <div className="form-field">
                <input
                    value={forms.phone}
                    type="text"
                    name="phone"
                    onBlur={changeHandler}
                    onChange={changeHandler}
                    placeholder="Your Phone"
                />
                {validator.message('phone', forms.phone, 'required')}
            </div>

            <div className="form-field mb-5">
                <select
                    onBlur={changeHandler}
                    onChange={changeHandler}
                    value={forms.subject}
                    name="subject"
                >
                    <option value="">Choose a Service</option>
                    <option value="Design">Design</option>
                    <option value="Web Development">Web Development</option>
                    <option value="Marketing">Marketing</option>
                    <option value="SEO">Search Engine Optimization</option>
                </select>

                {validator.message('subject', forms.subject, 'required')}
            </div>

            <div className="form-field mb-5">
                <textarea
                    onBlur={changeHandler}
                    onChange={changeHandler}
                    value={forms.message}
                    name="message"
                    placeholder="Message"
                ></textarea>

                {validator.message('message', forms.message, 'required')}
            </div>

            <div className="submit-area">
                <button type="submit" className="theme-btn" disabled={loading}>
                    {loading ? "Sending..." : "Submit Now"}
                </button>
            </div>

        </form>
    )
}

export default ContactForm;