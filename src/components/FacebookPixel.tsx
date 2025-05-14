import { useEffect } from 'react';

type Props = {
  eventName: string;
  params?: Record<string, any>;
};

declare global {
  interface Window {
    fbq?: (...args: any[]) => void;
  }
}

export default function FacebookEvent({ eventName, params = {} }: Props) {
  useEffect(() => {
    if (typeof window.fbq !== 'undefined') {
      if (params) {
        window.fbq('track', eventName, params);
        console.log(`Evento Facebook Pixel enviado: ${eventName}`, params);
    } else {
        window.fbq('track', eventName);
        console.log(`Evento Facebook Pixel enviado: ${eventName}`);
      }
    }
  }, [eventName, JSON.stringify(params)]);

  return null;
}