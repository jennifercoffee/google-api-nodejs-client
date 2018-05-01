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

export namespace poly_v1 {
  /**
   * Poly API
   *
   * The Poly API provides read-only access to assets hosted on &lt;a
   * href=&quot;https://poly.google.com&quot;&gt;poly.google.com&lt;/a&gt;.
   *
   * @example
   * const google = require('googleapis');
   * const poly = google.poly('v1');
   *
   * @namespace poly
   * @type {Function}
   * @version v1
   * @variation v1
   * @param {object=} options Options for Poly
   */
  export class Poly {
    _options: GlobalOptions;
    google: GoogleApis;
    root = this;

    assets: Resource$Assets;
    users: Resource$Users;

    constructor(options: GlobalOptions, google: GoogleApis) {
      this._options = options || {};
      this.google = google;
      this.getRoot.bind(this);

      this.assets = new Resource$Assets(this);
      this.users = new Resource$Users(this);
    }

    getRoot() {
      return this.root;
    }
  }

  /**
   * Represents and describes an asset in the Poly library. An asset is a 3D
   * model or scene created using [Tilt Brush](//www.tiltbrush.com),
   * [Blocks](//vr.google.com/blocks/), or any 3D program that produces a file
   * that can be upload to Poly.
   */
  export interface Schema$Asset {
    /**
     * The author&#39;s publicly visible name. Use this name when giving credit
     * to the author. For more information, see
     * [Licensing](/poly/discover/licensing).
     */
    authorName?: string;
    /**
     * For published assets, the time when the asset was published. For
     * unpublished assets, the time when the asset was created.
     */
    createTime?: string;
    /**
     * The human-readable description, set by the asset&#39;s author.
     */
    description?: string;
    /**
     * The human-readable name, set by the asset&#39;s author.
     */
    displayName?: string;
    /**
     * A list of Formats where each format describes one representation of the
     * asset.
     */
    formats?: Schema$Format[];
    /**
     * Whether this asset has been curated by the Poly team.
     */
    isCurated?: boolean;
    /**
     * The license under which the author has made the asset available for use,
     * if any.
     */
    license?: string;
    /**
     * Application-defined opaque metadata for this asset. This field is only
     * returned when querying for the signed-in user&#39;s own assets, not for
     * public assets. This string is limited to 1K chars. It is up to the
     * creator of the asset to define the format for this string (for example,
     * JSON).
     */
    metadata?: string;
    /**
     * The unique identifier for the asset in the form: `assets/{ASSET_ID}`.
     */
    name?: string;
    /**
     * Hints for displaying the asset. Note that these parameters are not
     * immutable; the author of an asset may change them post-publication.
     */
    presentationParams?: Schema$PresentationParams;
    /**
     * The thumbnail image for the asset.
     */
    thumbnail?: Schema$File;
    /**
     * The time when the asset was last modified. For published assets, whose
     * contents are immutable, the update time changes only when metadata
     * properties, such as visibility, are updated.
     */
    updateTime?: string;
    /**
     * The visibility of the asset and who can access it.
     */
    visibility?: string;
  }
  /**
   * A message generated by the asset import process.
   */
  export interface Schema$AssetImportMessage {
    /**
     * The code associated with this message.
     */
    code?: string;
    /**
     * An optional file path. Only present for those error codes that specify
     * it.
     */
    filePath?: string;
    /**
     * An optional image error. Only present for INVALID_IMAGE_FILE.
     */
    imageError?: Schema$ImageError;
    /**
     * An optional OBJ parse error. Only present for OBJ_PARSE_ERROR.
     */
    objParseError?: Schema$ObjParseError;
  }
  /**
   * Represents a file in Poly, which can be a root, resource, or thumbnail
   * file.
   */
  export interface Schema$File {
    /**
     * The MIME content-type, such as `image/png`. For more information, see
     * [MIME
     * types](//developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types).
     */
    contentType?: string;
    /**
     * The path of the resource file relative to the root file. For root or
     * thumbnail files, this is just the filename.
     */
    relativePath?: string;
    /**
     * The URL where the file data can be retrieved.
     */
    url?: string;
  }
  /**
   * The same asset can be represented in different formats, for example, a
   * [WaveFront .obj](//en.wikipedia.org/wiki/Wavefront_.obj_file) file with its
   * corresponding .mtl file or a [Khronos glTF](//www.khronos.org/gltf) file
   * with its corresponding .glb binary data. A format refers to a specific
   * representation of an asset and contains all information needed to retrieve
   * and describe this representation.
   */
  export interface Schema$Format {
    /**
     * Complexity stats about this representation of the asset.
     */
    formatComplexity?: Schema$FormatComplexity;
    /**
     * A short string that identifies the format type of this representation.
     * Possible values are: `FBX`, `GLTF`, `GLTF2`, `OBJ`, and `TILT`.
     */
    formatType?: string;
    /**
     * A list of dependencies of the root element. May include, but is not
     * limited to, materials, textures, and shader programs.
     */
    resources?: Schema$File[];
    /**
     * The root of the file hierarchy. This will always be populated. For some
     * format_types - such as `TILT`, which are self-contained - this is all of
     * the data.  Other types - such as `OBJ` - often reference other data
     * elements. These are contained in the resources field.
     */
    root?: Schema$File;
  }
  /**
   * Information on the complexity of this Format.
   */
  export interface Schema$FormatComplexity {
    /**
     * A non-negative integer that represents the level of detail (LOD) of this
     * format relative to other formats of the same asset with the same
     * format_type. This hint allows you to sort formats from the most-detailed
     * (0) to least-detailed (integers greater than 0).
     */
    lodHint?: number;
    /**
     * The estimated number of triangles.
     */
    triangleCount?: string;
  }
  /**
   * A message resulting from reading an image file.
   */
  export interface Schema$ImageError {
    /**
     * The type of image error encountered. Optional for older image errors.
     */
    code?: string;
    /**
     * The file path in the import of the image that was rejected.
     */
    filePath?: string;
  }
  /**
   * A response message from a request to list.
   */
  export interface Schema$ListAssetsResponse {
    /**
     * A list of assets that match the criteria specified in the request.
     */
    assets?: Schema$Asset[];
    /**
     * The continuation token for retrieving the next page. If empty, indicates
     * that there are no more pages. To get the next page, submit the same
     * request specifying this value as the page_token.
     */
    nextPageToken?: string;
    /**
     * The total number of assets in the list, without pagination.
     */
    totalSize?: number;
  }
  /**
   * A response message from a request to list.
   */
  export interface Schema$ListLikedAssetsResponse {
    /**
     * A list of assets that match the criteria specified in the request.
     */
    assets?: Schema$Asset[];
    /**
     * The continuation token for retrieving the next page. If empty, indicates
     * that there are no more pages. To get the next page, submit the same
     * request specifying this value as the page_token.
     */
    nextPageToken?: string;
    /**
     * The total number of assets in the list, without pagination.
     */
    totalSize?: number;
  }
  /**
   * A response message from a request to list.
   */
  export interface Schema$ListUserAssetsResponse {
    /**
     * The continuation token for retrieving the next page. If empty, indicates
     * that there are no more pages. To get the next page, submit the same
     * request specifying this value as the page_token.
     */
    nextPageToken?: string;
    /**
     * The total number of assets in the list, without pagination.
     */
    totalSize?: number;
    /**
     * A list of UserAssets matching the request.
     */
    userAssets?: Schema$UserAsset[];
  }
  /**
   * Details of an error resulting from parsing an OBJ file
   */
  export interface Schema$ObjParseError {
    /**
     * The type of problem found (required).
     */
    code?: string;
    /**
     * The ending character index at which the problem was found.
     */
    endIndex?: number;
    /**
     * The file path in which the problem was found.
     */
    filePath?: string;
    /**
     * The text of the line. Note that this may be truncated if the line was
     * very long. This may not include the error if it occurs after line
     * truncation.
     */
    line?: string;
    /**
     * Line number at which the problem was found.
     */
    lineNumber?: number;
    /**
     * The starting character index at which the problem was found.
     */
    startIndex?: number;
  }
  /**
   * Hints for displaying the asset, based on information available when the
   * asset was uploaded.
   */
  export interface Schema$PresentationParams {
    /**
     * The materials&#39; diffuse/albedo color. This does not apply to vertex
     * colors or texture maps.
     */
    colorSpace?: string;
    /**
     * A rotation that should be applied to the object root to make it upright.
     * More precisely, this quaternion transforms from &quot;object space&quot;
     * (the space in which the object is defined) to &quot;presentation
     * space&quot;, a coordinate system where +Y is up, +X is right, -Z is
     * forward. For example, if the object is the Eiffel Tower, in its local
     * coordinate system the object might be laid out such that the base of the
     * tower is on the YZ plane and the tip of the tower is towards positive X.
     * In this case this quaternion would specify a rotation (of 90 degrees
     * about the Z axis) such that in the presentation space the base of the
     * tower is aligned with the XZ plane, and the tip of the tower lies towards
     * +Y.  This rotation is unrelated to the object&#39;s pose in the web
     * preview, which is just a camera position setting and is *not* reflected
     * in this rotation.  Please note: this is applicable only to the gLTF.
     */
    orientingRotation?: Schema$Quaternion;
  }
  /**
   * A [Quaternion](//en.wikipedia.org/wiki/Quaternion). Please note: if in the
   * response you see &quot;w: 1&quot; and nothing else this is the default
   * value of [0, 0, 0, 1] where x,y, and z are 0.
   */
  export interface Schema$Quaternion {
    /**
     * The scalar component.
     */
    w?: number;
    /**
     * The x component.
     */
    x?: number;
    /**
     * The y component.
     */
    y?: number;
    /**
     * The z component.
     */
    z?: number;
  }
  /**
   * A response message from a request to list. This is returned in the response
   * field of the Operation.
   */
  export interface Schema$StartAssetImportResponse {
    /**
     * The id of newly created asset. If this is empty when the operation is
     * complete it means the import failed. Please refer to the
     * asset_import_message field to understand what went wrong.
     */
    assetId?: string;
    /**
     * The id of the asset import.
     */
    assetImportId?: string;
    /**
     * The message from the asset import. This will contain any warnings (or -
     * in the case of failure - errors) that occurred during import.
     */
    assetImportMessages?: Schema$AssetImportMessage[];
    /**
     * The publish URL for the asset.
     */
    publishUrl?: string;
  }
  /**
   * Data about the user&#39;s asset.
   */
  export interface Schema$UserAsset {
    /**
     * An Asset.
     */
    asset?: Schema$Asset;
  }


