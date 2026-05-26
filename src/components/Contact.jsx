import "./Contact.scss";

const Contact = () => {
    return (
        <section className="contact">
            <h2>Get In Touch</h2>
            <form className="contact-form">
                <input type="text" placeholder="Your Name" />
                <input type="email" placeholder="Email" />
                <textarea placeholder="Message"></textarea>
                <button type="submit" className="btn primary">Send Message</button>
            </form>
        </section>
    );
};

export default Contact;
