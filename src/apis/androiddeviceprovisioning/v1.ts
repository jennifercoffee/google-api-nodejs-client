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


let self: Androiddeviceprovisioning;

/**
 * Android Device Provisioning Partner API
 *
 * Automates Android zero-touch enrollment for device resellers, customers, and
 * EMMs.
 *
 * @example
 * const google = require('googleapis');
 * const androiddeviceprovisioning = google.androiddeviceprovisioning('v1');
 *
 * @namespace androiddeviceprovisioning
 * @type {Function}
 * @version v1
 * @variation v1
 * @param {object=} options Options for Androiddeviceprovisioning
 */
export class Androiddeviceprovisioning extends BaseAPI {
  constructor(options: GlobalOptions, google: GoogleApis) {
    super(options, google);
    self = this;
  }
  customers = {
    /**
     * androiddeviceprovisioning.customers.list
     * @desc Lists the user's customer accounts.
     * @alias androiddeviceprovisioning.customers.list
     * @memberOf! androiddeviceprovisioning(v1)
     *
     * @param {object} params Parameters for request
     * @param {integer=} params.pageSize The maximum number of customers to show in a page of results. A number between 1 and 100 (inclusive).
     * @param {string=} params.pageToken A token specifying which result page to return.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
        params: any, options: MethodOptions|BodyResponseCallback<any>,
        callback?: BodyResponseCallback<any>) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options = options || {};
      const rootUrl = options.rootUrl ||
          'https://androiddeviceprovisioning.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/customers').replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: [],
        pathParams: [],
        context: self
      };
      createAPIRequest(parameters, callback!);
    },
    configurations: {
      /**
       * androiddeviceprovisioning.customers.configurations.create
       * @desc Creates a new configuration. Once created, a customer can apply
       * the configuration to devices.
       * @alias androiddeviceprovisioning.customers.configurations.create
       * @memberOf! androiddeviceprovisioning(v1)
       *
       * @param {object} params Parameters for request
       * @param {string} params.parent Required. The customer that manages the configuration. An API resource name in the format `customers/[CUSTOMER_ID]`.
       * @param {androiddeviceprovisioning(v1).Configuration} params.resource Request body data
       * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      create(
          params: any, options: MethodOptions|BodyResponseCallback<any>,
          callback?: BodyResponseCallback<any>) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl ||
            'https://androiddeviceprovisioning.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/v1/{parent}/configurations')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'POST'
              },
              options),
          params,
          requiredParams: ['parent'],
          pathParams: ['parent'],
          context: self
        };
        createAPIRequest(parameters, callback!);
      }, /**
          * androiddeviceprovisioning.customers.configurations.delete
          * @desc Deletes an unused configuration. The API call fails if the
          * customer has devices with the configuration applied.
          * @alias androiddeviceprovisioning.customers.configurations.delete
          * @memberOf! androiddeviceprovisioning(v1)
          *
          * @param {object} params Parameters for request
          * @param {string} params.name Required. The configuration to delete. An API resource name in the format `customers/[CUSTOMER_ID]/configurations/[CONFIGURATION_ID]`. If the configuration is applied to any devices, the API call fails.
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
        const rootUrl = options.rootUrl ||
            'https://androiddeviceprovisioning.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/v1/{name}').replace(/([^:]\/)\/+/g, '$1'),
                method: 'DELETE'
              },
              options),
          params,
          requiredParams: ['name'],
          pathParams: ['name'],
          context: self
        };
        createAPIRequest(parameters, callback!);
      }, /**
          * androiddeviceprovisioning.customers.configurations.get
          * @desc Gets the details of a configuration.
          * @alias androiddeviceprovisioning.customers.configurations.get
          * @memberOf! androiddeviceprovisioning(v1)
          *
          * @param {object} params Parameters for request
          * @param {string} params.name Required. The configuration to get. An API resource name in the format `customers/[CUSTOMER_ID]/configurations/[CONFIGURATION_ID]`.
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
        const rootUrl = options.rootUrl ||
            'https://androiddeviceprovisioning.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/v1/{name}').replace(/([^:]\/)\/+/g, '$1'),
                method: 'GET'
              },
              options),
          params,
          requiredParams: ['name'],
          pathParams: ['name'],
          context: self
        };
        createAPIRequest(parameters, callback!);
      }, /**
          * androiddeviceprovisioning.customers.configurations.list
          * @desc Lists a customer's configurations.
          * @alias androiddeviceprovisioning.customers.configurations.list
          * @memberOf! androiddeviceprovisioning(v1)
          *
          * @param {object} params Parameters for request
          * @param {string} params.parent Required. The customer that manages the listed configurations. An API resource name in the format `customers/[CUSTOMER_ID]`.
          * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
          * @param {callback} callback The callback that handles the response.
          * @return {object} Request object
          */
      list(
          params: any, options: MethodOptions|BodyResponseCallback<any>,
          callback?: BodyResponseCallback<any>) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl ||
            'https://androiddeviceprovisioning.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/v1/{parent}/configurations')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'GET'
              },
              options),
          params,
          requiredParams: ['parent'],
          pathParams: ['parent'],
          context: self
        };
        createAPIRequest(parameters, callback!);
      }, /**
          * androiddeviceprovisioning.customers.configurations.patch
          * @desc Updates a configuration's field values.
          * @alias androiddeviceprovisioning.customers.configurations.patch
          * @memberOf! androiddeviceprovisioning(v1)
          *
          * @param {object} params Parameters for request
          * @param {string} params.name Output only. The API resource name in the format `customers/[CUSTOMER_ID]/configurations/[CONFIGURATION_ID]`. Assigned by the server.
          * @param {string=} params.updateMask Required. The field mask applied to the target `Configuration` before updating the fields. To learn more about using field masks, read [FieldMask](/protocol-buffers/docs/reference/google.protobuf#fieldmask) in the Protocol Buffers documentation.
          * @param {androiddeviceprovisioning(v1).Configuration} params.resource Request body data
          * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
          * @param {callback} callback The callback that handles the response.
          * @return {object} Request object
          */
      patch(
          params: any, options: MethodOptions|BodyResponseCallback<any>,
          callback?: BodyResponseCallback<any>) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl ||
            'https://androiddeviceprovisioning.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/v1/{name}').replace(/([^:]\/)\/+/g, '$1'),
                method: 'PATCH'
              },
              options),
          params,
          requiredParams: ['name'],
          pathParams: ['name'],
          context: self
        };
        createAPIRequest(parameters, callback!);
      }

    },
    devices: {
      /**
       * androiddeviceprovisioning.customers.devices.applyConfiguration
       * @desc Applies a Configuration to the device to register the device for
       * zero-touch enrollment. After applying a configuration to a device, the
       * device automatically provisions itself on first boot, or next factory
       * reset.
       * @alias androiddeviceprovisioning.customers.devices.applyConfiguration
       * @memberOf! androiddeviceprovisioning(v1)
       *
       * @param {object} params Parameters for request
       * @param {string} params.parent Required. The customer managing the device. An API resource name in the format `customers/[CUSTOMER_ID]`.
       * @param {androiddeviceprovisioning(v1).CustomerApplyConfigurationRequest} params.resource Request body data
       * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      applyConfiguration(
          params: any, options: MethodOptions|BodyResponseCallback<any>,
          callback?: BodyResponseCallback<any>) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl ||
            'https://androiddeviceprovisioning.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/v1/{parent}/devices:applyConfiguration')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'POST'
              },
              options),
          params,
          requiredParams: ['parent'],
          pathParams: ['parent'],
          context: self
        };
        createAPIRequest(parameters, callback!);
      }, /**
          * androiddeviceprovisioning.customers.devices.get
          * @desc Gets the details of a device.
          * @alias androiddeviceprovisioning.customers.devices.get
          * @memberOf! androiddeviceprovisioning(v1)
          *
          * @param {object} params Parameters for request
          * @param {string} params.name Required. The device to get. An API resource name in the format `customers/[CUSTOMER_ID]/devices/[DEVICE_ID]`.
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
        const rootUrl = options.rootUrl ||
            'https://androiddeviceprovisioning.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/v1/{name}').replace(/([^:]\/)\/+/g, '$1'),
                method: 'GET'
              },
              options),
          params,
          requiredParams: ['name'],
          pathParams: ['name'],
          context: self
        };
        createAPIRequest(parameters, callback!);
      }, /**
          * androiddeviceprovisioning.customers.devices.list
          * @desc Lists a customer's devices.
          * @alias androiddeviceprovisioning.customers.devices.list
          * @memberOf! androiddeviceprovisioning(v1)
          *
          * @param {object} params Parameters for request
          * @param {string=} params.pageSize The maximum number of devices to show in a page of results. Must be between 1 and 100 inclusive.
          * @param {string=} params.pageToken A token specifying which result page to return.
          * @param {string} params.parent Required. The customer managing the devices. An API resource name in the format `customers/[CUSTOMER_ID]`.
          * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
          * @param {callback} callback The callback that handles the response.
          * @return {object} Request object
          */
      list(
          params: any, options: MethodOptions|BodyResponseCallback<any>,
          callback?: BodyResponseCallback<any>) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl ||
            'https://androiddeviceprovisioning.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/v1/{parent}/devices')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'GET'
              },
              options),
          params,
          requiredParams: ['parent'],
          pathParams: ['parent'],
          context: self
        };
        createAPIRequest(parameters, callback!);
      }, /**
          * androiddeviceprovisioning.customers.devices.removeConfiguration
          * @desc Removes a configuration from device.
          * @alias
          * androiddeviceprovisioning.customers.devices.removeConfiguration
          * @memberOf! androiddeviceprovisioning(v1)
          *
          * @param {object} params Parameters for request
          * @param {string} params.parent Required. The customer managing the device in the format `customers/[CUSTOMER_ID]`.
          * @param {androiddeviceprovisioning(v1).CustomerRemoveConfigurationRequest} params.resource Request body data
          * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
          * @param {callback} callback The callback that handles the response.
          * @return {object} Request object
          */
      removeConfiguration(
          params: any, options: MethodOptions|BodyResponseCallback<any>,
          callback?: BodyResponseCallback<any>) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl ||
            'https://androiddeviceprovisioning.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/v1/{parent}/devices:removeConfiguration')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'POST'
              },
              options),
          params,
          requiredParams: ['parent'],
          pathParams: ['parent'],
          context: self
        };
        createAPIRequest(parameters, callback!);
      }, /**
          * androiddeviceprovisioning.customers.devices.unclaim
          * @desc Unclaims a device from a customer and removes it from
          * zero-touch enrollment.  After removing a device, a customer must
          * contact their reseller to register the device into zero-touch
          * enrollment again.
          * @alias androiddeviceprovisioning.customers.devices.unclaim
          * @memberOf! androiddeviceprovisioning(v1)
          *
          * @param {object} params Parameters for request
          * @param {string} params.parent Required. The customer managing the device. An API resource name in the format `customers/[CUSTOMER_ID]`.
          * @param {androiddeviceprovisioning(v1).CustomerUnclaimDeviceRequest} params.resource Request body data
          * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
          * @param {callback} callback The callback that handles the response.
          * @return {object} Request object
          */
      unclaim(
          params: any, options: MethodOptions|BodyResponseCallback<any>,
          callback?: BodyResponseCallback<any>) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl ||
            'https://androiddeviceprovisioning.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/v1/{parent}/devices:unclaim')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'POST'
              },
              options),
          params,
          requiredParams: ['parent'],
          pathParams: ['parent'],
          context: self
        };
        createAPIRequest(parameters, callback!);
      }

    },
    dpcs: {
      /**
       * androiddeviceprovisioning.customers.dpcs.list
       * @desc Lists the DPCs (device policy controllers) that support
       * zero-touch enrollment.
       * @alias androiddeviceprovisioning.customers.dpcs.list
       * @memberOf! androiddeviceprovisioning(v1)
       *
       * @param {object} params Parameters for request
       * @param {string} params.parent Required. The customer that can use the DPCs in configurations. An API resource name in the format `customers/[CUSTOMER_ID]`.
       * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      list(
          params: any, options: MethodOptions|BodyResponseCallback<any>,
          callback?: BodyResponseCallback<any>) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl ||
            'https://androiddeviceprovisioning.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/v1/{parent}/dpcs')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'GET'
              },
              options),
          params,
          requiredParams: ['parent'],
          pathParams: ['parent'],
          context: self
        };
        createAPIRequest(parameters, callback!);
      }

    }
  };
  operations = {
    /**
     * androiddeviceprovisioning.operations.get
     * @desc Gets the latest state of a long-running operation.  Clients can use
     * this method to poll the operation result at intervals as recommended by
     * the API service.
     * @alias androiddeviceprovisioning.operations.get
     * @memberOf! androiddeviceprovisioning(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The name of the operation resource.
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
      const rootUrl = options.rootUrl ||
          'https://androiddeviceprovisioning.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/{name}').replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: self
      };
      createAPIRequest(parameters, callback!);
    }

  };
  partners = {
    customers: {
      /**
       * androiddeviceprovisioning.partners.customers.create
       * @desc Creates a customer for zero-touch enrollment. After the method
       * returns successfully, admin and owner roles can manage devices and EMM
       * configs by calling API methods or using their zero-touch enrollment
       * portal. The API doesn't notify the customer that they have access.
       * @alias androiddeviceprovisioning.partners.customers.create
       * @memberOf! androiddeviceprovisioning(v1)
       *
       * @param {object} params Parameters for request
       * @param {string} params.parent Required. The parent resource ID in the format `partners/[PARTNER_ID]` that identifies the reseller.
       * @param {androiddeviceprovisioning(v1).CreateCustomerRequest} params.resource Request body data
       * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      create(
          params: any, options: MethodOptions|BodyResponseCallback<any>,
          callback?: BodyResponseCallback<any>) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl ||
            'https://androiddeviceprovisioning.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/v1/{parent}/customers')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'POST'
              },
              options),
          params,
          requiredParams: ['parent'],
          pathParams: ['parent'],
          context: self
        };
        createAPIRequest(parameters, callback!);
      }, /**
          * androiddeviceprovisioning.partners.customers.list
          * @desc Lists the customers that are enrolled to the reseller
          * identified by the `partnerId` argument. This list includes customers
          * that the reseller created and customers that enrolled themselves
          * using the portal.
          * @alias androiddeviceprovisioning.partners.customers.list
          * @memberOf! androiddeviceprovisioning(v1)
          *
          * @param {object} params Parameters for request
          * @param {string} params.partnerId Required. The ID of the reseller partner.
          * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
          * @param {callback} callback The callback that handles the response.
          * @return {object} Request object
          */
      list(
          params: any, options: MethodOptions|BodyResponseCallback<any>,
          callback?: BodyResponseCallback<any>) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl ||
            'https://androiddeviceprovisioning.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/v1/partners/{partnerId}/customers')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'GET'
              },
              options),
          params,
          requiredParams: ['partnerId'],
          pathParams: ['partnerId'],
          context: self
        };
        createAPIRequest(parameters, callback!);
      }

    },
    devices: {
      /**
       * androiddeviceprovisioning.partners.devices.claim
       * @desc Claims a device for a customer and adds it to zero-touch
       * enrollment. If the device is already claimed by another customer, the
       * call returns an error.
       * @alias androiddeviceprovisioning.partners.devices.claim
       * @memberOf! androiddeviceprovisioning(v1)
       *
       * @param {object} params Parameters for request
       * @param {string} params.partnerId Required. The ID of the reseller partner.
       * @param {androiddeviceprovisioning(v1).ClaimDeviceRequest} params.resource Request body data
       * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      claim(
          params: any, options: MethodOptions|BodyResponseCallback<any>,
          callback?: BodyResponseCallback<any>) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl ||
            'https://androiddeviceprovisioning.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/v1/partners/{partnerId}/devices:claim')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'POST'
              },
              options),
          params,
          requiredParams: ['partnerId'],
          pathParams: ['partnerId'],
          context: self
        };
        createAPIRequest(parameters, callback!);
      }, /**
          * androiddeviceprovisioning.partners.devices.claimAsync
          * @desc Claims a batch of devices for a customer asynchronously. Adds
          * the devices to zero-touch enrollment. To learn more, read
          * [Long‑running batch
          * operations](/zero-touch/guides/how-it-works#operations).
          * @alias androiddeviceprovisioning.partners.devices.claimAsync
          * @memberOf! androiddeviceprovisioning(v1)
          *
          * @param {object} params Parameters for request
          * @param {string} params.partnerId Required. The ID of the reseller partner.
          * @param {androiddeviceprovisioning(v1).ClaimDevicesRequest} params.resource Request body data
          * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
          * @param {callback} callback The callback that handles the response.
          * @return {object} Request object
          */
      claimAsync(
          params: any, options: MethodOptions|BodyResponseCallback<any>,
          callback?: BodyResponseCallback<any>) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl ||
            'https://androiddeviceprovisioning.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/v1/partners/{partnerId}/devices:claimAsync')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'POST'
              },
              options),
          params,
          requiredParams: ['partnerId'],
          pathParams: ['partnerId'],
          context: self
        };
        createAPIRequest(parameters, callback!);
      }, /**
          * androiddeviceprovisioning.partners.devices.findByIdentifier
          * @desc Finds devices by hardware identifiers, such as IMEI.
          * @alias androiddeviceprovisioning.partners.devices.findByIdentifier
          * @memberOf! androiddeviceprovisioning(v1)
          *
          * @param {object} params Parameters for request
          * @param {string} params.partnerId Required. The ID of the reseller partner.
          * @param {androiddeviceprovisioning(v1).FindDevicesByDeviceIdentifierRequest} params.resource Request body data
          * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
          * @param {callback} callback The callback that handles the response.
          * @return {object} Request object
          */
      findByIdentifier(
          params: any, options: MethodOptions|BodyResponseCallback<any>,
          callback?: BodyResponseCallback<any>) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl ||
            'https://androiddeviceprovisioning.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl +
                      '/v1/partners/{partnerId}/devices:findByIdentifier')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'POST'
              },
              options),
          params,
          requiredParams: ['partnerId'],
          pathParams: ['partnerId'],
          context: self
        };
        createAPIRequest(parameters, callback!);
      }, /**
          * androiddeviceprovisioning.partners.devices.findByOwner
          * @desc Finds devices claimed for customers. The results only contain
          * devices registered to the reseller that's identified by the
          * `partnerId` argument. The customer's devices purchased from other
          * resellers don't appear in the results.
          * @alias androiddeviceprovisioning.partners.devices.findByOwner
          * @memberOf! androiddeviceprovisioning(v1)
          *
          * @param {object} params Parameters for request
          * @param {string} params.partnerId Required. The ID of the reseller partner.
          * @param {androiddeviceprovisioning(v1).FindDevicesByOwnerRequest} params.resource Request body data
          * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
          * @param {callback} callback The callback that handles the response.
          * @return {object} Request object
          */
      findByOwner(
          params: any, options: MethodOptions|BodyResponseCallback<any>,
          callback?: BodyResponseCallback<any>) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl ||
            'https://androiddeviceprovisioning.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/v1/partners/{partnerId}/devices:findByOwner')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'POST'
              },
              options),
          params,
          requiredParams: ['partnerId'],
          pathParams: ['partnerId'],
          context: self
        };
        createAPIRequest(parameters, callback!);
      }, /**
          * androiddeviceprovisioning.partners.devices.get
          * @desc Gets a device.
          * @alias androiddeviceprovisioning.partners.devices.get
          * @memberOf! androiddeviceprovisioning(v1)
          *
          * @param {object} params Parameters for request
          * @param {string} params.name Required. The device API resource name in the format `partners/[PARTNER_ID]/devices/[DEVICE_ID]`.
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
        const rootUrl = options.rootUrl ||
            'https://androiddeviceprovisioning.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/v1/{name}').replace(/([^:]\/)\/+/g, '$1'),
                method: 'GET'
              },
              options),
          params,
          requiredParams: ['name'],
          pathParams: ['name'],
          context: self
        };
        createAPIRequest(parameters, callback!);
      }, /**
          * androiddeviceprovisioning.partners.devices.metadata
          * @desc Updates reseller metadata associated with the device.
          * @alias androiddeviceprovisioning.partners.devices.metadata
          * @memberOf! androiddeviceprovisioning(v1)
          *
          * @param {object} params Parameters for request
          * @param {string} params.deviceId Required. The ID of the reseller partner.
          * @param {string} params.metadataOwnerId Required. The owner of the newly set metadata. Set this to the partner ID.
          * @param {androiddeviceprovisioning(v1).UpdateDeviceMetadataRequest} params.resource Request body data
          * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
          * @param {callback} callback The callback that handles the response.
          * @return {object} Request object
          */
      metadata(
          params: any, options: MethodOptions|BodyResponseCallback<any>,
          callback?: BodyResponseCallback<any>) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl ||
            'https://androiddeviceprovisioning.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url:
                    (rootUrl +
                     '/v1/partners/{metadataOwnerId}/devices/{deviceId}/metadata')
                        .replace(/([^:]\/)\/+/g, '$1'),
                method: 'POST'
              },
              options),
          params,
          requiredParams: ['metadataOwnerId', 'deviceId'],
          pathParams: ['deviceId', 'metadataOwnerId'],
          context: self
        };
        createAPIRequest(parameters, callback!);
      }, /**
          * androiddeviceprovisioning.partners.devices.unclaim
          * @desc Unclaims a device from a customer and removes it from
          * zero-touch enrollment.
          * @alias androiddeviceprovisioning.partners.devices.unclaim
          * @memberOf! androiddeviceprovisioning(v1)
          *
          * @param {object} params Parameters for request
          * @param {string} params.partnerId Required. The ID of the reseller partner.
          * @param {androiddeviceprovisioning(v1).UnclaimDeviceRequest} params.resource Request body data
          * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
          * @param {callback} callback The callback that handles the response.
          * @return {object} Request object
          */
      unclaim(
          params: any, options: MethodOptions|BodyResponseCallback<any>,
          callback?: BodyResponseCallback<any>) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl ||
            'https://androiddeviceprovisioning.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/v1/partners/{partnerId}/devices:unclaim')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'POST'
              },
              options),
          params,
          requiredParams: ['partnerId'],
          pathParams: ['partnerId'],
          context: self
        };
        createAPIRequest(parameters, callback!);
      }, /**
          * androiddeviceprovisioning.partners.devices.unclaimAsync
          * @desc Unclaims a batch of devices for a customer asynchronously.
          * Removes the devices from zero-touch enrollment. To learn more, read
          * [Long‑running batch
          * operations](/zero-touch/guides/how-it-works#operations).
          * @alias androiddeviceprovisioning.partners.devices.unclaimAsync
          * @memberOf! androiddeviceprovisioning(v1)
          *
          * @param {object} params Parameters for request
          * @param {string} params.partnerId Required. The reseller partner ID.
          * @param {androiddeviceprovisioning(v1).UnclaimDevicesRequest} params.resource Request body data
          * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
          * @param {callback} callback The callback that handles the response.
          * @return {object} Request object
          */
      unclaimAsync(
          params: any, options: MethodOptions|BodyResponseCallback<any>,
          callback?: BodyResponseCallback<any>) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl ||
            'https://androiddeviceprovisioning.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/v1/partners/{partnerId}/devices:unclaimAsync')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'POST'
              },
              options),
          params,
          requiredParams: ['partnerId'],
          pathParams: ['partnerId'],
          context: self
        };
        createAPIRequest(parameters, callback!);
      }, /**
          * androiddeviceprovisioning.partners.devices.updateMetadataAsync
          * @desc Updates the reseller metadata attached to a batch of devices.
          * This method updates devices asynchronously and returns an
          * `Operation` that can be used to track progress. Read [Long‑running
          * batch operations](/zero-touch/guides/how-it-works#operations).
          * @alias
          * androiddeviceprovisioning.partners.devices.updateMetadataAsync
          * @memberOf! androiddeviceprovisioning(v1)
          *
          * @param {object} params Parameters for request
          * @param {string} params.partnerId Required. The reseller partner ID.
          * @param {androiddeviceprovisioning(v1).UpdateDeviceMetadataInBatchRequest} params.resource Request body data
          * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
          * @param {callback} callback The callback that handles the response.
          * @return {object} Request object
          */
      updateMetadataAsync(
          params: any, options: MethodOptions|BodyResponseCallback<any>,
          callback?: BodyResponseCallback<any>) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl ||
            'https://androiddeviceprovisioning.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl +
                      '/v1/partners/{partnerId}/devices:updateMetadataAsync')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'POST'
              },
              options),
          params,
          requiredParams: ['partnerId'],
          pathParams: ['partnerId'],
          context: self
        };
        createAPIRequest(parameters, callback!);
      }

    }
  };
}
/**
 * @typedef ClaimDeviceRequest
 * @memberOf! androiddeviceprovisioning(v1)
 * @type object
 * @property {string} customerId Required. The ID of the customer for whom the device is being claimed.
 * @property {androiddeviceprovisioning(v1).DeviceIdentifier} deviceIdentifier Required. The device identifier of the device to claim.
 * @property {string} sectionType Required. The section type of the device&#39;s provisioning record.
 */
