# openVALIDATION-CLI for npm

[![npm version](https://badge.fury.io/js/openvalidation.svg)](https://badge.fury.io/js/openvalidation)

This package enables you to use openVALIDATION directly from the console.
Just run the following command and you can use the command `openvalidation` to use alle the features of the [openVALIDATION-cli](https://docs.openvalidation.io/openvalidation-cli).

```sh
npm install -g openvalidation
```

You can now compile your openvalidation code inside your console without installing the JAR.

## Example

``` sh
openvalidation -r "IF the Message EQUALS hello THEN Hello World" -s "{Message : \"Text\"}" -c en
```
