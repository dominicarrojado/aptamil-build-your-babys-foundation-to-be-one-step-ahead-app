import React, { Fragment, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import cn from 'classnames';
import { Dialog, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { getAssetUrl } from '../../lib/assets';
import { MENU_ITEMS } from '../../lib/constants';

export default function MobileMenu() {
  const { pathname } = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const openDialog = () => setIsOpen(true);
  const closeDialog = () => setIsOpen(false);

  return (
    <>
      <button
        className={cn(
          'outline-none ml-[5px] lg:hidden',
          'transition-colors before:hover:text-gray-300 focus-visible:text-gray-300'
        )}
        onClick={openDialog}
      >
        <span className="sr-only">Open menu</span>
        <Bars3Icon className="h-8 w-8" aria-hidden="true" />
      </button>
      <Transition
        show={isOpen}
        as={Fragment}
        enter="transition ease-out duration-300"
        enterFrom="opacity-0 -translate-x-full"
        enterTo="opacity-100 translate-x-0"
        leave="transition ease-in duration-300"
        leaveFrom="opacity-100 translate-x-0"
        leaveTo="opacity-0 -translate-x-full"
      >
        <Dialog as={Fragment} onClose={closeDialog}>
          <Dialog.Panel className="fixed inset-0 bg-blue-950 p-[20px] z-10 overflow-y-auto">
            <Fragment>
              <div className="w-full flex">
                <Transition
                  as={Fragment}
                  show={isOpen}
                  appear={true}
                  enter="transition-opacity ease-out duration-300 delay-500"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="transition-opacity ease-in duration-300 delay-500"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <button
                    className={cn(
                      'ml-auto outline-none',
                      'transition-colors hover:text-gray-300 focus-visible:text-gray-300'
                    )}
                    onClick={closeDialog}
                  >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-8 w-8" aria-hidden="true" />
                  </button>
                </Transition>
              </div>
              <nav className="flex flex-col gap-5">
                {MENU_ITEMS.map((menuItem, idx) => {
                  const num = (idx + 1).toString();
                  const isActive = pathname === menuItem.path;

                  return (
                    <Transition
                      key={num}
                      show={isOpen}
                      appear={true}
                      enter="transition ease-out duration-300"
                      enterFrom="opacity-0 -translate-x-[20px]"
                      enterTo="opacity-100 translate-x-0"
                      leave="transition ease-in duration-300"
                      leaveFrom="opacity-100 translate-x-0"
                      leaveTo="opacity-0 -translate-x-[20px]"
                      style={{
                        transitionDelay: `${idx * 100 + 300}ms`,
                      }}
                    >
                      <Link href={menuItem.path}>
                        <a
                          className={cn(
                            'flex items-center font-kghappy font-bold',
                            {
                              'text-sky-450': isActive,
                            }
                          )}
                          aria-current={isActive ? 'page' : undefined}
                          onClick={closeDialog}
                        >
                          <img
                            src={getAssetUrl(`images/icon-circle-${num}.png`)}
                            alt={num}
                            className="mr-2"
                          />
                          {menuItem.title}
                        </a>
                      </Link>
                    </Transition>
                  );
                })}
              </nav>
            </Fragment>
          </Dialog.Panel>
        </Dialog>
      </Transition>
    </>
  );
}
