import React, {useState} from 'react';
import "../../style/pages/contact/ContactPage.scss";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });
    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleInputChange = (e: any) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setErrorMessage("");
        setSuccessMessage("");

        if (!formData.name || !formData.email || !formData.message) {
            setErrorMessage("Tous les champs sont requis.");
            return;
        }

        try {
            await new Promise((resolve) => setTimeout(resolve, 2000));
            setSuccessMessage("Votre message a été envoyé avec succès !");
            setFormData({name: "", email: "", message: ""});
        } catch (error) {
            setErrorMessage("Une erreur s'est produite. Veuillez réessayer plus tard.");
        }
    };

    return (
        <div className="contact-page">
            <h1>Contact me</h1>
            {successMessage && <p className="success-message">{successMessage}</p>}
            {errorMessage && <p className="error-message">{errorMessage}</p>}

            <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your name"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Your email"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Your message"
                    ></textarea>
                </div>

                <button type="submit" className="btn-submit">Send</button>
            </form>
        </div>
    );
}