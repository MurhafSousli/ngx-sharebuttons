/** Share links functions:
 *  ShareLinks: Provide a share links for all services
 * */
import { ShareArgs } from "../helpers/share-buttons.class";
export declare module ShareLinks {
    function fbShare(args: ShareArgs): string;
    function twitterShare(args: ShareArgs): string;
    function linkedInShare(args: ShareArgs): string;
    function redditShare(args: ShareArgs): string;
    function tumblrShare(args: ShareArgs): string;
    function stumbleShare(args: ShareArgs): string;
    function gPlusShare(args: ShareArgs): string;
    function pinShare(args: ShareArgs): string;
}
