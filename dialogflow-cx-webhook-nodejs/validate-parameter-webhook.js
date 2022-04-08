// Copyright 2022 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

'use strict';

const axios = require('axios');

function main(destination, webhookUrl) {
  // [START dialogflow_v3beta1_webhook_validate_form_parameters_async]
  /*
    TODO(developer): Uncomment these variables before running the sample.
    const destination = 'your-cruise-destination';
    const webhookUrl = 'your-webhook-trigger-url';
  */

    // Webhook will verify if cruise destination port is covered. You can find the webhook logic in lines 118-149 in the Prebuilt Telecommunications Agent `index.js`.
    // Sample list of covered cruise ports.
    // ['mexico', 'canada', 'anguilla']

  const webhookRequest = {
    fulfillmentInfo: {
      tag: 'cruisePlanCoverage',
    },
    sessionInfo: {
      parameters: {
        destination: destination,
      },
    },
  };

  async function validateParameter() {
    await axios({
      method: 'POST',
      url: webhookUrl,
      data:
        webhookRequest,
    }).then(res => {
      const fulfillmentResponseMessage =
        res.data.sessionInfo.parameters.port_is_covered;
      const parameterInfoState =
        res.data.pageInfo.formInfo.parameterInfo[0].state;

      console.log('Fulfillment Response:');
      console.log(fulfillmentResponseMessage, '\n'); // 'true' or 'false'

      console.log('Parameter Status:');
      console.log(parameterInfoState, '\n'); // Parameter state: 'VALID' or 'INVALID'
    }).catch(err => {
      if (err.response) {
        console.log("Client was given an error response\n", err.response.data);
      } else if (err.request) {
        console.log("Client never received an error response\n", err.request.data);
      } else {
        console.log(err.message);
      }
    });
  }
  // [END dialogflow_v3beta1_webhook_validate_form_parameters_async]

  validateParameter();
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});

main(...process.argv.slice(2));