/**
 * Parses exif data from a file
 * Sends parsed event when complete
 *
 */
// postMessage("I\'m working before postMessage");

importScripts('../exif-js/exif.js');

console.log("WORK STARTED");
onmessage = function (ev) {
  switch(ev.data.action) {
    case 'parse':
      EXIF.getData(ev.data.file, function() {
        postMessage({
          action: 'parsed',
          metadata: {
            exif: ev.data.file.exifdata,
            iptc: ev.data.file.iptcdata,
            xmpdata: ev.data.file.xmpdata
          },
          token: this.token,
          file: this.file });
      }.bind({file: ev.data.file, token: ev.data.token}));
      break;
    default:
      console.warn("unknown message", ev.data);
  }
};
