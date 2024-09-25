import ContactLinks from "./ContactLinks";

const contactLinks = [
  { name: 'Twitter', url: 'https://twitter.com/blwiertz' },
  { name: 'LinkedIn', url: 'https://linkedin.com/in/bela-wiertz' },
  { name: 'Email', url: 'mailto:bela.wiertz@gmail.com' },
];

export default function Contact() {
  return (
    <main className="contact-page">
      <h1>Contact Me</h1>
      <p>Feel free to reach out to me through any of the following channels:</p>
      <ContactLinks links={contactLinks} />
      <p>I'm always open to interesting conversations and opportunities!</p>
    </main>
  );
}