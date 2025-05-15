import { useState } from 'react';
import FacebookPixel from './FacebookPixel';

type Props = {
  href: string;
  children: React.ReactNode;
  eventName: string;
  target: string
  className: string
  params?: Record<string, any>;
};

export default function TrackedLink({ href, children, eventName, params, className, target = '_blank' }: Props) {
  const [fired, setFired] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    console.log(typeof window.fbq);
    
    if (typeof window.fbq !== 'undefined') {
      e.preventDefault();
      window.fbq('track', eventName, params);
      setFired(true);
      console.log(`Evento ${eventName} enviado con delay para navegación`);

      setTimeout(() => {
        window.location.href = href;
      }, 3000);
    }
  };

  return (
    <>
      <a href={href} onClick={handleClick} className={className} target={target} style={{fontFamily: 'urbana'}}>
        {children}
      </a>
      {fired && <FacebookPixel eventName={eventName} params={params} />}
    </>
  );
}