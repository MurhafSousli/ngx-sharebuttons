/** REDDIT DOCS: http://stackoverflow.com/questions/24823114/post-to-reddit-via-url */

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/empty';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import { IShareButton, ShareButtonArgs, ShareButtonProp } from '../models/share-buttons.models';

export class RedditButton implements IShareButton {

  constructor(public prop: ShareButtonProp, private http: HttpClient) {
  }

  link(url: string, args?: ShareButtonArgs) {

    let shareUrl = this.prop.shareUrl + url;

    if (args.title) {
      shareUrl += '&title=' + args.title;
    }

    return shareUrl;
  }

  count(url: string) {

    return this.http.get<ICount>(this.prop.countUrl + url)
      .filter(res => !!(res.data && res.data.children && res.data.children.length))
      .map(res => +res.data.children[0].data.score)
      .catch(err => Observable.empty());
  }
}


/** Reddit count interface */

interface Source {
  url: string;
  width: number;
  height: number;
}

interface Resolution {
  url: string;
  width: number;
  height: number;
}

interface Image {
  source: Source;
  resolutions: Resolution[];
  id: string;
}

interface Preview {
  images: Image[];
  enabled: boolean;
}

interface Data2 {
  domain: string;
  approved_at_utc?: any;
  banned_by?: any;
  thumbnail_width: number;
  subreddit: string;
  selftext_html?: any;
  selftext: string;
  likes?: any;
  suggested_sort?: any;
  user_reports: any[];
  secure_media?: any;
  link_flair_text?: any;
  id: string;
  banned_at_utc?: any;
  view_count?: any;
  archived: boolean;
  clicked: boolean;
  report_reasons?: any;
  title: string;
  media?: any;
  mod_reports: any[];
  can_mod_post: boolean;
  author_flair_text?: any;
  score: number;
  approved_by?: any;
  over_18: boolean;
  hidden: boolean;
  preview: Preview;
  thumbnail: string;
  subreddit_id: string;
  edited: boolean;
  link_flair_css_class?: any;
  author_flair_css_class?: any;
  contest_mode: boolean;
  gilded: number;
  downs: number;
  brand_safe: boolean;
  saved: boolean;
  removal_reason?: any;
  post_hint: string;
  stickied: boolean;
  can_gild: boolean;
  thumbnail_height: number;
  parent_whitelist_status?: any;
  name: string;
  spoiler: boolean;
  permalink: string;
  subreddit_type: string;
  locked: boolean;
  hide_score: boolean;
  created: number;
  url: string;
  whitelist_status?: any;
  quarantine: boolean;
  author: string;
  created_utc: number;
  subreddit_name_prefixed: string;
  ups: number;
  num_comments: number;
  is_self: boolean;
  visited: boolean;
  num_reports?: any;
  is_video: boolean;
  distinguished?: any;
}

interface Child {
  kind: string;
  data: Data2;
}

interface Data {
  modhash: string;
  children: Child[];
  after?: any;
  before?: any;
}

interface ICount {
  kind: string;
  data: Data;
}