/**
 * @typedef ClaimDeviceResponse
 * @memberOf! androiddeviceprovisioning(v1)
 * @type object
 * @property {string} deviceId The device ID of the claimed device.
 * @property {string} deviceName The resource name of the device in the format `partners/[PARTNER_ID]/devices/[DEVICE_ID]`.
 */
/**
 * @typedef ClaimDevicesRequest
 * @memberOf! androiddeviceprovisioning(v1)
 * @type object
 * @property {androiddeviceprovisioning(v1).PartnerClaim[]} claims Required. A list of device claims.
 */
/**
 * @typedef Company
 * @memberOf! androiddeviceprovisioning(v1)
 * @type object
 * @property {string[]} adminEmails Input only. Optional. Email address of customer&#39;s users in the admin role. Each email address must be associated with a Google Account.
 * @property {string} companyId Output only. The ID of the company. Assigned by the server.
 * @property {string} companyName Required. The name of the company. For example _XYZ Corp_. Characters allowed are: Latin letters, numerals, hyphens, and spaces. Displayed to the customer&#39;s employees in the zero-touch enrollment portal.
 * @property {string} name Output only. The API resource name of the company in the format `partners/[PARTNER_ID]/customers/[CUSTOMER_ID]`. Assigned by the server.
 * @property {string[]} ownerEmails Input only. Email address of customer&#39;s users in the owner role. At least one `owner_email` is required. Each email address must be associated with a Google Account. Owners share the same access as admins but can also add, delete, and edit your organization&#39;s portal users.
 */
