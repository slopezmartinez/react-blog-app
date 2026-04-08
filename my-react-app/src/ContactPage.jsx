function ContactPage(){
    return(
        <div className="post-card">
            <h2>Contact Us</h2>
            <form>
                <label>Name</label>
                <input type="text" placeholder="Your Name" />
                <label>Email</label>
                <input type="email" placeholder="Your Email" />
                <label>Message</label>
                <textarea placeholder="Your Message" rows={5}/>
                <button type="submit">Send Message</button>
            </form>
        </div>
    )
}

export default ContactPage