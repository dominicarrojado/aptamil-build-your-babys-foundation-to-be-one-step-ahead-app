import { PROJECT_TITLE } from './constants';
import { checkIsLocalhost } from './location';
import {
  EventContestFormSubmit,
  EventContestReceiptUpload,
  EventContestShare,
  EventContestStart,
  EventContestWin,
} from './types';

declare global {
  interface Window {
    dataLayer: Array<Record<string, any>>;
  }
}

export function trackEvent(
  data:
    | EventContestStart
    | EventContestWin
    | EventContestShare
    | EventContestFormSubmit
    | EventContestReceiptUpload
) {
  if (checkIsLocalhost()) {
    return;
  }

  window.dataLayer = Array.isArray(window.dataLayer) ? window.dataLayer : [];
  window.dataLayer.push({
    ...data,
    projectTitle: PROJECT_TITLE,
  });
}
