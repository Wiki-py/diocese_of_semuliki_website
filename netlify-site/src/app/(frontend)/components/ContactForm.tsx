export function ContactForm() {
  return (
    <div className="contact-form">
      <p className="contact-form__intro">
        Online message submissions are unavailable on this site. Please email
        the Diocese directly.
      </p>
      <a
        className="contact-form__button"
        href="mailto:wac.semulikidiocese@gmail.com"
      >
        <span>Email the Diocese</span>
        <span aria-hidden="true">→</span>
      </a>
      <p className="contact-form__note">
        Your email app will open with a new message.
      </p>
    </div>
  )
}
