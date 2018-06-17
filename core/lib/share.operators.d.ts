import { OperatorFunction } from 'rxjs';
/**
 * Meta tags operator - Serialize meta tags into the sharer URL
 */
export declare const metaTagsOperators: OperatorFunction<any, any>[];
/**
 * Print button operator
 */
export declare const printOperators: OperatorFunction<any, any>[];
/**
 * Copy link to clipboard, used for copy button
 */
export declare const copyOperators: OperatorFunction<any, any>[];
/**
 * Add the share URL to message body, used for WhatsApp and Email buttons
 */
export declare const urlInMessageOperators: OperatorFunction<any, any>[];
export declare const FacebookCountOperators: OperatorFunction<any, any>[];
export declare const PinterestCountOperators: OperatorFunction<any, any>[];
export declare const TumblrCountOperators: OperatorFunction<any, any>[];
export declare const RedditCountOperators: OperatorFunction<any, any>[];
