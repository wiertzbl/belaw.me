import Link from 'next/link';

interface ContactLink {
  name: string;
  url: string;
}

interface ContactLinksProps {
  links: ContactLink[];
}

export default function ContactLinks({ links }: ContactLinksProps) {
  return (
    <div className="contact-links">
      {links.map((link, index) => (
        <Link 
          key={index} 
          href={link.url} 
          target="_blank" 
          rel="noopener noreferrer"
        >
          {link.name}
        </Link>
      ))}
    </div>
  );
}