import {Iconset} from "@furo/framework/src/iconset.js";

import {FuroBaseIcons} from "./md-baseIcons.js"
import {AvIcons} from "./md-avicons.js"
import {DeviceIcons} from './md-deviceIcons.js';
import {EditorIcons} from './md-editorIcons.js';
import {CommunicationIcons} from './md-communicationIcons.js';
import {HardwareIcons} from './md-hardwareIcons.js';
import {ImageIcons} from './md-imageIcons.js';
import {MapsIcons} from './md-mapsIcons.js';
import {NotificationIcons} from './md-notificationIcons.js';
import {PlacesIcons} from './md-placesIcons.js';
import {SocialIcons} from './md-socialIcons.js';


Iconset.registerIconset("default", FuroBaseIcons);
Iconset.registerIconset("av", AvIcons);
Iconset.registerIconset("communication", CommunicationIcons);
Iconset.registerIconset("device", DeviceIcons);
Iconset.registerIconset("editor", EditorIcons);
Iconset.registerIconset("social", SocialIcons);
Iconset.registerIconset("places", PlacesIcons);
Iconset.registerIconset("notification", NotificationIcons);
Iconset.registerIconset("map", MapsIcons);
Iconset.registerIconset("hardware", HardwareIcons);
Iconset.registerIconset("image", ImageIcons);
