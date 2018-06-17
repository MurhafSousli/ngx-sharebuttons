import { Observable } from 'rxjs';
/** Deep merge two objects.*/
export declare function mergeDeep(target: any, ...sources: any[]): any;
/** Returns a readable number from share count */
export declare function shareCountFormatter(num: number, digits: number): string;
/** Copy text to clipboard */
export declare function copyToClipboard(url: string, browser: string): Observable<any>;
/** Get meta tag content */
export declare function getMetaContent(key: string): string;
/** Detect operating system 'ios', 'android', or 'desktop' */
export declare function getOS(): string;
/** Returns a valid URL or falls back to current URL */
export declare function getValidUrl(url: string, fallbackUrl: string): string;
