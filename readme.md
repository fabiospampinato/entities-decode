# Entities Decode

Fast function for decoding HTML entities.

## Install

```sh
npm install entities-decode
```

## Usage

```ts
import decode from 'entities-decode';

// Let's decode some HTML entities

decode ( 'foo&amp;&#x3a;bar' ); // => 'foo&:bar'
```

## License

MIT © Fabio Spampinato
