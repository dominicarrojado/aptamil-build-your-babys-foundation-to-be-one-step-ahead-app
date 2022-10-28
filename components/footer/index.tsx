import React, { useState } from 'react';
import cn from 'classnames';
import { trackEvent } from '../../lib/google-analytics';
import ModalDisclaimers from './modalDisclaimers';
import ModalTnc from './modalTnc';
import { GoogleAnalyticsEvent } from '../../lib/types';

export default function Footer() {
  const [dcIsOpen, setDcIsOpen] = useState(false);
  const [tncIsOpen, setTncIsOpen] = useState(false);
  const openDcDialog = (e: React.MouseEvent<HTMLButtonElement>) => {
    setDcIsOpen(true);

    const { currentTarget } = e;

    trackEvent({
      event: GoogleAnalyticsEvent.MODAL_OPEN,
      buttonText: currentTarget.textContent || currentTarget.innerText,
    });
  };
  const closeDcDialog = () => setDcIsOpen(false);
  const openTncDialog = (e: React.MouseEvent<HTMLButtonElement>) => {
    setTncIsOpen(true);

    const { currentTarget } = e;

    trackEvent({
      event: GoogleAnalyticsEvent.MODAL_OPEN,
      buttonText: currentTarget.textContent || currentTarget.innerText,
    });
  };
  const closeTncDialog = () => setTncIsOpen(false);

  return (
    <footer
      className={cn(
        'py-[30px] px-[20px] text-sky-450 font-light text-center select-none',
        'xl:text-right'
      )}
    >
      <button type="button" className="hover:underline" onClick={openDcDialog}>
        Disclaimers
      </button>
      <span className="mx-3">|</span>
      <button type="button" className="hover:underline" onClick={openTncDialog}>
        Terms &amp; Conditions
      </button>
      <ModalDisclaimers isOpen={dcIsOpen} onClose={closeDcDialog} />
      <ModalTnc isOpen={tncIsOpen} onClose={closeTncDialog} />
    </footer>
  );
}
