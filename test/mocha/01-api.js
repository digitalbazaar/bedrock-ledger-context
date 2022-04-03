/*!
 * Copyright (c) 2017-2022 Digital Bazaar, Inc. All rights reserved.
 */
import {documentLoader} from '@bedrock/jsonld-document-loader';

describe('bedrock-ledger-context', () => {
  it('sets up contexts properly', async () => {
    const testContexts = [
      'json-ld-patch-context',
      'web-ledger-context',
      'ed25519-signature-2020-context',
      'x25519-key-agreement-2020-context',
      '@digitalbazaar/zcap-context',
    ];
    for(const testContext of testContexts) {
      const {contexts} = await import(testContext);
      for(const [contextUrl, context] of contexts) {
        // ensure that context documents are defined
        const result = await documentLoader(contextUrl);
        should.exist(result);
        should.exist(result.document);
        result.document.should.be.an('object');
        result.document.should.eql(context);
        should.exist(result.tag);
        result.tag.should.eql('static');
      }
    }
  });
});
