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

import {AxiosPromise} from 'axios';
import {Compute, JWT, OAuth2Client, UserRefreshClient} from 'google-auth-library';

import {GoogleApis} from '../..';
import {BodyResponseCallback, GlobalOptions, MethodOptions} from '../../lib/api';
import {createAPIRequest} from '../../lib/apirequest';

// TODO: We will eventually get the `any` in here cleared out, but in the
// interim we want to turn on no-implicit-any.

// tslint:disable: no-any
// tslint:disable: class-name
// tslint:disable: variable-name
// tslint:disable: jsdoc-format
// tslint:disable: no-namespace

export namespace composer_v1beta1 {
  /**
   * Cloud Composer API
   *
   * Manages Apache Airflow environments on Google Cloud Platform.
   *
   * @example
   * const google = require('googleapis');
   * const composer = google.composer('v1beta1');
   *
   * @namespace composer
   * @type {Function}
   * @version v1beta1
   * @variation v1beta1
   * @param {object=} options Options for Composer
   */
  export class Composer {
    _options: GlobalOptions;
    google: GoogleApis;
    root = this;

    projects: Resource$Projects;

    constructor(options: GlobalOptions, google: GoogleApis) {
      this._options = options || {};
      this.google = google;
      this.getRoot.bind(this);

      this.projects = new Resource$Projects(this);
    }

    getRoot() {
      return this.root;
    }
  }

