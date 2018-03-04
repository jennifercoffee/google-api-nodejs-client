/**
 * Copyright 2015 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {GoogleApis} from '../..';
import {BodyResponseCallback, GlobalOptions, MethodOptions} from '../../lib/api';
import {BaseAPI, createAPIRequest} from '../../lib/apirequest';

// TODO: We will eventually get the `any` in here cleared out, but in the
// interim we want to turn on no-implicit-any.

// tslint:disable: no-any


let self: Searchconsole;

/**
 * Google Search Console URL Testing Tools API
 *
 * Provides tools for running validation tests against single URLs
 *
 * @example
 * const google = require('googleapis');
 * const searchconsole = google.searchconsole('v1');
 *
 * @namespace searchconsole
 * @type {Function}
 * @version v1
 * @variation v1
 * @param {object=} options Options for Searchconsole
 */
export class Searchconsole extends BaseAPI {
  constructor(options: GlobalOptions, google: GoogleApis) {
    super(options, google);
    self = this;
  }
  urlTestingTools = {
    mobileFriendlyTest: {
      /**
       * searchconsole.urlTestingTools.mobileFriendlyTest.run
       * @desc Runs Mobile-Friendly Test for a given URL.
       * @alias searchconsole.urlTestingTools.mobileFriendlyTest.run
       * @memberOf! searchconsole(v1)
       *
       * @param {object} params Parameters for request
       * @param {searchconsole(v1).RunMobileFriendlyTestRequest} params.resource Request body data
       * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      run(params: any, options: MethodOptions|BodyResponseCallback<any>,
          callback?: BodyResponseCallback<any>) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl =
            options.rootUrl || 'https://searchconsole.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/v1/urlTestingTools/mobileFriendlyTest:run')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'POST'
              },
              options),
          params,
          requiredParams: [],
          pathParams: [],
          context: self
        };
        createAPIRequest(parameters, callback!);
      }

    }
  };
}
/**
 * @typedef BlockedResource
 * @memberOf! searchconsole(v1)
 * @type object
 * @property {string} url URL of the blocked resource.
 */
/**
 * @typedef Image
 * @memberOf! searchconsole(v1)
 * @type object
 * @property {string} data Image data in format determined by the mime type. Currently, the format will always be &quot;image/png&quot;, but this might change in the future.
 * @property {string} mimeType The mime-type of the image data.
 */
/**
 * @typedef MobileFriendlyIssue
 * @memberOf! searchconsole(v1)
 * @type object
 * @property {string} rule Rule violated.
 */
/**
 * @typedef ResourceIssue
 * @memberOf! searchconsole(v1)
 * @type object
 * @property {searchconsole(v1).BlockedResource} blockedResource Describes a blocked resource issue.
 */
/**
 * @typedef RunMobileFriendlyTestRequest
 * @memberOf! searchconsole(v1)
 * @type object
 * @property {boolean} requestScreenshot Whether or not screenshot is requested. Default is false.
 * @property {string} url URL for inspection.
 */
/**
 * @typedef RunMobileFriendlyTestResponse
 * @memberOf! searchconsole(v1)
 * @type object
 * @property {string} mobileFriendliness Test verdict, whether the page is mobile friendly or not.
 * @property {searchconsole(v1).MobileFriendlyIssue[]} mobileFriendlyIssues List of mobile-usability issues.
 * @property {searchconsole(v1).ResourceIssue[]} resourceIssues Information about embedded resources issues.
 * @property {searchconsole(v1).Image} screenshot Screenshot of the requested URL.
 * @property {searchconsole(v1).TestStatus} testStatus Final state of the test, can be either complete or an error.
 */
/**
 * @typedef TestStatus
 * @memberOf! searchconsole(v1)
 * @type object
 * @property {string} details Error details if applicable.
 * @property {string} status Status of the test.
 */