/**
 * @typedef Configuration
 * @memberOf! androiddeviceprovisioning(v1)
 * @type object
 * @property {string} companyName Required. The name of the organization. Zero-touch enrollment shows this organization name to device users during device provisioning.
 * @property {string} configurationId Output only. The ID of the configuration. Assigned by the server.
 * @property {string} configurationName Required. A short name that describes the configuration&#39;s purpose. For example, _Sales team_ or _Temporary employees_. The zero-touch enrollment portal displays this name to IT admins.
 * @property {string} contactEmail Required. The email address that device users can contact to get help. Zero-touch enrollment shows this email address to device users before device provisioning. The value is validated on input.
 * @property {string} contactPhone Required. The telephone number that device users can call, using another device, to get help. Zero-touch enrollment shows this number to device users before device provisioning. Accepts numerals, spaces, the plus sign, hyphens, and parentheses.
 * @property {string} customMessage A message, containing one or two sentences, to help device users get help or give them more details about what’s happening to their device. Zero-touch enrollment shows this message before the device is provisioned.
 * @property {string} dpcExtras The JSON-formatted EMM provisioning extras that are passed to the DPC.
 * @property {string} dpcResourcePath Required. The resource name of the selected DPC (device policy controller) in the format `customers/[CUSTOMER_ID]/dpcs/x. To list the supported DPCs, call `customers.dpcs.list`.
 * @property {boolean} isDefault Required. Whether this is the default configuration that zero-touch enrollment applies to any new devices the organization purchases in the future. Only one customer configuration can be the default. Setting this value to `true`, changes the previous default configuration&#39;s `isDefault` value to `false`.
 * @property {string} name Output only. The API resource name in the format `customers/[CUSTOMER_ID]/configurations/[CONFIGURATION_ID]`. Assigned by the server.
 */
