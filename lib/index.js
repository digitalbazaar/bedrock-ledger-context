/*!
 * Copyright (c) 2017-2024 Digital Bazaar, Inc. All rights reserved.
 */
import {contexts as edContextss} from 'ed25519-signature-2020-context';
import {contexts as jsonldPatchContexts} from 'json-ld-patch-context';
import {contexts as webLedgerContexts} from 'web-ledger-context';
import {contexts as x25519Contexts} from 'x25519-key-agreement-2020-context';
import {contexts as zcapContexts} from '@digitalbazaar/zcap-context';
import '@bedrock/security-context';

import {jsonLdDocumentLoader} from '@bedrock/jsonld-document-loader';

jsonLdDocumentLoader.addDocuments({documents: [
  ...edContextss,
  ...jsonldPatchContexts,
  ...webLedgerContexts,
  ...x25519Contexts,
  ...zcapContexts
]});
