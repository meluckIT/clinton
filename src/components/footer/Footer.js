import React, { useState } from 'react'

const FooterNewsletter = () => {

    const [email, setEmail] = useState("")
    const [success, setSuccess] = useState(false)

    const submitHandler = async (e) => {
        e.preventDefault()

        const response = await fetch("https://formspree.io/f/xqedrkna", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({ email })
        })

        if (response.ok) {
            setSuccess(true)
            setEmail("")
        }
    }

    return (
        <>
            {success && (
                <p className="text-green-400 mb-2">
                    ✅ Thanks for subscribing!
                </p>
            )}

            <form className="mt-[25px] relative" onSubmit={submitHandler}>

                <div className="input-1">
                    <input
                        type="email"
                        className="focus:outline-0 w-full bg-[#232925] h-[50px] text-white py-[6px] px-[15px] border border-[#222623]"
                        placeholder="Email Address *"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className="absolute right-[20px] top-[50%] -translate-y-1/2">
                    <button type="submit" aria-label="Send email">
                        <i className="ti-email"></i>
                    </button>
                </div>

            </form>
        </>
    )
}

export default FooterNewsletter