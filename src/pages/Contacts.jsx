function Contacts() {
  return (
    <section id="contact" className="contact-me">
      <article>
        <div>
          <h1>
            Let's Discuss Something <span>Cool</span> Together
          </h1>
        </div>
        <div>
          <p>I'm Interested In</p>
          <form action="https://formspree.io/f/xpwrgbej" method="POST">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />
            <textarea
              name="message"
              placeholder="Please describe what you want"
              required
            ></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </article>
    </section>
  );
}

export default Contacts;