/**
 * @typedef CreateCustomerRequest
 * @memberOf! androiddeviceprovisioning(v1)
 * @type object
 * @property {androiddeviceprovisioning(v1).Company} customer Required. The company data to populate the new customer. Must contain a value for `companyName` and at least one `owner_email` that&#39;s associated with a Google Account. The values for `companyId` and `name` must be empty.
 */
/**
 * @typedef CustomerApplyConfigurationRequest
 * @memberOf! androiddeviceprovisioning(v1)
 * @type object
 * @property {string} configuration Required. The configuration applied to the device in the format `customers/[CUSTOMER_ID]/configurations/[CONFIGURATION_ID]`.
 * @property {androiddeviceprovisioning(v1).DeviceReference} device Required. The device the configuration is applied to.
 */
/**
 * @typedef CustomerListConfigurationsResponse
 * @memberOf! androiddeviceprovisioning(v1)
 * @type object
 * @property {androiddeviceprovisioning(v1).Configuration[]} configurations The configurations.
 */
/**
 * @typedef CustomerListCustomersResponse
 * @memberOf! androiddeviceprovisioning(v1)
 * @type object
 * @property {androiddeviceprovisioning(v1).Company[]} customers The customer accounts the calling user is a member of.
 * @property {string} nextPageToken A token used to access the next page of results. Omitted if no further results are available.
 */
