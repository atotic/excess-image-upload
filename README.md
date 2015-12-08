# excess-image-upload
Utility elements for image uploads.

# status
File pickers, image preview, and exif parsing implemented.
Upload is left as an exercise for the reader.

# design
image upload consists of 3 steps:

1) file pickers:
   - drag'n'drop mixin
   - file picker button
2) display files and metadata
   - parse metadata on worker thread
   - display image from thumbnail, or scaled original image
   - throttle thumbnail creation to prevent memory overflow
   - rotate images
3) upload file
   - ajax calls over the network

# bugs
image-upload-icon:
  fit is wrong on IE, does not support object-fit tag

# TODO
- exif-js instead of home-made parser
- parse latitude/longitude


