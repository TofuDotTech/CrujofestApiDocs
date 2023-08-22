# Crujofest event-driven API 1.0 documentation

Event-driven architecture implemented with sockets for party features

## Table of Contents

* [Servers](#servers)
  * [production](#production-server)
* [Operations](#operations)
  * [PUB /](#pub--operation)
  * [SUB /](#sub--operation)
  * [PUB /admin](#pub-admin-operation)

## Servers

### `production` Server

* URL: `ws://crujofest.party/`
* Protocol: `wss`



## Operations

### PUB `/` Operation

Client to server events

#### `ws` Channel specific information

| Name | Type | Description | Value | Constraints | Notes |
|---|---|---|---|---|---|
| query | object | - | - | - | **additional properties are allowed** |
| query.auth | object | - | - | - | **additional properties are allowed** |
| query.auth.token | string | - | - | - | - |
| required | - | - | - | - | - |
| required.0 (index) | - | - | `"auth"` | - | - |

Accepts **one of** the following messages:

#### Message `leaveParty`

Leave the room associated to the party and disconnects the socket connection

##### Payload

| Name | Type | Description | Value | Constraints | Notes |
|---|---|---|---|---|---|
| (root) | string | Party code | - | - | - |

> Examples of payload _(generated)_

```json
"string"
```


#### Message `play`

Resume the currently playing song

#### Message `pause`

Pause the currently playing song

#### Message `next`

Play the next song in the queue

#### Message `previous`

Play the previous song in the queue

#### Message `currentSong`

Get current song playing

#### Message extensions

| Name | Type | Description | Value | Constraints | Notes |
|---|---|---|---|---|---|
| x-ack | - | - | - | - | - |
| x-ack.args | object | - | - | - | **additional properties are allowed** |
| x-ack.args.status | number | - | - | - | - |
| x-ack.args.currentSong | object | - | - | - | **additional properties are allowed** |
| x-ack.args.currentSong.success | boolean | - | - | - | - |
| x-ack.args.currentSong.isPlaying | boolean | - | - | - | - |
| x-ack.args.currentSong.album | string | - | - | - | - |
| x-ack.args.currentSong.artwork | array<object> | - | - | - | - |
| x-ack.args.currentSong.artwork.url | string | - | - | - | - |
| x-ack.args.currentSong.artwork.height | number | - | - | - | - |
| x-ack.args.currentSong.artwork.width | number | - | - | - | - |
| x-ack.args.currentSong.artist | string | - | - | - | - |
| x-ack.args.currentSong.explicit | boolean | - | - | - | - |
| x-ack.args.currentSong.track | string | - | - | - | - |
| x-ack.args.currentSong.url | string | - | - | - | - |
| x-ack.args.currentSong.disabledControls | object | - | - | - | **additional properties are allowed** |
| x-ack.args.currentSong.disabledControls.interrupting_playback | boolean | - | - | - | - |
| x-ack.args.currentSong.disabledControls.pausing | boolean | - | - | - | - |
| x-ack.args.currentSong.disabledControls.resuming | boolean | - | - | - | - |
| x-ack.args.currentSong.disabledControls.seeking | boolean | - | - | - | - |
| x-ack.args.currentSong.disabledControls.skipping_next | boolean | - | - | - | - |
| x-ack.args.currentSong.disabledControls.skipping_prev | boolean | - | - | - | - |
| x-ack.args.currentSong.disabledControls.toggling_repeat_context | boolean | - | - | - | - |
| x-ack.args.currentSong.disabledControls.toggling_shuffle | boolean | - | - | - | - |
| x-ack.args.currentSong.disabledControls.toggling_repeat_track | boolean | - | - | - | - |
| x-ack.args.currentSong.disabledControls.transferring_playback | boolean | - | - | - | - |

#### Message `querySong`

Add a song to the queue

##### Payload

| Name | Type | Description | Value | Constraints | Notes |
|---|---|---|---|---|---|
| (root) | string | query | - | - | - |

> Examples of payload _(generated)_

```json
"string"
```


#### Message `getQueue`

Get queue

#### Message extensions

| Name | Type | Description | Value | Constraints | Notes |
|---|---|---|---|---|---|
| x-ack | - | - | - | - | - |
| x-ack.args | object | - | - | - | **additional properties are allowed** |
| x-ack.args.status | number | - | - | - | - |
| x-ack.args.previousQueue | array<object> | - | - | - | - |
| x-ack.args.previousQueue.image | string | - | - | - | - |
| x-ack.args.previousQueue.track | string | - | - | - | - |
| x-ack.args.previousQueue.artist | string | - | - | - | - |
| x-ack.args.previousQueue.duration | number | - | - | - | - |
| x-ack.args.previousQueue.songUrl | string | - | - | - | - |
| x-ack.args.previousQueue.songUri | string | - | - | - | - |
| x-ack.args.previousQueue.album | string | - | - | - | - |
| x-ack.args.nextQueue | array<object> | - | - | - | - |
| x-ack.args.nextQueue.image | string | - | - | - | - |
| x-ack.args.nextQueue.track | string | - | - | - | - |
| x-ack.args.nextQueue.artist | string | - | - | - | - |
| x-ack.args.nextQueue.duration | number | - | - | - | - |
| x-ack.args.nextQueue.songUrl | string | - | - | - | - |
| x-ack.args.nextQueue.songUri | string | - | - | - | - |
| x-ack.args.nextQueue.album | string | - | - | - | - |

#### Message `songChanged`

Notify the server that the currently playing song has changed

##### Payload

| Name | Type | Description | Value | Constraints | Notes |
|---|---|---|---|---|---|
| (root) | object | - | - | - | **additional properties are allowed** |
| success | boolean | - | - | - | - |
| isPlaying | boolean | - | - | - | - |
| album | string | - | - | - | - |
| artwork | array<object> | - | - | - | - |
| artwork.url | string | - | - | - | - |
| artwork.height | number | - | - | - | - |
| artwork.width | number | - | - | - | - |
| artist | string | - | - | - | - |
| explicit | boolean | - | - | - | - |
| track | string | - | - | - | - |
| url | string | - | - | - | - |
| disabledControls | object | - | - | - | **additional properties are allowed** |
| disabledControls.interrupting_playback | boolean | - | - | - | - |
| disabledControls.pausing | boolean | - | - | - | - |
| disabledControls.resuming | boolean | - | - | - | - |
| disabledControls.seeking | boolean | - | - | - | - |
| disabledControls.skipping_next | boolean | - | - | - | - |
| disabledControls.skipping_prev | boolean | - | - | - | - |
| disabledControls.toggling_repeat_context | boolean | - | - | - | - |
| disabledControls.toggling_shuffle | boolean | - | - | - | - |
| disabledControls.toggling_repeat_track | boolean | - | - | - | - |
| disabledControls.transferring_playback | boolean | - | - | - | - |

> Examples of payload _(generated)_

```json
{
  "success": true,
  "isPlaying": true,
  "album": "string",
  "artwork": [
    {
      "url": "string",
      "height": 0,
      "width": 0
    }
  ],
  "artist": "string",
  "explicit": true,
  "track": "string",
  "url": "string",
  "disabledControls": {
    "interrupting_playback": true,
    "pausing": true,
    "resuming": true,
    "seeking": true,
    "skipping_next": true,
    "skipping_prev": true,
    "toggling_repeat_context": true,
    "toggling_shuffle": true,
    "toggling_repeat_track": true,
    "transferring_playback": true
  }
}
```


#### Message `paused`

Notify the server that the currently playing song was paused or resumed

##### Payload

| Name | Type | Description | Value | Constraints | Notes |
|---|---|---|---|---|---|
| (root) | boolean | flag | - | - | - |

> Examples of payload _(generated)_

```json
true
```


#### Message `getUsersList`

Get the party users list

#### Message extensions

| Name | Type | Description | Value | Constraints | Notes |
|---|---|---|---|---|---|
| x-ack | - | - | - | - | - |
| x-ack.args | object | - | - | - | **additional properties are allowed** |
| x-ack.args.status | number | - | - | - | - |
| x-ack.args.usersList | array<object> | - | - | - | - |
| x-ack.args.usersList.username | string | - | - | - | - |
| x-ack.args.usersList.displayName | string | - | - | - | - |
| x-ack.args.usersList.roleId | number | - | - | - | - |
| x-ack.args.usersList.photo | string | - | - | - | - |
| x-ack.args.message | string | - | - | - | - |


### SUB `/` Operation

Server to client events

#### `ws` Channel specific information

| Name | Type | Description | Value | Constraints | Notes |
|---|---|---|---|---|---|
| query | object | - | - | - | **additional properties are allowed** |
| query.auth | object | - | - | - | **additional properties are allowed** |
| query.auth.token | string | - | - | - | - |
| required | - | - | - | - | - |
| required.0 (index) | - | - | `"auth"` | - | - |

Accepts **one of** the following messages:

#### Message `pushSong`

Notify client that a new song was pushed to the queue

##### Payload

| Name | Type | Description | Value | Constraints | Notes |
|---|---|---|---|---|---|
| (root) | object | - | - | - | **additional properties are allowed** |
| image | string | - | - | - | - |
| track | string | - | - | - | - |
| artist | string | - | - | - | - |
| duration | number | - | - | - | - |
| songUrl | string | - | - | - | - |
| songUri | string | - | - | - | - |
| album | string | - | - | - | - |

> Examples of payload _(generated)_

```json
{
  "image": "string",
  "track": "string",
  "artist": "string",
  "duration": 0,
  "songUrl": "string",
  "songUri": "string",
  "album": "string"
}
```


#### Message `changeSong`

Notify client to change currently playing song

##### Payload

| Name | Type | Description | Value | Constraints | Notes |
|---|---|---|---|---|---|
| (root) | oneOf | - | - | - | **additional properties are allowed** |
| 0 (oneOf item) | object | - | - | - | **additional properties are allowed** |
| image | string | - | - | - | - |
| track | string | - | - | - | - |
| artist | string | - | - | - | - |
| duration | number | - | - | - | - |
| songUrl | string | - | - | - | - |
| songUri | string | - | - | - | - |
| album | string | - | - | - | - |
| 1 (oneOf item) | string | value of null | - | - | - |

> Examples of payload _(generated)_

```json
{
  "image": "string",
  "track": "string",
  "artist": "string",
  "duration": 0,
  "songUrl": "string",
  "songUri": "string",
  "album": "string"
}
```


#### Message `changePausedState`

Notify client that the currently playing song was paused or resumed

##### Payload

| Name | Type | Description | Value | Constraints | Notes |
|---|---|---|---|---|---|
| (root) | boolean | flag | - | - | - |

> Examples of payload _(generated)_

```json
true
```


#### Message `addUser`

Add user to party users list

##### Payload

| Name | Type | Description | Value | Constraints | Notes |
|---|---|---|---|---|---|
| (root) | object | - | - | - | **additional properties are allowed** |
| username | string | - | - | - | - |
| displayName | string | - | - | - | - |
| roleId | number | - | - | - | - |
| photo | string | - | - | - | - |

> Examples of payload _(generated)_

```json
{
  "username": "string",
  "displayName": "string",
  "roleId": 0,
  "photo": "string"
}
```


#### Message `deleteUser`

Delete user from party users list

##### Payload

| Name | Type | Description | Value | Constraints | Notes |
|---|---|---|---|---|---|
| (root) | string | username | - | - | - |

> Examples of payload _(generated)_

```json
"string"
```


#### Message `deleteParty`

Notify client that the party was deleted


### PUB `/admin` Operation

Client to server events for serverless function communication with socket server

#### `ws` Channel specific information

| Name | Type | Description | Value | Constraints | Notes |
|---|---|---|---|---|---|
| query | object | - | - | - | **additional properties are allowed** |
| query.auth | object | - | - | - | **additional properties are allowed** |
| query.auth.token | string | - | - | - | - |
| required | - | - | - | - | - |
| required.0 (index) | - | - | `"auth"` | - | - |

Accepts **one of** the following messages:

#### Message `addUser`

Add user to party users list

##### Payload

| Name | Type | Description | Value | Constraints | Notes |
|---|---|---|---|---|---|
| (root) | string | partyCode | - | - | - |

> Examples of payload _(generated)_

```json
"string"
```


#### Message `deleteUser`

Delete user from users list

##### Payload

| Name | Type | Description | Value | Constraints | Notes |
|---|---|---|---|---|---|
| (root) | array<any> | - | - | - | - |

> Examples of payload _(generated)_

```json
[
  "string",
  "string"
]
```


#### Message `deleteParty`

Delete party

##### Payload

| Name | Type | Description | Value | Constraints | Notes |
|---|---|---|---|---|---|
| (root) | string | partyCode | - | - | - |

> Examples of payload _(generated)_

```json
"string"
```