/**
 * @typedef CustomerListDevicesResponse
 * @memberOf! androiddeviceprovisioning(v1)
 * @type object
 * @property {androiddeviceprovisioning(v1).Device[]} devices The customer&#39;s devices.
 * @property {string} nextPageToken A token used to access the next page of results. Omitted if no further results are available.
 */
/**
 * @typedef CustomerListDpcsResponse
 * @memberOf! androiddeviceprovisioning(v1)
 * @type object
 * @property {androiddeviceprovisioning(v1).Dpc[]} dpcs The list of DPCs available to the customer that support zero-touch enrollment.
 */
/**
 * @typedef CustomerRemoveConfigurationRequest
 * @memberOf! androiddeviceprovisioning(v1)
 * @type object
 * @property {androiddeviceprovisioning(v1).DeviceReference} device Required. The device to remove the configuration from.
 */
/**
 * @typedef CustomerUnclaimDeviceRequest
 * @memberOf! androiddeviceprovisioning(v1)
 * @type object
 * @property {androiddeviceprovisioning(v1).DeviceReference} device Required. The device to unclaim.
 */
/**
 * @typedef Device
 * @memberOf! androiddeviceprovisioning(v1)
 * @type object
 * @property {androiddeviceprovisioning(v1).DeviceClaim[]} claims Output only. The provisioning claims for a device. Devices claimed for zero-touch enrollment have a claim with the type `SECTION_TYPE_ZERO_TOUCH`. Call `partners.devices.unclaim` or `partners.devices.unclaimAsync` to remove the device from zero-touch enrollment.
 * @property {string} configuration Not available to resellers.
 * @property {string} deviceId Output only. The ID of the device. Assigned by the server.
 * @property {androiddeviceprovisioning(v1).DeviceIdentifier} deviceIdentifier The hardware IDs that identify a manufactured device. To learn more, read [Identifiers](/zero-touch/guides/identifiers).
 * @property {androiddeviceprovisioning(v1).DeviceMetadata} deviceMetadata The metadata attached to the device. Structured as key-value pairs. To learn more, read [Device metadata](/zero-touch/guides/metadata).
 * @property {string} name Output only. The API resource name in the format `partners/[PARTNER_ID]/devices/[DEVICE_ID]`. Assigned by the server.
 */
