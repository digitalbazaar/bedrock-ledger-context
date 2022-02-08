/*!
 * Copyright (c) 2017-2022 Digital Bazaar, Inc. All rights reserved.
 */
'use strict';

const {documentLoader} = require('bedrock-jsonld-document-loader');

describe('bedrock-ledger-context', () => {
  it('sets up contexts properly', async () => {
    const testContextModules = [
      'json-ld-patch-context',
      'web-ledger-context',
      'ed25519-signature-2020-context',
      'x25519-key-agreement-2020-context',
      '@digitalbazaar/zcap-context',
    ];
    for(const module of testContextModules) {
      const {contexts, constants: contextConstants} = require(module);

      for(const c in contextConstants) {
        if(!c.includes('URL')) {
          continue;
        }
        // ensure that context documents are defined
        const result = await documentLoader(contextConstants[c]);
        should.exist(result);
        should.exist(result.document);
        result.document.should.be.an('object');
        result.document.should.eql(contexts.get(contextConstants[c]));
      }
    }
  });
});
