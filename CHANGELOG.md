# bedrock-ledger-context ChangeLog

## 25.0.0 - 2024-08-01

### Changed
- **BREAKING**: Update peer deps:
  - `@bedrock/jsonld-document-loader@5.1.0`.
  - `@bedrock/security-context@9`.
- Remove `@bedrock/core` peer dep.
- Update test dependencies.
- Use `addDocuments`.

### Fixed
- Add package `files` field.

## 24.0.0 - 2023-09-19

### Changed
- **BREAKING**: Drop support for Node.js < 18.
- **BREAKING**: Update peer deps:
  - Use `@bedrock/jsonld-document-loader@4`.
  - Use `@bedrock/security-context@8`.

## 23.0.0 - 2022-04-29

### Changed
- **BREAKING**: Update peer deps:
  - `@bedrock/core@6`
  - `@bedrock/jsonld-document-loader@3`
  - `@bedrock/security-context@7`.

## 22.0.0 - 2022-04-03

### Changed
- **BREAKING**: Rename package to `@bedrock/ledger-context`.
- **BREAKING**: Convert to module (ESM).
- **BREAKING**: Remove default export.
- **BREAKING**: Require node 14.x.

### Removed
- **BREAKING**: Remove adding any constants to bedrock config system. If
  constants are needed, import them from `constants` from the underlying
  packages.
- **BREAKING**: Remove test context `https://w3id.org/test/v1`.
- **BREAKING**: Remove schema.org context `https://schema.org/`.

## 21.1.0 - 2022-03-28

### Changed
- Update peer deps:
  - `bedrock@4.5`
  - `bedrock-jsonld-document-loader@1.3`.
- Update internals to use esm style and use `esm.js` to
  transpile to CommonJS.

## 21.0.1 - 2022-02-08

### Fixed
- Use non-deprecated `@digitalbazaar/zcap-context`. This package includes
  the same zcap context as the deprecated package `zcap-context`.

## 21.0.0 - 2022-01-21

### Changed
- **BREAKING**: Set engines.node >=12.0.0.
- **BREAKING**: Use bedrock-security-context@5.

### Added
- Setup test.

## 20.0.1 - 2021-07-21

### Changed
- Fix web-ledger-context@12 in package.json.

## 20.0.0 - 2021-07-21

### Added
- Add zcap-context@1.

### Changed
- **BREAKING**: Use web-ledger-context@12.

## 19.0.0 - 2021-07-21

### Changed
- **BREAKING**: Use web-ledger-context@11.

## 18.1.1 - 2021-07-09

### Fixed
- Make context modules regular dependencies:
  - `ed25519-signature-2020-context@1`
  - `x25519-key-agreement-2020-context@1`

## 18.1.0 - 2021-06-30

### Added
- Add ed25519-signature-2020-context@1.
- Add x25519-key-agreement-2020-context@1.

## 18.0.0 - 2021-03-09

### Changed
- **BREAKING**: Use web-ledger-context@10.

## 17.0.0 - 2021-02-15

### Changed
- **BREAKING**: Use web-ledger-context@9.

## 16.0.0 - 2020-12-11

### Changed
- **BREAKING**: Use web-ledger-context@8.

## 15.0.0 - 2019-12-03

### Changed
- **BREAKING**: Use web-ledger-context@7 and json-ld-patch-context@4.

## 14.0.1 - 2019-11-13

## Changed
- Set peer dependency bedrock-security-context@3.

## 14.0.0 - 2019-11-12

### Changed
- **BREAKING**: Use web-ledger-context@6.

## 13.0.0 - 2019-10-21

### Changed
- **BREAKING**: Refactor to be compatible with bedrock@2 and
  bedrock-jsonld-document-loader@1.
- **BREAKING**: Remove obsolete IDENTITY_CONTEXT_V1_URL constant and context.
- **BREAKING**: Replace security-context dependency with a
  bedrock-security-context dependency.

## 12.0.0 - 2019-05-30

### Changed
- **BREAKING**: Use security-context@3.
- Use json-ld-patch-context@3.
- Use web-ledger-context@5.

## 11.0.0 - 2019-01-10

### Changed
- **BREAKING** Use json-ld-patch-context@2.

## 10.2.0 - 2019-01-10

### Changed
- Use json-ld-patch-context@1.

## 10.1.0 - 2019-01-09

### Changed
- Use security-context@1.

## 10.0.0 - 2019-01-03

### Changed
- **BREAKING** Use web-ledger-context@4.

## 9.0.0 - 2019-01-02

### Changed
- **BREAKING** Update security-v2 context.

## 8.0.0 - 2018-12-21

### Changed
- **BREAKING** Use web-ledger-context@3.

## 7.0.0 - 2018-12-18

### Changed
- **BREAKING** Use web-ledger-context@2.

## 6.0.0 - 2018-12-06

### Changed
- **BREAKING** Use web-ledger-context@1.

## 5.0.0 - 2018-11-06

### Changed
- **BREAKING** Remove Continuity2017RecoveryElector.
- **BREAKING** Add maximumElectorCount.

## 4.0.0 - 2018-11-05

### Changed
- **BREAKING** Add Continuity2017 elector terms.

## 3.0.0 - 2018-10-16

### Changed
- **BREAKING** Remove `@container` from `elector` definition.

## 2.0.0 - 2018-09-19

### Added
- Add ocap terms.

## 1.1.1 - 2018-06-07

### Added
- Add missing `ElectorPool` and `elector` terms.

## 1.1.0 - 2018-06-06

### Added
- Add elector terms.

## 1.0.0 - 2018-04-12

- See git history for changes previous to this release.