/**
 * @typedef DeviceClaim
 * @memberOf! androiddeviceprovisioning(v1)
 * @type object
 * @property {string} ownerCompanyId The ID of the Customer that purchased the device.
 * @property {string} sectionType Output only. The type of claim made on the device.
 */
/**
 * @typedef DeviceIdentifier
 * @memberOf! androiddeviceprovisioning(v1)
 * @type object
 * @property {string} imei The device’s IMEI number. Validated on input.
 * @property {string} manufacturer Required. The device manufacturer’s name. Matches the device&#39;s built-in value returned from `android.os.Build.MANUFACTURER`. Allowed values are listed in [manufacturer names](/zero-touch/resources/manufacturer-names).
 * @property {string} meid The device’s MEID number.
 * @property {string} serialNumber The manufacturer&#39;s serial number for the device. This value might not be unique.
 */
/**
 * @typedef DeviceMetadata
 * @memberOf! androiddeviceprovisioning(v1)
 * @type object
 * @property {object} entries Metadata entries recorded as key-value pairs.
 */
/**
 * @typedef DeviceReference
 * @memberOf! androiddeviceprovisioning(v1)
 * @type object
 * @property {string} deviceId The ID of the device.
 * @property {androiddeviceprovisioning(v1).DeviceIdentifier} deviceIdentifier The hardware IDs of the device.
 */
