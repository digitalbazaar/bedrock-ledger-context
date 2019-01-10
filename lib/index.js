/*
 * Copyright (c) 2017-2019 Digital Bazaar, Inc. All rights reserved.
 */
'use strict';

const constants = require('bedrock').config.constants;
const fs = require('fs');
const path = require('path');
const {v1: securityContextV1, v2: securityContextV2} =
  require('security-context');
const jsonldPatchContext = require('json-ld-patch-context');
const webLedgerContext = require('web-ledger-context');

// Web Ledger JSON-LD context URL and local copy
constants.WEB_LEDGER_CONTEXT_V1_URL = 'https://w3id.org/webledger/v1';
constants.CONTEXTS[constants.WEB_LEDGER_CONTEXT_V1_URL] = webLedgerContext;

constants.TEST_CONTEXT_V1_URL = 'https://w3id.org/test/v1';
constants.CONTEXTS[constants.TEST_CONTEXT_V1_URL] = JSON.parse(
  fs.readFileSync(
    path.join(__dirname, '../contexts/test-v1.jsonld'),
    {encoding: 'utf8'}));

constants.SECURITY_CONTEXT_V1_URL = 'https://w3id.org/security/v1';
constants.CONTEXTS[constants.SECURITY_CONTEXT_V1_URL] = securityContextV1;

constants.SECURITY_CONTEXT_V2_URL = 'https://w3id.org/security/v2';
constants.CONTEXTS[constants.SECURITY_CONTEXT_V2_URL] = securityContextV2;

constants.IDENTITY_CONTEXT_V1_URL = 'https://w3id.org/identity/v1';
constants.CONTEXTS[constants.IDENTITY_CONTEXT_V1_URL] = JSON.parse(
  fs.readFileSync(
    path.join(__dirname, '../contexts/identity-v1.jsonld'),
    {encoding: 'utf8'}));

constants.JSON_LD_PATCH_CONTEXT_V1_URL = 'https://w3id.org/json-ld-patch/v1';
constants.CONTEXTS[constants.JSON_LD_PATCH_CONTEXT_V1_URL] = jsonldPatchContext;

constants.SCHEMA_URL = 'https://schema.org/';
constants.CONTEXTS[constants.SCHEMA_URL] = JSON.parse(
  fs.readFileSync(
    path.join(__dirname, '../contexts/schema.jsonld'),
    {encoding: 'utf8'}));