  export class Resource$Assets {
    root: Poly;
    constructor(root: Poly) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
    }


    /**
     * poly.assets.get
     * @desc Returns detailed information about an asset given its name. PRIVATE
     * assets are returned only if  the currently authenticated user (via OAuth
     * token) is the author of the asset.
     * @alias poly.assets.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. An asset's name in the form `assets/{ASSET_ID}`.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(params?: Params$Resource$Assets$Get,
        options?: MethodOptions): AxiosPromise<Schema$Asset>;
    get(params: Params$Resource$Assets$Get,
        options: MethodOptions|BodyResponseCallback<Schema$Asset>,
        callback: BodyResponseCallback<Schema$Asset>): void;
    get(params: Params$Resource$Assets$Get,
        callback: BodyResponseCallback<Schema$Asset>): void;
    get(callback: BodyResponseCallback<Schema$Asset>): void;
    get(paramsOrCallback?: Params$Resource$Assets$Get|
        BodyResponseCallback<Schema$Asset>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Asset>,
        callback?: BodyResponseCallback<Schema$Asset>):
        void|AxiosPromise<Schema$Asset> {
      let params = (paramsOrCallback || {}) as Params$Resource$Assets$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Assets$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://poly.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Asset>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Asset>(parameters);
      }
    }


    /**
     * poly.assets.list
     * @desc Lists all public, remixable assets. These are assets with an access
     * level of PUBLIC and published under the CC-By license.
     * @alias poly.assets.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.category Filter assets based on the specified category. Supported values are: `animals`, `architecture`, `art`, `food`, `nature`, `objects`, `people`, `scenes`, `technology`, and `transport`.
     * @param {boolean=} params.curated Return only assets that have been curated by the Poly team.
     * @param {string=} params.format Return only assets with the matching format. Acceptable values are: `BLOCKS`, `FBX`, `GLTF`, `GLTF2`, `OBJ`, `TILT`.
     * @param {string=} params.keywords One or more search terms to be matched against all text that Poly has indexed for assets, which includes display_name, description, and tags. Multiple keywords should be separated by spaces.
     * @param {string=} params.maxComplexity Returns assets that are of the specified complexity or less. Defaults to COMPLEX. For example, a request for MEDIUM assets also includes SIMPLE assets.
     * @param {string=} params.orderBy Specifies an ordering for assets. Acceptable values are: `BEST`, `NEWEST`, `OLDEST`. Defaults to `BEST`, which ranks assets based on a combination of popularity and other features.
     * @param {integer=} params.pageSize The maximum number of assets to be returned. This value must be between `1` and `100`. Defaults to `20`.
     * @param {string=} params.pageToken Specifies a continuation token from a previous search whose results were split into multiple pages. To get the next page, submit the same request specifying the value from next_page_token.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(params?: Params$Resource$Assets$List, options?: MethodOptions):
        AxiosPromise<Schema$ListAssetsResponse>;
    list(
        params: Params$Resource$Assets$List,
        options: MethodOptions|BodyResponseCallback<Schema$ListAssetsResponse>,
        callback: BodyResponseCallback<Schema$ListAssetsResponse>): void;
    list(
        params: Params$Resource$Assets$List,
        callback: BodyResponseCallback<Schema$ListAssetsResponse>): void;
    list(callback: BodyResponseCallback<Schema$ListAssetsResponse>): void;
    list(
        paramsOrCallback?: Params$Resource$Assets$List|
        BodyResponseCallback<Schema$ListAssetsResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$ListAssetsResponse>,
        callback?: BodyResponseCallback<Schema$ListAssetsResponse>):
        void|AxiosPromise<Schema$ListAssetsResponse> {
      let params = (paramsOrCallback || {}) as Params$Resource$Assets$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Assets$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://poly.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/assets').replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$ListAssetsResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ListAssetsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Assets$Get {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Required. An asset's name in the form `assets/{ASSET_ID}`.
     */
    name: string;
  }
  export interface Params$Resource$Assets$List {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Filter assets based on the specified category. Supported values are:
     * `animals`, `architecture`, `art`, `food`, `nature`, `objects`, `people`,
     * `scenes`, `technology`, and `transport`.
     */
    category?: string;
    /**
     * Return only assets that have been curated by the Poly team.
     */
    curated?: boolean;
    /**
     * Return only assets with the matching format. Acceptable values are:
     * `BLOCKS`, `FBX`, `GLTF`, `GLTF2`, `OBJ`, `TILT`.
     */
    format?: string;
    /**
     * One or more search terms to be matched against all text that Poly has
     * indexed for assets, which includes display_name, description, and tags.
     * Multiple keywords should be separated by spaces.
     */
    keywords?: string;
    /**
     * Returns assets that are of the specified complexity or less. Defaults to
     * COMPLEX. For example, a request for MEDIUM assets also includes SIMPLE
     * assets.
     */
    maxComplexity?: string;
    /**
     * Specifies an ordering for assets. Acceptable values are: `BEST`,
     * `NEWEST`, `OLDEST`. Defaults to `BEST`, which ranks assets based on a
     * combination of popularity and other features.
     */
    orderBy?: string;
    /**
     * The maximum number of assets to be returned. This value must be between
     * `1` and `100`. Defaults to `20`.
     */
    pageSize?: number;
    /**
     * Specifies a continuation token from a previous search whose results were
     * split into multiple pages. To get the next page, submit the same request
     * specifying the value from next_page_token.
     */
    pageToken?: string;
  }


  export class Resource$Users {
    root: Poly;
    assets: Resource$Users$Assets;
    likedassets: Resource$Users$Likedassets;
    constructor(root: Poly) {
      this.root = root;
      this.getRoot.bind(this);
      this.assets = new Resource$Users$Assets(root);
      this.likedassets = new Resource$Users$Likedassets(root);
    }

    getRoot() {
      return this.root;
    }
  }


  export class Resource$Users$Assets {
    root: Poly;
    constructor(root: Poly) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
    }


    /**
     * poly.users.assets.list
     * @desc Lists assets authored by the given user. Only the value 'me',
     * representing the currently-authenticated user, is supported. May include
     * assets with an access level of PRIVATE or UNLISTED and assets which are
     * All Rights Reserved for the currently-authenticated user.
     * @alias poly.users.assets.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.format Return only assets with the matching format. Acceptable values are: `BLOCKS`, `FBX`, `GLTF`, `GLTF2`, `OBJ`, and `TILT`.
     * @param {string} params.name A valid user id. Currently, only the special value 'me', representing the currently-authenticated user is supported. To use 'me', you must pass an OAuth token with the request.
     * @param {string=} params.orderBy Specifies an ordering for assets. Acceptable values are: `BEST`, `NEWEST`, `OLDEST`. Defaults to `BEST`, which ranks assets based on a combination of popularity and other features.
     * @param {integer=} params.pageSize The maximum number of assets to be returned. This value must be between `1` and `100`. Defaults to `20`.
     * @param {string=} params.pageToken Specifies a continuation token from a previous search whose results were split into multiple pages. To get the next page, submit the same request specifying the value from next_page_token.
     * @param {string=} params.visibility The visibility of the assets to be returned. Defaults to VISIBILITY_UNSPECIFIED which returns all assets.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(params?: Params$Resource$Users$Assets$List, options?: MethodOptions):
        AxiosPromise<Schema$ListUserAssetsResponse>;
    list(
        params: Params$Resource$Users$Assets$List,
        options: MethodOptions|
        BodyResponseCallback<Schema$ListUserAssetsResponse>,
        callback: BodyResponseCallback<Schema$ListUserAssetsResponse>): void;
    list(
        params: Params$Resource$Users$Assets$List,
        callback: BodyResponseCallback<Schema$ListUserAssetsResponse>): void;
    list(callback: BodyResponseCallback<Schema$ListUserAssetsResponse>): void;
    list(
        paramsOrCallback?: Params$Resource$Users$Assets$List|
        BodyResponseCallback<Schema$ListUserAssetsResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$ListUserAssetsResponse>,
        callback?: BodyResponseCallback<Schema$ListUserAssetsResponse>):
        void|AxiosPromise<Schema$ListUserAssetsResponse> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Users$Assets$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Users$Assets$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://poly.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/{+name}/assets')
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
        createAPIRequest<Schema$ListUserAssetsResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ListUserAssetsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Users$Assets$List {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Return only assets with the matching format. Acceptable values are:
     * `BLOCKS`, `FBX`, `GLTF`, `GLTF2`, `OBJ`, and `TILT`.
     */
    format?: string;
    /**
     * A valid user id. Currently, only the special value 'me', representing the
     * currently-authenticated user is supported. To use 'me', you must pass an
     * OAuth token with the request.
     */
    name: string;
    /**
     * Specifies an ordering for assets. Acceptable values are: `BEST`,
     * `NEWEST`, `OLDEST`. Defaults to `BEST`, which ranks assets based on a
     * combination of popularity and other features.
     */
    orderBy?: string;
    /**
     * The maximum number of assets to be returned. This value must be between
     * `1` and `100`. Defaults to `20`.
     */
    pageSize?: number;
    /**
     * Specifies a continuation token from a previous search whose results were
     * split into multiple pages. To get the next page, submit the same request
     * specifying the value from next_page_token.
     */
    pageToken?: string;
    /**
     * The visibility of the assets to be returned. Defaults to
     * VISIBILITY_UNSPECIFIED which returns all assets.
     */
    visibility?: string;
  }


  export class Resource$Users$Likedassets {
    root: Poly;
    constructor(root: Poly) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
    }


    /**
     * poly.users.likedassets.list
     * @desc Lists assets that the user has liked. Only the value 'me',
     * representing the currently-authenticated user, is supported. May include
     * assets with an access level of UNLISTED.
     * @alias poly.users.likedassets.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.format Return only assets with the matching format. Acceptable values are: `BLOCKS`, `FBX`, `GLTF`, `GLTF2`, `OBJ`, `TILT`.
     * @param {string} params.name A valid user id. Currently, only the special value 'me', representing the currently-authenticated user is supported. To use 'me', you must pass an OAuth token with the request.
     * @param {string=} params.orderBy Specifies an ordering for assets. Acceptable values are: `BEST`, `NEWEST`, `OLDEST`, 'LIKED_TIME'. Defaults to `LIKED_TIME`, which ranks assets based on how recently they were liked.
     * @param {integer=} params.pageSize The maximum number of assets to be returned. This value must be between `1` and `100`. Defaults to `20`.
     * @param {string=} params.pageToken Specifies a continuation token from a previous search whose results were split into multiple pages. To get the next page, submit the same request specifying the value from next_page_token.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
        params?: Params$Resource$Users$Likedassets$List,
        options?: MethodOptions): AxiosPromise<Schema$ListLikedAssetsResponse>;
    list(
        params: Params$Resource$Users$Likedassets$List,
        options: MethodOptions|
        BodyResponseCallback<Schema$ListLikedAssetsResponse>,
        callback: BodyResponseCallback<Schema$ListLikedAssetsResponse>): void;
    list(
        params: Params$Resource$Users$Likedassets$List,
        callback: BodyResponseCallback<Schema$ListLikedAssetsResponse>): void;
    list(callback: BodyResponseCallback<Schema$ListLikedAssetsResponse>): void;
    list(
        paramsOrCallback?: Params$Resource$Users$Likedassets$List|
        BodyResponseCallback<Schema$ListLikedAssetsResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$ListLikedAssetsResponse>,
        callback?: BodyResponseCallback<Schema$ListLikedAssetsResponse>):
        void|AxiosPromise<Schema$ListLikedAssetsResponse> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Users$Likedassets$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Users$Likedassets$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://poly.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/{+name}/likedassets')
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
        createAPIRequest<Schema$ListLikedAssetsResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ListLikedAssetsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Users$Likedassets$List {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Return only assets with the matching format. Acceptable values are:
     * `BLOCKS`, `FBX`, `GLTF`, `GLTF2`, `OBJ`, `TILT`.
     */
    format?: string;
    /**
     * A valid user id. Currently, only the special value 'me', representing the
     * currently-authenticated user is supported. To use 'me', you must pass an
     * OAuth token with the request.
     */
    name: string;
    /**
     * Specifies an ordering for assets. Acceptable values are: `BEST`,
     * `NEWEST`, `OLDEST`, 'LIKED_TIME'. Defaults to `LIKED_TIME`, which ranks
     * assets based on how recently they were liked.
     */
    orderBy?: string;
    /**
     * The maximum number of assets to be returned. This value must be between
     * `1` and `100`. Defaults to `20`.
     */
    pageSize?: number;
    /**
     * Specifies a continuation token from a previous search whose results were
     * split into multiple pages. To get the next page, submit the same request
     * specifying the value from next_page_token.
     */
    pageToken?: string;
  }
}