  /**
   * A generic empty message that you can re-use to avoid defining duplicated
   * empty messages in your APIs. A typical example is to use it as the request
   * or the response type of an API method. For instance:      service Foo { rpc
   * Bar(google.protobuf.Empty) returns (google.protobuf.Empty);     }  The JSON
   * representation for `Empty` is empty JSON object `{}`.
   */
  export interface Schema$Empty {}
  /**
   * An environment for running orchestration tasks.
   */
  export interface Schema$Environment {
    /**
     * Configuration parameters for this environment.
     */
    config?: Schema$EnvironmentConfig;
    /**
     * Output only. The time at which this environment was created.
     */
    createTime?: string;
    /**
     * Optional. User-defined labels for this environment. The labels map can
     * contain no more than 64 entries. Entries of the labels map are UTF8
     * strings that comply with the following restrictions:  * Keys must conform
     * to regexp: \p{Ll}\p{Lo}{0,62} * Values must conform to regexp:
     * [\p{Ll}\p{Lo}\p{N}_-]{0,63} * Both keys and values are additionally
     * constrained to be &lt;= 128 bytes in size.
     */
    labels?: any;
    /**
     * The resource name of the environment, in the form:
     * `projects/{projectId}/locations/{locationId}/environments/{environmentId}`
     */
    name?: string;
    /**
     * The current state of the environment.
     */
    state?: string;
    /**
     * Output only. The time at which this environment was last modified.
     */
    updateTime?: string;
    /**
     * Output only. The UUID (Universally Unique IDentifier) associated with
     * this environment. This value is generated when the environment is
     * created.
     */
    uuid?: string;
  }
  /**
   * Configuration information for an environment.
   */
  export interface Schema$EnvironmentConfig {
    /**
     * The URI of the Apache Airflow Web UI hosted within this environment (see
     * [Airflow web
     * interface](/composer/docs/how-to/accessing/airflow-web-interface)).
     */
    airflowUri?: string;
    /**
     * Output only. The Cloud Storage prefix of the DAGs for this environment.
     * Although Cloud Storage objects reside in a flat namespace, a hierarchical
     * file tree can be simulated using &quot;/&quot;-delimited object name
     * prefixes. DAG objects for this environment reside in a simulated
     * directory with the given prefix.
     */
    dagGcsPrefix?: string;
    /**
     * Output only. The Kubernetes Engine cluster used to run this environment.
     */
    gkeCluster?: string;
    /**
     * The configuration used for the Container Engine cluster.
     */
    nodeConfig?: Schema$NodeConfig;
    /**
     * The number of nodes in the Container Engine cluster that will be used to
     * run this environment.
     */
    nodeCount?: number;
    /**
     * The config settings for software inside the environment.
     */
    softwareConfig?: Schema$SoftwareConfig;
  }
  /**
   * The environments in a project and location.
   */
  export interface Schema$ListEnvironmentsResponse {
    /**
     * The list of environments returned by a ListEnvironmentsRequest.
     */
    environments?: Schema$Environment[];
    /**
     * The page token used to query for the next page if one exists
     */
    nextPageToken?: string;
  }
  /**
   * The response message for Operations.ListOperations.
   */
  export interface Schema$ListOperationsResponse {
    /**
     * The standard List next-page token.
     */
    nextPageToken?: string;
    /**
     * A list of operations that matches the specified filter in the request.
     */
    operations?: Schema$Operation[];
  }
  /**
   * The configuration information for the Container Engine nodes running the
   * Apache Airflow software.
   */
  export interface Schema$NodeConfig {
    /**
     * Optional. The disk size in GB used for node VMs. Minimum is 10GB. If
     * unspecified, defaults to 100GB. Cannot be updated.
     */
    diskSizeGb?: number;
    /**
     * Optional. The Compute Engine [zone](/compute/docs/regions-zones) in which
     * to deploy the VMs used to run the Apache Airflow software, specified as a
     * relative resource
     * name](https://cloud.google.com/apis/design/resource_names#relative_resource_name).
     * For example: `projects/{projectId}/zones/{zoneId}`.  This `location` must
     * belong to the enclosing environment&#39;s project and location. If both
     * this field and `nodeConfig.machineType` are specified,
     * `nodeConfig.machineType` must belong to this `location`; if both are
     * unspecified, the service will pick a zone in the Compute Engine region
     * corresponding to the Cloud Composer location and propagate that choice to
     * both fields. If exactly one of this field and `nodeConfig.machineType` is
     * specified, the location information from the specified field will be
     * propagated to the unspecified field.
     */
    location?: string;
    /**
     * Optional. The Google Compute Engine [machine type](
     * /compute/docs/machine-types) used for cluster instances, specified as a
     * [relative resource name](
     * https://cloud.google.com/apis/design/resource_names#relative_resource_name).
     * For example:
     * `projects/{projectId}/zones/{zoneId}/machineTypes/{machineTypeId}`.  The
     * `machineType` must belong to the enclosing environment&#39;s project and
     * location. If both this field and `nodeConfig.location` are specified,
     * this `machineType` must belong to the `nodeConfig.location`; if both are
     * unspecified, the service will pick a zone in the Compute Engine region
     * corresponding to the Cloud Composer location and propagate that choice to
     * both fields. If exactly one of this field and `nodeConfig.location` is
     * specified, the location information from the specified field will be
     * propagated to the unspecified field.  Furthermore, if this field is
     * unspecified, the `machineTypeId` defaults to `n1-standard-1`.
     */
    machineType?: string;
    /**
     * Optional. The Compute Engine network to be used for machine
     * communications, specified as a [relative resource name](
     * https://cloud.google.com/apis/design/resource_names#relative_resource_name).
     * For example: `projects/{projectId}/global/networks/{networkId}`.  [Shared
     * VPC](/vpc/docs/shared-vpc) is not currently supported. The network must
     * belong to the environment&#39;s project. If unspecified, the
     * &quot;default&quot; network ID in the environment&#39;s project is used.
     * If a &quot;Custom Subnet Network&quot; (see [Using
     * Subnetworks](/compute/docs/subnetworks) for more information) is
     * provided, `nodeConfig.subnetwork` must also be provided.
     */
    network?: string;
    /**
     * Optional. The set of Google API scopes to be made available on all of the
     * node VMs. If `oauth_scopes` is empty, defaults to
     * [&quot;https://www.googleapis.com/auth/cloud-platform&quot;]. Cannot be
     * updated.
     */
    oauthScopes?: string[];
    /**
     * Optional. The Google Cloud Platform Service Account to be used by the
     * node VMs. If a service account is not specified, the &quot;default&quot;
     * Compute Engine service account is used. Cannot be updated.
     */
    serviceAccount?: string;
    /**
     * Optional. The Compute Engine subnetwork to be used for machine
     * communications, specified as a [relative resource name](
     * https://cloud.google.com/apis/design/resource_names#relative_resource_name).
     * For example:
     * `projects/{projectId}/regions/{regionId}/subnetworks/{subnetworkId}`  If
     * a subnetwork is provided, `nodeConfig.network` must also be provided, and
     * the subnetwork must belong to the enclosing environment&#39;s project and
     * location.
     */
    subnetwork?: string;
    /**
     * Optional. The list of instance tags applied to all node VMs. Tags are
     * used to identify valid sources or targets for network firewalls. Each tag
     * within the list must comply with
     * [RFC1035](https://www.ietf.org/rfc/rfc1035.txt). Cannot be updated.
     */
    tags?: string[];
  }
  /**
   * This resource represents a long-running operation that is the result of a
   * network API call.
   */
  export interface Schema$Operation {
    /**
     * If the value is `false`, it means the operation is still in progress. If
     * `true`, the operation is completed, and either `error` or `response` is
     * available.
     */
    done?: boolean;
    /**
     * The error result of the operation in case of failure or cancellation.
     */
    error?: Schema$Status;
    /**
     * Service-specific metadata associated with the operation.  It typically
     * contains progress information and common metadata such as create time.
     * Some services might not provide such metadata.  Any method that returns a
     * long-running operation should document the metadata type, if any.
     */
    metadata?: any;
    /**
     * The server-assigned name, which is only unique within the same service
     * that originally returns it. If you use the default HTTP mapping, the
     * `name` should have the format of `operations/some/unique/name`.
     */
    name?: string;
    /**
     * The normal response of the operation in case of success.  If the original
     * method returns no data on success, such as `Delete`, the response is
     * `google.protobuf.Empty`.  If the original method is standard
     * `Get`/`Create`/`Update`, the response should be the resource.  For other
     * methods, the response should have the type `XxxResponse`, where `Xxx` is
     * the original method name.  For example, if the original method name is
     * `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`.
     */
    response?: any;
  }
  /**
   * Metadata describing an operation.
   */
  export interface Schema$OperationMetadata {
    /**
     * Output only. The time the operation was submitted to the server.
     */
    createTime?: string;
    /**
     * Output only. The time when the operation terminated, regardless of its
     * success. This field is unset if the operation is still ongoing.
     */
    endTime?: string;
    /**
     * Output only. The type of operation being performed.
     */
    operationType?: string;
    /**
     * Output only. The resource being operated on, as a [relative resource
     * name]( /apis/design/resource_names#relative_resource_name).
     */
    resource?: string;
    /**
     * Output only. The UUID of the resource being operated on.
     */
    resourceUuid?: string;
    /**
     * Output only. The current operation state.
     */
    state?: string;
  }
  /**
   * Specifies the selection and config of software inside the environment.
   */
  export interface Schema$SoftwareConfig {
    /**
     * Optional. Apache Airflow configuration properties to override.  Property
     * keys contain the section and property name, separated by a hyphen, for
     * example `core-dags_are_paused_at_creation`. Sections must not contain
     * hyphens (&quot;-&quot;), opening square brackets (&quot;[&quot;),  or
     * closing square brackets (&quot;]&quot;). The name must be non-empty and
     * must not contain an equals sign (&quot;=&quot;) or semicolon
     * (&quot;;&quot;). The section as well as the name must not contain a
     * period (&quot;.&quot;). Apache Airflow configuration property names must
     * be written in
     * [snake_case](https://www.google.com/url?sa=D&amp;q=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FSnake_case).
     * Property values can contain any character and be written in any
     * lower/upper case format.  Certain Apache Airflow configuration property
     * values are
     * [blacklisted](/composer/docs/how-to/managing/setting-airflow-configurations#airflow_configuration_blacklists)
     * and cannot be overridden.
     */
    airflowConfigOverrides?: any;
    /**
     * Optional. Additional environment variables to provide to the Apache
     * Airflow scheduler, worker, and webserver processes.  Environment variable
     * names must match the regular expression `a-zA-Z_*`. Furthermore, they
     * cannot specify Apache Airflow software configuration overrides (i.e.,
     * match the regular expression `AIRFLOW__[A-Z0-9_]+__[A-Z0-9_]+`); nor can
     * they take any of the following reserved values:  * `AIRFLOW_HOME` *
     * `C_FORCE_ROOT` * `CONTAINER_NAME` * `DAGS_FOLDER` * `GCP_PROJECT` *
     * `GCS_BUCKET` * `GKE_CLUSTER_NAME` * `SQL_DATABASE` * `SQL_INSTANCE` *
     * `SQL_PASSWORD` * `SQL_PROJECT` * `SQL_REGION` * `SQL_USER`
     */
    envVariables?: any;
    /**
     * Output only. The version of the software running in the environment. This
     * encapsulates both the version of Cloud Composer functionality and the
     * version of Apache Airflow. It must match the regular expression
     * `composer-[0-9]+\.[0-9]+(\.[0-9]+)?-airflow-[0-9]+\.[0-9]+(\.[0-9]+.*)?`.
     * The Cloud Composer portion of the version is a [semantic
     * version](https://semver.org). The portion of the image version following
     * &lt;em&gt;airflow-&lt;/em&gt; is an official Apache Airflow repository
     * [release name](https://github.com/apache/incubator-airflow/releases). See
     * also [Release Notes](/composer/docs/release-notes).
     */
    imageVersion?: string;
    /**
     * Optional. Custom Python Package Index (PyPI) packages to be installed in
     * the environment.  Keys refer to the lowercase package name such as
     * `numpy` and values are the lowercase extras and version specifier such as
     * `==1.12.0`, `[devel,gcp_api]`, or `[devel]&gt;=1.8.2, &lt;1.9.2`. To
     * specify a package without pinning it to a version specifier, use the
     * empty string as the value.
     */
    pypiPackages?: any;
  }
  /**
   * The `Status` type defines a logical error model that is suitable for
   * different programming environments, including REST APIs and RPC APIs. It is
   * used by [gRPC](https://github.com/grpc). The error model is designed to be:
   * - Simple to use and understand for most users - Flexible enough to meet
   * unexpected needs  # Overview  The `Status` message contains three pieces of
   * data: error code, error message, and error details. The error code should
   * be an enum value of google.rpc.Code, but it may accept additional error
   * codes if needed.  The error message should be a developer-facing English
   * message that helps developers *understand* and *resolve* the error. If a
   * localized user-facing error message is needed, put the localized message in
   * the error details or localize it in the client. The optional error details
   * may contain arbitrary information about the error. There is a predefined
   * set of error detail types in the package `google.rpc` that can be used for
   * common error conditions.  # Language mapping  The `Status` message is the
   * logical representation of the error model, but it is not necessarily the
   * actual wire format. When the `Status` message is exposed in different
   * client libraries and different wire protocols, it can be mapped
   * differently. For example, it will likely be mapped to some exceptions in
   * Java, but more likely mapped to some error codes in C.  # Other uses  The
   * error model and the `Status` message can be used in a variety of
   * environments, either with or without APIs, to provide a consistent
   * developer experience across different environments.  Example uses of this
   * error model include:  - Partial errors. If a service needs to return
   * partial errors to the client,     it may embed the `Status` in the normal
   * response to indicate the partial     errors.  - Workflow errors. A typical
   * workflow has multiple steps. Each step may     have a `Status` message for
   * error reporting.  - Batch operations. If a client uses batch request and
   * batch response, the     `Status` message should be used directly inside
   * batch response, one for     each error sub-response.  - Asynchronous
   * operations. If an API call embeds asynchronous operation     results in its
   * response, the status of those operations should be     represented directly
   * using the `Status` message.  - Logging. If some API errors are stored in
   * logs, the message `Status` could     be used directly after any stripping
   * needed for security/privacy reasons.
   */
  export interface Schema$Status {
    /**
     * The status code, which should be an enum value of google.rpc.Code.
     */
    code?: number;
    /**
     * A list of messages that carry the error details.  There is a common set
     * of message types for APIs to use.
     */
    details?: any[];
    /**
     * A developer-facing error message, which should be in English. Any
     * user-facing error message should be localized and sent in the
     * google.rpc.Status.details field, or localized by the client.
     */
    message?: string;
  }


