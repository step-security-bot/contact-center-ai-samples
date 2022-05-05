<!-- 
Copyright 2022 Google LLC

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License. 
-->

# Google Cloud Webhook Sample

[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](LICENSE)
[![GitHub Super-Linter](https://github.com/GoogleCloudPlatform/contact-center-ai-samples/workflows/Lint%20Code%20Base/badge.svg)](https://github.com/marketplace/actions/super-linter)

Welcome to the Google Cloud [Webhook Sample Code](https://github.com/GoogleCloudPlatform/contact-center-ai-samples/new/main/dialogflow-cx/webhook).

## Overview

A sample webhook handler for Dialogflow CX is placed in [main.py](https://github.com/GoogleCloudPlatform/contact-center-ai-samples/blob/main/dialogflow-cx/webhook/main.py).
The entry point of the handler is the `webhook_fcn(requrest)` function. 
To trigger the other functions in the webhook handler, 
such as `echo_webhook`, `basic_webhook`, `validate_form`, or `set_session_param`, 
you need to specific the tag name when enabling the webhook in DialogFlow CX UI panel.
