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


let self: Prediction;

/**
 * Prediction API
 *
 * Lets you access a cloud hosted machine learning service that makes it easy to
 * build smart apps
 *
 * @example
 * const google = require('googleapis');
 * const prediction = google.prediction('v1.4');
 *
 * @namespace prediction
 * @type {Function}
 * @version v1.4
 * @variation v1.4
 * @param {object=} options Options for Prediction
 */
export class Prediction extends BaseAPI {
  constructor(options: GlobalOptions, google: GoogleApis) {
    super(options, google);
    self = this;
  }
  hostedmodels = {
    /**
     * prediction.hostedmodels.predict
     * @desc Submit input and request an output against a hosted model.
     * @alias prediction.hostedmodels.predict
     * @memberOf! prediction(v1.4)
     *
     * @param {object} params Parameters for request
     * @param {string} params.hostedModelName The name of a hosted model.
     * @param {prediction(v1.4).Input} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    predict(
        params: any, options: MethodOptions|BodyResponseCallback<any>,
        callback?: BodyResponseCallback<any>) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options = options || {};
      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl +
                    '/prediction/v1.4/hostedmodels/{hostedModelName}/predict')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['hostedModelName'],
        pathParams: ['hostedModelName'],
        context: self
      };
      createAPIRequest(parameters, callback!);
    }

  };
  trainedmodels = {
    /**
     * prediction.trainedmodels.delete
     * @desc Delete a trained model.
     * @alias prediction.trainedmodels.delete
     * @memberOf! prediction(v1.4)
     *
     * @param {object} params Parameters for request
     * @param {string} params.id The unique name for the predictive model.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
        params: any, options: MethodOptions|BodyResponseCallback<any>,
        callback?: BodyResponseCallback<any>) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options = options || {};
      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/prediction/v1.4/trainedmodels/{id}')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'DELETE'
            },
            options),
        params,
        requiredParams: ['id'],
        pathParams: ['id'],
        context: self
      };
      createAPIRequest(parameters, callback!);
    }, /**
        * prediction.trainedmodels.get
        * @desc Check training status of your model.
        * @alias prediction.trainedmodels.get
        * @memberOf! prediction(v1.4)
        *
        * @param {object} params Parameters for request
        * @param {string} params.id The unique name for the predictive model.
        * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
        * @param {callback} callback The callback that handles the response.
        * @return {object} Request object
        */
    get(params: any, options: MethodOptions|BodyResponseCallback<any>,
        callback?: BodyResponseCallback<any>) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options = options || {};
      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/prediction/v1.4/trainedmodels/{id}')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['id'],
        pathParams: ['id'],
        context: self
      };
      createAPIRequest(parameters, callback!);
    }, /**
        * prediction.trainedmodels.insert
        * @desc Begin training your model.
        * @alias prediction.trainedmodels.insert
        * @memberOf! prediction(v1.4)
        *
        * @param {object} params Parameters for request
        * @param {prediction(v1.4).Training} params.resource Request body data
        * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
        * @param {callback} callback The callback that handles the response.
        * @return {object} Request object
        */
    insert(
        params: any, options: MethodOptions|BodyResponseCallback<any>,
        callback?: BodyResponseCallback<any>) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options = options || {};
      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/prediction/v1.4/trainedmodels')
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
    }, /**
        * prediction.trainedmodels.predict
        * @desc Submit model id and request a prediction
        * @alias prediction.trainedmodels.predict
        * @memberOf! prediction(v1.4)
        *
        * @param {object} params Parameters for request
        * @param {string} params.id The unique name for the predictive model.
        * @param {prediction(v1.4).Input} params.resource Request body data
        * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
        * @param {callback} callback The callback that handles the response.
        * @return {object} Request object
        */
    predict(
        params: any, options: MethodOptions|BodyResponseCallback<any>,
        callback?: BodyResponseCallback<any>) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options = options || {};
      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/prediction/v1.4/trainedmodels/{id}/predict')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['id'],
        pathParams: ['id'],
        context: self
      };
      createAPIRequest(parameters, callback!);
    }, /**
        * prediction.trainedmodels.update
        * @desc Add new data to a trained model.
        * @alias prediction.trainedmodels.update
        * @memberOf! prediction(v1.4)
        *
        * @param {object} params Parameters for request
        * @param {string} params.id The unique name for the predictive model.
        * @param {prediction(v1.4).Update} params.resource Request body data
        * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
        * @param {callback} callback The callback that handles the response.
        * @return {object} Request object
        */
    update(
        params: any, options: MethodOptions|BodyResponseCallback<any>,
        callback?: BodyResponseCallback<any>) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options = options || {};
      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/prediction/v1.4/trainedmodels/{id}')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'PUT'
            },
            options),
        params,
        requiredParams: ['id'],
        pathParams: ['id'],
        context: self
      };
      createAPIRequest(parameters, callback!);
    }

  };
}
/**
 * @typedef Input
 * @memberOf! prediction(v1.4)
 * @type object
 * @property {object} input Input to the model for a prediction
 */
/**
 * @typedef Output
 * @memberOf! prediction(v1.4)
 * @type object
 * @property {string} id The unique name for the predictive model.
 * @property {string} kind What kind of resource this is.
 * @property {string} outputLabel The most likely class label [Categorical models only].
 * @property {object[]} outputMulti A list of class labels with their estimated probabilities [Categorical models only].
 * @property {number} outputValue The estimated regression value [Regression models only].
 * @property {string} selfLink A URL to re-request this resource.
 */
/**
 * @typedef Training
 * @memberOf! prediction(v1.4)
 * @type object
 * @property {object} dataAnalysis Data Analysis.
 * @property {string} id The unique name for the predictive model.
 * @property {string} kind What kind of resource this is.
 * @property {object} modelInfo Model metadata.
 * @property {string} selfLink A URL to re-request this resource.
 * @property {string} storageDataLocation Google storage location of the training data file.
 * @property {string} storagePMMLLocation Google storage location of the preprocessing pmml file.
 * @property {string} storagePMMLModelLocation Google storage location of the pmml model file.
 * @property {string} trainingStatus The current status of the training job. This can be one of following: RUNNING; DONE; ERROR; ERROR: TRAINING JOB NOT FOUND
 * @property {object[]} utility A class weighting function, which allows the importance weights for class labels to be specified [Categorical models only].
 */
/**
 * @typedef Update
 * @memberOf! prediction(v1.4)
 * @type object
 * @property {any[]} csvInstance The input features for this instance
 * @property {string} label The class label of this instance
 * @property {string} output The generic output value - could be regression value or class label
 */
