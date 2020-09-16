// Copyright 2020 @polkadot/x-ws authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import W3CWebSocket from 'websocket/W3CWebSocket';

const fn = typeof WebSocket === 'undefined'
  ? W3CWebSocket
  : WebSocket;

export default fn;
