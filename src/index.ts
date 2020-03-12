
/* IMPORT */

import entities from 'entities/lib/maps/entities.json';

/* ENTITIES DECODE */

const re = /&(?:([a-zA-Z0-9]+)|#([0-9]{1,6})|#[xX]([a-fA-F0-9]{1,6}));/g;

function decode ( str: string ): string {

  return str.replace ( re, ( match: string, $1: string, $2: string, $3: string ) => {
    if ( $1 ) return entities[$1] || match;
    if ( $2 ) return String.fromCodePoint ( parseInt ( $2 ) );
    return String.fromCodePoint ( parseInt ( $3, 16 ) );
  });

}

/* EXPORT */

export default decode;
