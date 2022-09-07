import { Fragment, ReactNode } from 'react';
import cn from 'classnames';
import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
};

export default function Modal({ isOpen, onClose, title, children }: Props) {
  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-50 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div
            className={cn(
              'flex items-center justify-center min-h-full p-[10px]',
              'sm:py-[30px]'
            )}
          >
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4"
              enterTo="opacity-100 translate-y-0"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-4"
            >
              <Dialog.Panel
                className={cn(
                  'relative transform overflow-hidden border-[5px] border-blue-850 rounded-[20px] bg-white text-left shadow-xl transition-all',
                  'sm:border-[8px] sm:w-[500px]',
                  'lg:border-[10px] lg:w-[800px]'
                )}
              >
                <div className="bg-blue-925 text-white">
                  <div className="flex pt-2 px-2">
                    <button
                      type="button"
                      className={cn('ml-auto outline-none text-blue-850')}
                      onClick={onClose}
                    >
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon
                        className={cn(
                          'w-6 h-6',
                          'sm:w-7 sm:h-7',
                          'lg:w-7 lg:h-7'
                        )}
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                  <div className="pb-[30px] px-[15px]">
                    <Dialog.Title
                      as="h3"
                      className={cn(
                        'font-kghappy text-[20px] text-center',
                        'sm:text-[26px]',
                        'lg:text-[32px]'
                      )}
                    >
                      {title}
                    </Dialog.Title>
                    <div
                      className={cn(
                        'mt-4 mx-auto font-mairy text-[18px] font-light max-w-[670px]',
                        'sm:text-[23px]'
                      )}
                    >
                      {children}
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