/**
 * @typedef DevicesLongRunningOperationMetadata
 * @memberOf! androiddeviceprovisioning(v1)
 * @type object
 * @property {integer} devicesCount The number of metadata updates in the operation. This might be different from the number of updates in the request if the API can&#39;t parse some of the updates.
 * @property {string} processingStatus The processing status of the operation.
 * @property {integer} progress The processing progress of the operation. Measured as a number from 0 to 100. A value of 10O doesnt always mean the operation completed—check for the inclusion of a `done` field.
 */
/**
 * @typedef DevicesLongRunningOperationResponse
 * @memberOf! androiddeviceprovisioning(v1)
 * @type object
 * @property {androiddeviceprovisioning(v1).OperationPerDevice[]} perDeviceStatus The processing status for each device in the operation. One `PerDeviceStatus` per device. The list order matches the items in the original request.
 * @property {integer} successCount A summary of how many items in the operation the server processed successfully. Updated as the operation progresses.
 */
/**
 * @typedef Dpc
 * @memberOf! androiddeviceprovisioning(v1)
 * @type object
 * @property {string} dpcName Output only. The title of the DPC app in Google Play. For example, _Google Apps Device Policy_. Useful in an application&#39;s user interface.
 * @property {string} name Output only. The API resource name in the format `customers/[CUSTOMER_ID]/dpcs/[DPC_ID]`. Assigned by the server. To maintain a reference to a DPC across customer accounts, persist and match the last path component (`DPC_ID`).
 * @property {string} packageName Output only. The DPC&#39;s Android application ID that looks like a Java package name. Zero-touch enrollment installs the DPC app onto a device using this identifier.
 */
/**
 * @typedef Empty
 * @memberOf! androiddeviceprovisioning(v1)
 * @type object
 */
/**
 * @typedef FindDevicesByDeviceIdentifierRequest
 * @memberOf! androiddeviceprovisioning(v1)
 * @type object
 * @property {androiddeviceprovisioning(v1).DeviceIdentifier} deviceIdentifier Required. The device identifier to search for.
 * @property {string} limit Required. The maximum number of devices to show in a page of results. Must be between 1 and 100 inclusive.
 * @property {string} pageToken A token specifying which result page to return.
 */
/**
 * @typedef FindDevicesByDeviceIdentifierResponse
 * @memberOf! androiddeviceprovisioning(v1)
 * @type object
 * @property {androiddeviceprovisioning(v1).Device[]} devices Found devices.
 * @property {string} nextPageToken A token used to access the next page of results. Omitted if no further results are available.
 */
/**
 * @typedef FindDevicesByOwnerRequest
 * @memberOf! androiddeviceprovisioning(v1)
 * @type object
 * @property {string[]} customerId Required. The list of customer IDs to search for.
 * @property {string} limit Required. The maximum number of devices to show in a page of results. Must be between 1 and 100 inclusive.
 * @property {string} pageToken A token specifying which result page to return.
 * @property {string} sectionType Required. The section type of the device&#39;s provisioning record.
 */
