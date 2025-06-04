import { jsxs, Fragment, jsx } from 'react/jsx-runtime';
import { useEffect, useState } from 'react';

function FacebookEvent({ eventName, params = {} }) {
  useEffect(() => {
    if (typeof window.fbq !== "undefined") {
      if (params) {
        window.fbq("track", eventName, params);
        console.log(`Evento Facebook Pixel enviado: ${eventName}`, params);
      } else {
        window.fbq("track", eventName);
        console.log(`Evento Facebook Pixel enviado: ${eventName}`);
      }
    }
  }, [eventName, JSON.stringify(params)]);
  return null;
}

function TrackedLink({ href, children, eventName, params, className, target = "_blank" }) {
  const [fired, setFired] = useState(false);
  const handleClick = (e) => {
    console.log(typeof window.fbq);
    if (typeof window.fbq !== "undefined") {
      e.preventDefault();
      window.fbq("track", eventName, params);
      setFired(true);
      console.log(`Evento ${eventName} enviado con delay para navegación`);
      setTimeout(() => {
        window.location.href = href;
      }, 3e3);
    }
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("a", { href, onClick: handleClick, className, target, style: { fontFamily: "urbana" }, children }),
    fired && /* @__PURE__ */ jsx(FacebookEvent, { eventName, params })
  ] });
}

export { TrackedLink as T };