  export class Resource$Projects {
    root: Composer;
    locations: Resource$Projects$Locations;
    constructor(root: Composer) {
      this.root = root;
      this.getRoot.bind(this);
      this.locations = new Resource$Projects$Locations(root);
    }

    getRoot() {
      return this.root;
    }
  }


  export class Resource$Projects$Locations {
    root: Composer;
    environments: Resource$Projects$Locations$Environments;
    operations: Resource$Projects$Locations$Operations;
    constructor(root: Composer) {
      this.root = root;
      this.getRoot.bind(this);
      this.environments = new Resource$Projects$Locations$Environments(root);
      this.operations = new Resource$Projects$Locations$Operations(root);
    }

    getRoot() {
      return this.root;
    }
  }


  export class Resource$Projects$Locations$Environments {
    root: Composer;
    constructor(root: Composer) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
    }


    /**
     * composer.projects.locations.environments.create
     * @desc Create a new environment.
     * @alias composer.projects.locations.environments.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent The parent must be of the form `projects/{projectId}/locations/{locationId}`.
     * @param {().Environment} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(
        params?: Params$Resource$Projects$Locations$Environments$Create,
        options?: MethodOptions): AxiosPromise<Schema$Operation>;
    create(
        params: Params$Resource$Projects$Locations$Environments$Create,
        options: MethodOptions|BodyResponseCallback<Schema$Operation>,
        callback: BodyResponseCallback<Schema$Operation>): void;
    create(
        params: Params$Resource$Projects$Locations$Environments$Create,
        callback: BodyResponseCallback<Schema$Operation>): void;
    create(callback: BodyResponseCallback<Schema$Operation>): void;
    create(
        paramsOrCallback?:
            Params$Resource$Projects$Locations$Environments$Create|
        BodyResponseCallback<Schema$Operation>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$Operation>,
        callback?: BodyResponseCallback<Schema$Operation>):
        void|AxiosPromise<Schema$Operation> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Locations$Environments$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Environments$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://composer.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1beta1/{+parent}/environments')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Operation>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }


    /**
     * composer.projects.locations.environments.delete
     * @desc Delete an environment.
     * @alias composer.projects.locations.environments.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The environment to delete, in the form: `projects/{projectId}/locations/{locationId}/environments/{environmentId}`
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
        params?: Params$Resource$Projects$Locations$Environments$Delete,
        options?: MethodOptions): AxiosPromise<Schema$Operation>;
    delete(
        params: Params$Resource$Projects$Locations$Environments$Delete,
        options: MethodOptions|BodyResponseCallback<Schema$Operation>,
        callback: BodyResponseCallback<Schema$Operation>): void;
    delete(
        params: Params$Resource$Projects$Locations$Environments$Delete,
        callback: BodyResponseCallback<Schema$Operation>): void;
    delete(callback: BodyResponseCallback<Schema$Operation>): void;
    delete(
        paramsOrCallback?:
            Params$Resource$Projects$Locations$Environments$Delete|
        BodyResponseCallback<Schema$Operation>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$Operation>,
        callback?: BodyResponseCallback<Schema$Operation>):
        void|AxiosPromise<Schema$Operation> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Locations$Environments$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Environments$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://composer.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
              method: 'DELETE'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Operation>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }


    /**
     * composer.projects.locations.environments.get
     * @desc Get an existing environment.
     * @alias composer.projects.locations.environments.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The resource name of the environment to get, in the form: `projects/{projectId}/locations/{locationId}/environments/{environmentId}`
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(params?: Params$Resource$Projects$Locations$Environments$Get,
        options?: MethodOptions): AxiosPromise<Schema$Environment>;
    get(params: Params$Resource$Projects$Locations$Environments$Get,
        options: MethodOptions|BodyResponseCallback<Schema$Environment>,
        callback: BodyResponseCallback<Schema$Environment>): void;
    get(params: Params$Resource$Projects$Locations$Environments$Get,
        callback: BodyResponseCallback<Schema$Environment>): void;
    get(callback: BodyResponseCallback<Schema$Environment>): void;
    get(paramsOrCallback?: Params$Resource$Projects$Locations$Environments$Get|
        BodyResponseCallback<Schema$Environment>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$Environment>,
        callback?: BodyResponseCallback<Schema$Environment>):
        void|AxiosPromise<Schema$Environment> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Locations$Environments$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Environments$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://composer.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Environment>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Environment>(parameters);
      }
    }


    /**
     * composer.projects.locations.environments.list
     * @desc List environments.
     * @alias composer.projects.locations.environments.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer=} params.pageSize The maximum number of environments to return.
     * @param {string=} params.pageToken The next_page_token value returned from a previous List request, if any.
     * @param {string} params.parent List environments in the given project and location, in the form: `projects/{projectId}/locations/{locationId}`
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
        params?: Params$Resource$Projects$Locations$Environments$List,
        options?: MethodOptions): AxiosPromise<Schema$ListEnvironmentsResponse>;
    list(
        params: Params$Resource$Projects$Locations$Environments$List,
        options: MethodOptions|
        BodyResponseCallback<Schema$ListEnvironmentsResponse>,
        callback: BodyResponseCallback<Schema$ListEnvironmentsResponse>): void;
    list(
        params: Params$Resource$Projects$Locations$Environments$List,
        callback: BodyResponseCallback<Schema$ListEnvironmentsResponse>): void;
    list(callback: BodyResponseCallback<Schema$ListEnvironmentsResponse>): void;
    list(
        paramsOrCallback?: Params$Resource$Projects$Locations$Environments$List|
        BodyResponseCallback<Schema$ListEnvironmentsResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$ListEnvironmentsResponse>,
        callback?: BodyResponseCallback<Schema$ListEnvironmentsResponse>):
        void|AxiosPromise<Schema$ListEnvironmentsResponse> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Locations$Environments$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Environments$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://composer.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1beta1/{+parent}/environments')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$ListEnvironmentsResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ListEnvironmentsResponse>(parameters);
      }
    }


    /**
     * composer.projects.locations.environments.patch
     * @desc Update an environment.
     * @alias composer.projects.locations.environments.patch
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The relative resource name of the environment to update, in the form: `projects/{projectId}/locations/{locationId}/environments/{environmentId}`
     * @param {string=} params.updateMask Required. A comma-separated list of paths, relative to `Environment`, of fields to update. For example, to set the version of scikit-learn to install in the environment to 0.19.0 and to remove an existing installation of argparse, the `updateMask` parameter would include the following two `paths` values: "config.softwareConfig.pypiPackages.scikit-learn" and "config.softwareConfig.pypiPackages.argparse". The included patch environment would specify the scikit-learn version as follows:      {       "config":{         "softwareConfig":{           "pypiPackages":{             "scikit-learn":"==0.19.0"           }         }       }     }  Note that in the above example, any existing PyPI packages other than scikit-learn and argparse will be unaffected.  Only one update type may be included in a single request's `updateMask`. For example, one cannot update both the PyPI packages and labels in the same request. However, it is possible to update multiple members of a map field simultaneously in the same request. For example, to set the labels "label1" and "label2" while clearing "label3" (assuming it already exists), one can provide the paths "labels.label1", "labels.label2", and "labels.label3" and populate the patch environment as follows:      {       "labels":{         "label1":"new-label1-value"         "label2":"new-label2-value"       }     }  Note that in the above example, any existing labels that are not included in the `updateMask` will be unaffected.  It is also possible to replace an entire map field by providing the map field's path in the `updateMask`. The new value of the field will be that which is provided in the patch environment. For example, to delete all pre-existing user-specified PyPI packages and install botocore at version 1.7.14, the `updateMask` would contain the path "config.softwareConfig.pypiPackages", and the patch environment would be the following:      {       "config":{         "softwareConfig":{           "pypiPackages":{             "botocore":"==1.7.14"           }         }       }     }  <strong>Note:</strong> Only the following fields can be updated:   <table>  <tbody>  <tr>  <td><strong>Mask</strong></td>  <td><strong>Purpose</strong></td>  </tr>  <tr>  <td>config.softwareConfig.pypiPackages  </td>  <td>Replace all custom custom PyPI packages. If a replacement  package map is not included in `environment`, all custom  PyPI packages are cleared. It is an error to provide both this mask and a  mask specifying an individual package.</td>  </tr>  <tr>  <td>config.softwareConfig.pypiPackages.<var>packagename</var></td>  <td>Update the custom PyPI package <var>packagename</var>,  preserving other packages. To delete the package, include it in  `updateMask`, and omit the mapping for it in  `environment.config.softwareConfig.pypiPackages`. It is an error  to provide both a mask of this form and the  "config.softwareConfig.pypiPackages" mask.</td>  </tr>  <tr>  <td>labels</td>  <td>Replace all environment labels. If a replacement labels map is not  included in `environment`, all labels are cleared. It is an error to  provide both this mask and a mask specifying one or more individual  labels.</td>  </tr>  <tr>  <td>labels.<var>labelName</var></td>  <td>Set the label named <var>labelName</var>, while preserving other  labels. To delete the label, include it in `updateMask` and omit its  mapping in `environment.labels`. It is an error to provide both a  mask of this form and the "labels" mask.</td>  </tr>  <tr>  <td>config.nodeCount</td>  <td>Horizontally scale the number of nodes in the environment. An integer  greater than or equal to 3 must be provided in the `config.nodeCount` field.  </td>  </tr>  <tr>  <td>config.softwareConfig.airflowConfigOverrides</td>  <td>Replace all Apache Airflow config overrides. If a replacement config  overrides map is not included in `environment`, all config overrides  are cleared.  It is an error to provide both this mask and a mask specifying one or  more individual config overrides.</td>  </tr>  <tr>  <td>config.softwareConfig.properties.<var>section</var>-<var>name  </var></td>  <td>Override the Apache Airflow property <var>name</var> in the section  named <var>section</var>, preserving other properties. To delete the  property override, include it in `updateMask` and omit its mapping  in `environment.config.softwareConfig.properties`.  It is an error to provide both a mask of this form and the  "config.softwareConfig.properties" mask.</td>  </tr>  <tr>  <td>config.softwareConfig.envVariables</td>  <td>Replace all environment variables. If a replacement environment  variable map is not included in `environment`, all custom environment  variables  are cleared.  It is an error to provide both this mask and a mask specifying one or  more individual environment variables.</td>  </tr>  </tbody>  </table>
     * @param {().Environment} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch(
        params?: Params$Resource$Projects$Locations$Environments$Patch,
        options?: MethodOptions): AxiosPromise<Schema$Operation>;
    patch(
        params: Params$Resource$Projects$Locations$Environments$Patch,
        options: MethodOptions|BodyResponseCallback<Schema$Operation>,
        callback: BodyResponseCallback<Schema$Operation>): void;
    patch(
        params: Params$Resource$Projects$Locations$Environments$Patch,
        callback: BodyResponseCallback<Schema$Operation>): void;
    patch(callback: BodyResponseCallback<Schema$Operation>): void;
    patch(
        paramsOrCallback?:
            Params$Resource$Projects$Locations$Environments$Patch|
        BodyResponseCallback<Schema$Operation>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$Operation>,
        callback?: BodyResponseCallback<Schema$Operation>):
        void|AxiosPromise<Schema$Operation> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Locations$Environments$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Environments$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://composer.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
              method: 'PATCH'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Operation>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Environments$Create {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The parent must be of the form
     * `projects/{projectId}/locations/{locationId}`.
     */
    parent: string;
    /**
     * Request body metadata
     */
    resource?: Schema$Environment;
  }
  export interface Params$Resource$Projects$Locations$Environments$Delete {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The environment to delete, in the form:
     * `projects/{projectId}/locations/{locationId}/environments/{environmentId}`
     */
    name: string;
  }
  export interface Params$Resource$Projects$Locations$Environments$Get {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The resource name of the environment to get, in the form:
     * `projects/{projectId}/locations/{locationId}/environments/{environmentId}`
     */
    name: string;
  }
  export interface Params$Resource$Projects$Locations$Environments$List {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The maximum number of environments to return.
     */
    pageSize?: number;
    /**
     * The next_page_token value returned from a previous List request, if any.
     */
    pageToken?: string;
    /**
     * List environments in the given project and location, in the form:
     * `projects/{projectId}/locations/{locationId}`
     */
    parent: string;
  }
  export interface Params$Resource$Projects$Locations$Environments$Patch {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The relative resource name of the environment to update, in the form:
     * `projects/{projectId}/locations/{locationId}/environments/{environmentId}`
     */
    name: string;
    /**
     * Required. A comma-separated list of paths, relative to `Environment`, of
     * fields to update. For example, to set the version of scikit-learn to
     * install in the environment to 0.19.0 and to remove an existing
     * installation of argparse, the `updateMask` parameter would include the
     * following two `paths` values:
     * "config.softwareConfig.pypiPackages.scikit-learn" and
     * "config.softwareConfig.pypiPackages.argparse". The included patch
     * environment would specify the scikit-learn version as follows:      {
     * "config":{         "softwareConfig":{           "pypiPackages":{
     * "scikit-learn":"==0.19.0"           }         }       }     }  Note that
     * in the above example, any existing PyPI packages other than scikit-learn
     * and argparse will be unaffected.  Only one update type may be included in
     * a single request's `updateMask`. For example, one cannot update both the
     * PyPI packages and labels in the same request. However, it is possible to
     * update multiple members of a map field simultaneously in the same
     * request. For example, to set the labels "label1" and "label2" while
     * clearing "label3" (assuming it already exists), one can provide the paths
     * "labels.label1", "labels.label2", and "labels.label3" and populate the
     * patch environment as follows:      {       "labels":{
     * "label1":"new-label1-value"         "label2":"new-label2-value"       }
     * }  Note that in the above example, any existing labels that are not
     * included in the `updateMask` will be unaffected.  It is also possible to
     * replace an entire map field by providing the map field's path in the
     * `updateMask`. The new value of the field will be that which is provided
     * in the patch environment. For example, to delete all pre-existing
     * user-specified PyPI packages and install botocore at version 1.7.14, the
     * `updateMask` would contain the path "config.softwareConfig.pypiPackages",
     * and the patch environment would be the following:      {       "config":{
     * "softwareConfig":{           "pypiPackages":{ "botocore":"==1.7.14" } }
     * }     }  <strong>Note:</strong> Only the following fields can be updated:
     * <table>  <tbody>  <tr>  <td><strong>Mask</strong></td>
     * <td><strong>Purpose</strong></td>  </tr>  <tr>
     * <td>config.softwareConfig.pypiPackages  </td>  <td>Replace all custom
     * custom PyPI packages. If a replacement  package map is not included in
     * `environment`, all custom  PyPI packages are cleared. It is an error to
     * provide both this mask and a  mask specifying an individual package.</td>
     * </tr>  <tr>
     * <td>config.softwareConfig.pypiPackages.<var>packagename</var></td>
     * <td>Update the custom PyPI package <var>packagename</var>,  preserving
     * other packages. To delete the package, include it in  `updateMask`, and
     * omit the mapping for it in
     * `environment.config.softwareConfig.pypiPackages`. It is an error  to
     * provide both a mask of this form and the
     * "config.softwareConfig.pypiPackages" mask.</td>  </tr>  <tr>
     * <td>labels</td>  <td>Replace all environment labels. If a replacement
     * labels map is not  included in `environment`, all labels are cleared. It
     * is an error to  provide both this mask and a mask specifying one or more
     * individual  labels.</td>  </tr>  <tr>
     * <td>labels.<var>labelName</var></td>  <td>Set the label named
     * <var>labelName</var>, while preserving other  labels. To delete the
     * label, include it in `updateMask` and omit its  mapping in
     * `environment.labels`. It is an error to provide both a  mask of this form
     * and the "labels" mask.</td>  </tr>  <tr>  <td>config.nodeCount</td>
     * <td>Horizontally scale the number of nodes in the environment. An integer
     * greater than or equal to 3 must be provided in the `config.nodeCount`
     * field.  </td>  </tr>  <tr>
     * <td>config.softwareConfig.airflowConfigOverrides</td>  <td>Replace all
     * Apache Airflow config overrides. If a replacement config  overrides map
     * is not included in `environment`, all config overrides  are cleared.  It
     * is an error to provide both this mask and a mask specifying one or  more
     * individual config overrides.</td>  </tr>  <tr>
     * <td>config.softwareConfig.properties.<var>section</var>-<var>name
     * </var></td>  <td>Override the Apache Airflow property <var>name</var> in
     * the section  named <var>section</var>, preserving other properties. To
     * delete the  property override, include it in `updateMask` and omit its
     * mapping  in `environment.config.softwareConfig.properties`.  It is an
     * error to provide both a mask of this form and the
     * "config.softwareConfig.properties" mask.</td>  </tr>  <tr>
     * <td>config.softwareConfig.envVariables</td>  <td>Replace all environment
     * variables. If a replacement environment  variable map is not included in
     * `environment`, all custom environment  variables  are cleared.  It is an
     * error to provide both this mask and a mask specifying one or  more
     * individual environment variables.</td>  </tr>  </tbody>  </table>
     */
    updateMask?: string;
    /**
     * Request body metadata
     */
    resource?: Schema$Environment;
  }


  export class Resource$Projects$Locations$Operations {
    root: Composer;
    constructor(root: Composer) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
    }


    /**
     * composer.projects.locations.operations.delete
     * @desc Deletes a long-running operation. This method indicates that the
     * client is no longer interested in the operation result. It does not
     * cancel the operation. If the server doesn't support this method, it
     * returns `google.rpc.Code.UNIMPLEMENTED`.
     * @alias composer.projects.locations.operations.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The name of the operation resource to be deleted.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
        params?: Params$Resource$Projects$Locations$Operations$Delete,
        options?: MethodOptions): AxiosPromise<Schema$Empty>;
    delete(
        params: Params$Resource$Projects$Locations$Operations$Delete,
        options: MethodOptions|BodyResponseCallback<Schema$Empty>,
        callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
        params: Params$Resource$Projects$Locations$Operations$Delete,
        callback: BodyResponseCallback<Schema$Empty>): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
        paramsOrCallback?: Params$Resource$Projects$Locations$Operations$Delete|
        BodyResponseCallback<Schema$Empty>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Empty>,
        callback?: BodyResponseCallback<Schema$Empty>):
        void|AxiosPromise<Schema$Empty> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Locations$Operations$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Operations$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://composer.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
              method: 'DELETE'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Empty>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }


    /**
     * composer.projects.locations.operations.get
     * @desc Gets the latest state of a long-running operation.  Clients can use
     * this method to poll the operation result at intervals as recommended by
     * the API service.
     * @alias composer.projects.locations.operations.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The name of the operation resource.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(params?: Params$Resource$Projects$Locations$Operations$Get,
        options?: MethodOptions): AxiosPromise<Schema$Operation>;
    get(params: Params$Resource$Projects$Locations$Operations$Get,
        options: MethodOptions|BodyResponseCallback<Schema$Operation>,
        callback: BodyResponseCallback<Schema$Operation>): void;
    get(params: Params$Resource$Projects$Locations$Operations$Get,
        callback: BodyResponseCallback<Schema$Operation>): void;
    get(callback: BodyResponseCallback<Schema$Operation>): void;
    get(paramsOrCallback?: Params$Resource$Projects$Locations$Operations$Get|
        BodyResponseCallback<Schema$Operation>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$Operation>,
        callback?: BodyResponseCallback<Schema$Operation>):
        void|AxiosPromise<Schema$Operation> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Locations$Operations$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Operations$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://composer.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Operation>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }


    /**
     * composer.projects.locations.operations.list
     * @desc Lists operations that match the specified filter in the request. If
     * the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE:
     * the `name` binding allows API services to override the binding to use
     * different resource name schemes, such as `users/x/operations`. To
     * override the binding, API services can add a binding such as
     * `"/v1/{name=users/x}/operations"` to their service configuration. For
     * backwards compatibility, the default name includes the operations
     * collection id, however overriding users must ensure the name binding is
     * the parent resource, without the operations collection id.
     * @alias composer.projects.locations.operations.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filter The standard list filter.
     * @param {string} params.name The name of the operation's parent resource.
     * @param {integer=} params.pageSize The standard list page size.
     * @param {string=} params.pageToken The standard list page token.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
        params?: Params$Resource$Projects$Locations$Operations$List,
        options?: MethodOptions): AxiosPromise<Schema$ListOperationsResponse>;
    list(
        params: Params$Resource$Projects$Locations$Operations$List,
        options: MethodOptions|
        BodyResponseCallback<Schema$ListOperationsResponse>,
        callback: BodyResponseCallback<Schema$ListOperationsResponse>): void;
    list(
        params: Params$Resource$Projects$Locations$Operations$List,
        callback: BodyResponseCallback<Schema$ListOperationsResponse>): void;
    list(callback: BodyResponseCallback<Schema$ListOperationsResponse>): void;
    list(
        paramsOrCallback?: Params$Resource$Projects$Locations$Operations$List|
        BodyResponseCallback<Schema$ListOperationsResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$ListOperationsResponse>,
        callback?: BodyResponseCallback<Schema$ListOperationsResponse>):
        void|AxiosPromise<Schema$ListOperationsResponse> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Locations$Operations$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Operations$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://composer.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1beta1/{+name}/operations')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$ListOperationsResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ListOperationsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Operations$Delete {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The name of the operation resource to be deleted.
     */
    name: string;
  }
  export interface Params$Resource$Projects$Locations$Operations$Get {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The name of the operation resource.
     */
    name: string;
  }
  export interface Params$Resource$Projects$Locations$Operations$List {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The standard list filter.
     */
    filter?: string;
    /**
     * The name of the operation's parent resource.
     */
    name: string;
    /**
     * The standard list page size.
     */
    pageSize?: number;
    /**
     * The standard list page token.
     */
    pageToken?: string;
  }
}
