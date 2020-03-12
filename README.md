# Entities Decode

Fast function for decoding HTML entities, based on the [entities](https://github.com/fb55/entities) package.

## Install

```sh
npm install --save entities-decode
```

## Usage

```ts
import decode from 'entities-decode';

decode ( '&amp;&#x3a;' ); // => '&:'
```

## License

MIT © Fabio Spampinato
