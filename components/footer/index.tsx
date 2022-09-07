import React, { useState } from 'react';
import cn from 'classnames';
import ModalDisclaimers from './modalDisclaimers';
import ModalTnc from './modalTnc';

export default function Footer() {
  const [dcIsOpen, setDcIsOpen] = useState(false);
  const [tncIsOpen, setTncIsOpen] = useState(false);
  const openDcDialog = () => setDcIsOpen(true);
  const closeDcDialog = () => setDcIsOpen(false);
  const openTncDialog = () => setTncIsOpen(true);
  const closeTncDialog = () => setTncIsOpen(false);

  return (
    <footer
      className={cn(
        'py-[30px] px-[20px] text-sky-450 font-light text-center',
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