/**
 * @typedef FindDevicesByOwnerResponse
 * @memberOf! androiddeviceprovisioning(v1)
 * @type object
 * @property {androiddeviceprovisioning(v1).Device[]} devices The customer&#39;s devices.
 * @property {string} nextPageToken A token used to access the next page of results. Omitted if no further results are available.
 */
/**
 * @typedef ListCustomersResponse
 * @memberOf! androiddeviceprovisioning(v1)
 * @type object
 * @property {androiddeviceprovisioning(v1).Company[]} customers List of customers related to this reseller partner.
 */
/**
 * @typedef Operation
 * @memberOf! androiddeviceprovisioning(v1)
 * @type object
 * @property {boolean} done If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available.
 * @property {androiddeviceprovisioning(v1).Status} error This field will always be not set if the operation is created by `claimAsync`, `unclaimAsync`, or `updateMetadataAsync`. In this case, error information for each device is set in `response.perDeviceStatus.result.status`.
 * @property {object} metadata This field will contain a `DevicesLongRunningOperationMetadata` object if the operation is created by `claimAsync`, `unclaimAsync`, or `updateMetadataAsync`.
 * @property {string} name The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should have the format of `operations/some/unique/name`.
 * @property {object} response This field will contain a `DevicesLongRunningOperationResponse` object if the operation is created by `claimAsync`, `unclaimAsync`, or `updateMetadataAsync`.
 */
/**
 * @typedef OperationPerDevice
 * @memberOf! androiddeviceprovisioning(v1)
 * @type object
 * @property {androiddeviceprovisioning(v1).PartnerClaim} claim A copy of the original device-claim request received by the server.
 * @property {androiddeviceprovisioning(v1).PerDeviceStatusInBatch} result The processing result for each device.
 * @property {androiddeviceprovisioning(v1).PartnerUnclaim} unclaim A copy of the original device-unclaim request received by the server.
 * @property {androiddeviceprovisioning(v1).UpdateMetadataArguments} updateMetadata A copy of the original metadata-update request received by the server.
 */
/**
 * @typedef PartnerClaim
 * @memberOf! androiddeviceprovisioning(v1)
 * @type object
 * @property {string} customerId Required. The ID of the customer for whom the device is being claimed.
 * @property {androiddeviceprovisioning(v1).DeviceIdentifier} deviceIdentifier Required. Device identifier of the device.
 * @property {androiddeviceprovisioning(v1).DeviceMetadata} deviceMetadata Required. The metadata to attach to the device at claim.
 * @property {string} sectionType Required. The section type of the device&#39;s provisioning record.
 */
/**
 * @typedef PartnerUnclaim
 * @memberOf! androiddeviceprovisioning(v1)
 * @type object
 * @property {string} deviceId Device ID of the device.
 * @property {androiddeviceprovisioning(v1).DeviceIdentifier} deviceIdentifier Device identifier of the device.
 * @property {string} sectionType Required. The section type of the device&#39;s provisioning record.
 */
/**
 * @typedef PerDeviceStatusInBatch
 * @memberOf! androiddeviceprovisioning(v1)
 * @type object
 * @property {string} deviceId If processing succeeds, the device ID of the device.
 * @property {string} errorIdentifier If processing fails, the error type.
 * @property {string} errorMessage If processing fails, a developer message explaining what went wrong.
 * @property {string} status The result status of the device after processing.
 */
/**
 * @typedef Status
 * @memberOf! androiddeviceprovisioning(v1)
 * @type object
 * @property {integer} code The status code, which should be an enum value of google.rpc.Code.
 * @property {object[]} details A list of messages that carry the error details.  There is a common set of message types for APIs to use.
 * @property {string} message A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client.
 */
/**
 * @typedef UnclaimDeviceRequest
 * @memberOf! androiddeviceprovisioning(v1)
 * @type object
 * @property {string} deviceId The device ID returned by `ClaimDevice`.
 * @property {androiddeviceprovisioning(v1).DeviceIdentifier} deviceIdentifier The device identifier you used when you claimed this device.
 * @property {string} sectionType Required. The section type of the device&#39;s provisioning record.
 */
/**
 * @typedef UnclaimDevicesRequest
 * @memberOf! androiddeviceprovisioning(v1)
 * @type object
 * @property {androiddeviceprovisioning(v1).PartnerUnclaim[]} unclaims Required. The list of devices to unclaim.
 */
/**
 * @typedef UpdateDeviceMetadataInBatchRequest
 * @memberOf! androiddeviceprovisioning(v1)
 * @type object
 * @property {androiddeviceprovisioning(v1).UpdateMetadataArguments[]} updates Required. The list of metadata updates.
 */
/**
 * @typedef UpdateDeviceMetadataRequest
 * @memberOf! androiddeviceprovisioning(v1)
 * @type object
 * @property {androiddeviceprovisioning(v1).DeviceMetadata} deviceMetadata Required. The metdata to attach to the device.
 */
/**
 * @typedef UpdateMetadataArguments
 * @memberOf! androiddeviceprovisioning(v1)
 * @type object
 * @property {string} deviceId Device ID of the device.
 * @property {androiddeviceprovisioning(v1).DeviceIdentifier} deviceIdentifier Device identifier.
 * @property {androiddeviceprovisioning(v1).DeviceMetadata} deviceMetadata Required. The metadata to update.
 */
