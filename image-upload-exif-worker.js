/**
 * Parses metadata from a file
 *
 * Receives parsing requests with 'parse' event
 * Sends metadata back with 'metadata' event
 */

importScripts('../exif-js/exif.js');
// console.log("WORK STARTED");


/**
 * Parses File's metadata
 * @event parse
 * @param {string} ev.data.action -- 'parse', starts parsing the file
 * @param {File} ev.data.file -- file to be parsed
 * @param {string} ev.data.token --  token to pass back in 'metadata'
 */

/**
 * Sends metadata back
 * @event metadata
 * @param {string} ev.data.action -- 'metadata'
 * @param {string} ev.data.token -- token passed to 'parse'
 * @param {string} ev.data.file  -- file metadata belong to
 * @param {object} ev.data.metadata -- Metadata object
 * @param {object} ev.data.metadata.exif -- Exif metadata object, has thumbnail
 * @param {object} ev.data.metadata.iptc -- Iptc metadata
 * @param {object} ev.data.metadata.xmp -- Xmp metadata
 */

/**
 * @param {MessageEvent} ev -- message
 * @param {Object} ev.data -- message's data
 */
onmessage = function (ev) {

  switch(ev.data.action) {
    /**
     * @event 'parse'
     */
    case 'parse':
      EXIF.getData(ev.data.file, function() {
        postMessage({
          action: 'metadata',
          metadata: {
            exif: ev.data.file.exifdata,
            iptc: ev.data.file.iptcdata,
            xmp: ev.data.file.xmpdata
          },
          token: this.token,
          file: this.file
        });
      }.bind({file: ev.data.file, token: ev.data.token}));
    break;

    default:
      console.warn("unknown message", ev.data);
      break;
  }

};
