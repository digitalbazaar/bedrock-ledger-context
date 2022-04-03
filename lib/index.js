/*!
 * Copyright (c) 2017-2022 Digital Bazaar, Inc. All rights reserved.
 */
import * as jsonldPatchContext from 'json-ld-patch-context';
import * as webLedgerContext from 'web-ledger-context';
import {jsonLdDocumentLoader} from '@bedrock/jsonld-document-loader';
import edContext from 'ed25519-signature-2020-context';
import x25519Context from 'x25519-key-agreement-2020-context';
import zcapContext from '@digitalbazaar/zcap-context';
import '@bedrock/security-context';

const contextModules = [
  edContext,
  jsonldPatchContext,
  webLedgerContext,
  x25519Context,
  zcapContext
];

for(const {contexts} of contextModules) {
  for(const [contextUrl, context] of contexts) {
    jsonLdDocumentLoader.addStatic(contextUrl, context);
  }
}
