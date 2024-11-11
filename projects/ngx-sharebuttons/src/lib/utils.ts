import { ShareButtonFuncArgs } from './share.models';

/** Returns a valid URL or falls back to current URL */
export function getValidUrl(url: string): string {
  const isValidUrl: boolean = /^(http|https):\/\//.test(url);
  if (isValidUrl) {
    return url;
  }
  console.warn(`[ShareButtons]: Sharing link '${ url }' is invalid!`);
  return null;
}

export function printPage(): void {
  return document.defaultView.print();
}

export function copyToClipboard({
                                  params,
                                  data,
                                  clipboard,
                                  uiState
                                }: ShareButtonFuncArgs<CopyToClipboardDataArgs>): void {
  clipboard.copy(params.url);
  // Disable copy button
  uiState.set({ icon: data.successIcon, text: data.successText, disabled: true });
  setTimeout(() => {
    uiState.set({ icon: data.icon, text: data.text, disabled: false })
  }, data.delay);
}

interface CopyToClipboardDataArgs {
  delay: number;
  text: string;
  icon: any;
  successText: string;
  successIcon: any;
}
