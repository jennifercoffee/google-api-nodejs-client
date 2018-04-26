// Copyright 2014-2016, Google, Inc.
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

'use strict';

const {google} = require('googleapis');
const path = require('path');

async function runSample (useHttp2) {
  // Create a new JWT client using the key file downloaded from the Google Developer Console
  const client = await google.auth.getClient({
    keyFile: path.join(__dirname, 'jwt.keys.json'),
    scopes: 'https://www.googleapis.com/auth/drive.readonly'
  });

  // Obtain a new drive client, making sure you pass along the auth client
  const drive = google.drive({
    version: 'v3',
    auth: client,
    http2: useHttp2
  });

  const startTime = Date.now();
  // Make an authorized request to list Drive files.
  const requests = [];
  for (let i=0; i<1; i++) {
    requests.push(drive.files.list());
  }
  const res = await Promise.all(requests);
  const endTime = Date.now();

  const total = endTime - startTime;
  return total;
}

async function runTests() {
  let total = await runSample(false);
  console.log(`HTTP/1: ${total}`);

  total = await runSample(true);
  console.log(`HTTP/2: ${total}`);

}

if (module === require.main) {
  runTests().catch(console.error);
}

// Exports for unit testing purposes
module.exports = { runSample };
