module.exports = (function() {
var __MODS__ = {};
var __DEFINE__ = function(modId, func, req) { var m = { exports: {}, _tempexports: {} }; __MODS__[modId] = { status: 0, func: func, req: req, m: m }; };
var __REQUIRE__ = function(modId, source) { if(!__MODS__[modId]) return require(source); if(!__MODS__[modId].status) { var m = __MODS__[modId].m; m._exports = m._tempexports; var desp = Object.getOwnPropertyDescriptor(m, "exports"); if (desp && desp.configurable) Object.defineProperty(m, "exports", { set: function (val) { if(typeof val === "object" && val !== m._exports) { m._exports.__proto__ = val.__proto__; Object.keys(val).forEach(function (k) { m._exports[k] = val[k]; }); } m._tempexports = val }, get: function () { return m._tempexports; } }); __MODS__[modId].status = 1; __MODS__[modId].func(__MODS__[modId].req, m, m.exports); } return __MODS__[modId].m.exports; };
var __REQUIRE_WILDCARD__ = function(obj) { if(obj && obj.__esModule) { return obj; } else { var newObj = {}; if(obj != null) { for(var k in obj) { if (Object.prototype.hasOwnProperty.call(obj, k)) newObj[k] = obj[k]; } } newObj.default = obj; return newObj; } };
var __REQUIRE_DEFAULT__ = function(obj) { return obj && obj.__esModule ? obj.default : obj; };
__DEFINE__(1646880735416, function(require, module, exports) {

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.types = exports.setConcurrency = exports.disableTypes = exports.disableFS = exports.imageSize = void 0;
const fs = require("fs");
const path = require("path");
const queue_1 = require("queue");
const types_1 = require("./types");
const detector_1 = require("./detector");
// Maximum buffer size, with a default of 512 kilobytes.
// TO-DO: make this adaptive based on the initial signature of the image
const MaxBufferSize = 512 * 1024;
// This queue is for async `fs` operations, to avoid reaching file-descriptor limits
const queue = new queue_1.default({ concurrency: 100, autostart: true });
const globalOptions = {
    disabledFS: false,
    disabledTypes: []
};
/**
 * Return size information based on a buffer
 *
 * @param {Buffer} buffer
 * @param {String} filepath
 * @returns {Object}
 */
function lookup(buffer, filepath) {
    // detect the file type.. don't rely on the extension
    const type = (0, detector_1.detector)(buffer);
    if (typeof type !== 'undefined') {
        if (globalOptions.disabledTypes.indexOf(type) > -1) {
            throw new TypeError('disabled file type: ' + type);
        }
        // find an appropriate handler for this file type
        if (type in types_1.typeHandlers) {
            const size = types_1.typeHandlers[type].calculate(buffer, filepath);
            if (size !== undefined) {
                size.type = type;
                return size;
            }
        }
    }
    // throw up, if we don't understand the file
    throw new TypeError('unsupported file type: ' + type + ' (file: ' + filepath + ')');
}
/**
 * Reads a file into a buffer.
 * @param {String} filepath
 * @returns {Promise<Buffer>}
 */
function asyncFileToBuffer(filepath) {
    return __awaiter(this, void 0, void 0, function* () {
        const handle = yield fs.promises.open(filepath, 'r');
        try {
            const { size } = yield handle.stat();
            if (size <= 0) {
                throw new Error('Empty file');
            }
            const bufferSize = Math.min(size, MaxBufferSize);
            const buffer = Buffer.alloc(bufferSize);
            yield handle.read(buffer, 0, bufferSize, 0);
            return buffer;
        }
        finally {
            yield handle.close();
        }
    });
}
/**
 * Synchronously reads a file into a buffer, blocking the nodejs process.
 *
 * @param {String} filepath
 * @returns {Buffer}
 */
function syncFileToBuffer(filepath) {
    // read from the file, synchronously
    const descriptor = fs.openSync(filepath, 'r');
    try {
        const { size } = fs.fstatSync(descriptor);
        if (size <= 0) {
            throw new Error('Empty file');
        }
        const bufferSize = Math.min(size, MaxBufferSize);
        const buffer = Buffer.alloc(bufferSize);
        fs.readSync(descriptor, buffer, 0, bufferSize, 0);
        return buffer;
    }
    finally {
        fs.closeSync(descriptor);
    }
}
// eslint-disable-next-line @typescript-eslint/no-use-before-define
module.exports = exports = imageSize; // backwards compatibility
exports.default = imageSize;
/**
 * @param {Buffer|string} input - buffer or relative/absolute path of the image file
 * @param {Function=} [callback] - optional function for async detection
 */
function imageSize(input, callback) {
    // Handle buffer input
    if (Buffer.isBuffer(input)) {
        return lookup(input);
    }
    // input should be a string at this point
    if (typeof input !== 'string' || globalOptions.disabledFS) {
        throw new TypeError('invalid invocation. input should be a Buffer');
    }
    // resolve the file path
    const filepath = path.resolve(input);
    if (typeof callback === 'function') {
        queue.push(() => asyncFileToBuffer(filepath)
            .then((buffer) => process.nextTick(callback, null, lookup(buffer, filepath)))
            .catch(callback));
    }
    else {
        const buffer = syncFileToBuffer(filepath);
        return lookup(buffer, filepath);
    }
}
exports.imageSize = imageSize;
const disableFS = (v) => { globalOptions.disabledFS = v; };
exports.disableFS = disableFS;
const disableTypes = (types) => { globalOptions.disabledTypes = types; };
exports.disableTypes = disableTypes;
const setConcurrency = (c) => { queue.concurrency = c; };
exports.setConcurrency = setConcurrency;
exports.types = Object.keys(types_1.typeHandlers);

}, function(modId) {var map = {"./types":1646880735417,"./detector":1646880735435}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1646880735417, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.typeHandlers = void 0;
// load all available handlers explicitely for browserify support
const bmp_1 = require("./types/bmp");
const cur_1 = require("./types/cur");
const dds_1 = require("./types/dds");
const gif_1 = require("./types/gif");
const icns_1 = require("./types/icns");
const ico_1 = require("./types/ico");
const j2c_1 = require("./types/j2c");
const jp2_1 = require("./types/jp2");
const jpg_1 = require("./types/jpg");
const ktx_1 = require("./types/ktx");
const png_1 = require("./types/png");
const pnm_1 = require("./types/pnm");
const psd_1 = require("./types/psd");
const svg_1 = require("./types/svg");
const tiff_1 = require("./types/tiff");
const webp_1 = require("./types/webp");
exports.typeHandlers = {
    bmp: bmp_1.BMP,
    cur: cur_1.CUR,
    dds: dds_1.DDS,
    gif: gif_1.GIF,
    icns: icns_1.ICNS,
    ico: ico_1.ICO,
    j2c: j2c_1.J2C,
    jp2: jp2_1.JP2,
    jpg: jpg_1.JPG,
    ktx: ktx_1.KTX,
    png: png_1.PNG,
    pnm: pnm_1.PNM,
    psd: psd_1.PSD,
    svg: svg_1.SVG,
    tiff: tiff_1.TIFF,
    webp: webp_1.WEBP,
};

}, function(modId) { var map = {"./types/bmp":1646880735418,"./types/cur":1646880735419,"./types/dds":1646880735421,"./types/gif":1646880735422,"./types/icns":1646880735423,"./types/ico":1646880735420,"./types/j2c":1646880735424,"./types/jp2":1646880735425,"./types/jpg":1646880735426,"./types/ktx":1646880735428,"./types/png":1646880735429,"./types/pnm":1646880735430,"./types/psd":1646880735431,"./types/svg":1646880735432,"./types/tiff":1646880735433,"./types/webp":1646880735434}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1646880735418, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.BMP = void 0;
exports.BMP = {
    validate(buffer) {
        return ('BM' === buffer.toString('ascii', 0, 2));
    },
    calculate(buffer) {
        return {
            height: Math.abs(buffer.readInt32LE(22)),
            width: buffer.readUInt32LE(18)
        };
    }
};

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1646880735419, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.CUR = void 0;
const ico_1 = require("./ico");
const TYPE_CURSOR = 2;
exports.CUR = {
    validate(buffer) {
        if (buffer.readUInt16LE(0) !== 0) {
            return false;
        }
        return buffer.readUInt16LE(2) === TYPE_CURSOR;
    },
    calculate(buffer) {
        return ico_1.ICO.calculate(buffer);
    }
};

}, function(modId) { var map = {"./ico":1646880735420}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1646880735420, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.ICO = void 0;
const TYPE_ICON = 1;
/**
 * ICON Header
 *
 * | Offset | Size | Purpose |
 * | 0	    | 2    | Reserved. Must always be 0.  |
 * | 2      | 2    | Image type: 1 for icon (.ICO) image, 2 for cursor (.CUR) image. Other values are invalid. |
 * | 4      | 2    | Number of images in the file. |
 *
 */
const SIZE_HEADER = 2 + 2 + 2; // 6
/**
 * Image Entry
 *
 * | Offset | Size | Purpose |
 * | 0	    | 1    | Image width in pixels. Can be any number between 0 and 255. Value 0 means width is 256 pixels. |
 * | 1      | 1    | Image height in pixels. Can be any number between 0 and 255. Value 0 means height is 256 pixels. |
 * | 2      | 1    | Number of colors in the color palette. Should be 0 if the image does not use a color palette. |
 * | 3      | 1    | Reserved. Should be 0. |
 * | 4      | 2    | ICO format: Color planes. Should be 0 or 1. |
 * |        |      | CUR format: The horizontal coordinates of the hotspot in number of pixels from the left. |
 * | 6      | 2    | ICO format: Bits per pixel. |
 * |        |      | CUR format: The vertical coordinates of the hotspot in number of pixels from the top. |
 * | 8      | 4    | The size of the image's data in bytes |
 * | 12     | 4    | The offset of BMP or PNG data from the beginning of the ICO/CUR file |
 *
 */
const SIZE_IMAGE_ENTRY = 1 + 1 + 1 + 1 + 2 + 2 + 4 + 4; // 16
function getSizeFromOffset(buffer, offset) {
    const value = buffer.readUInt8(offset);
    return value === 0 ? 256 : value;
}
function getImageSize(buffer, imageIndex) {
    const offset = SIZE_HEADER + (imageIndex * SIZE_IMAGE_ENTRY);
    return {
        height: getSizeFromOffset(buffer, offset + 1),
        width: getSizeFromOffset(buffer, offset)
    };
}
exports.ICO = {
    validate(buffer) {
        if (buffer.readUInt16LE(0) !== 0) {
            return false;
        }
        return buffer.readUInt16LE(2) === TYPE_ICON;
    },
    calculate(buffer) {
        const nbImages = buffer.readUInt16LE(4);
        const imageSize = getImageSize(buffer, 0);
        if (nbImages === 1) {
            return imageSize;
        }
        const imgs = [imageSize];
        for (let imageIndex = 1; imageIndex < nbImages; imageIndex += 1) {
            imgs.push(getImageSize(buffer, imageIndex));
        }
        const result = {
            height: imageSize.height,
            images: imgs,
            width: imageSize.width
        };
        return result;
    }
};

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1646880735421, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.DDS = void 0;
exports.DDS = {
    validate(buffer) {
        return buffer.readUInt32LE(0) === 0x20534444;
    },
    calculate(buffer) {
        return {
            height: buffer.readUInt32LE(12),
            width: buffer.readUInt32LE(16)
        };
    }
};

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1646880735422, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.GIF = void 0;
const gifRegexp = /^GIF8[79]a/;
exports.GIF = {
    validate(buffer) {
        const signature = buffer.toString('ascii', 0, 6);
        return (gifRegexp.test(signature));
    },
    calculate(buffer) {
        return {
            height: buffer.readUInt16LE(8),
            width: buffer.readUInt16LE(6)
        };
    }
};

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1646880735423, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.ICNS = void 0;
/**
 * ICNS Header
 *
 * | Offset | Size | Purpose                                                |
 * | 0	    | 4    | Magic literal, must be "icns" (0x69, 0x63, 0x6e, 0x73) |
 * | 4      | 4    | Length of file, in bytes, msb first.                   |
 *
 */
const SIZE_HEADER = 4 + 4; // 8
const FILE_LENGTH_OFFSET = 4; // MSB => BIG ENDIAN
/**
 * Image Entry
 *
 * | Offset | Size | Purpose                                                          |
 * | 0	    | 4    | Icon type, see OSType below.                                     |
 * | 4      | 4    | Length of data, in bytes (including type and length), msb first. |
 * | 8      | n    | Icon data                                                        |
 */
const ENTRY_LENGTH_OFFSET = 4; // MSB => BIG ENDIAN
const ICON_TYPE_SIZE = {
    ICON: 32,
    'ICN#': 32,
    // m => 16 x 16
    'icm#': 16,
    icm4: 16,
    icm8: 16,
    // s => 16 x 16
    'ics#': 16,
    ics4: 16,
    ics8: 16,
    is32: 16,
    s8mk: 16,
    icp4: 16,
    // l => 32 x 32
    icl4: 32,
    icl8: 32,
    il32: 32,
    l8mk: 32,
    icp5: 32,
    ic11: 32,
    // h => 48 x 48
    ich4: 48,
    ich8: 48,
    ih32: 48,
    h8mk: 48,
    // . => 64 x 64
    icp6: 64,
    ic12: 32,
    // t => 128 x 128
    it32: 128,
    t8mk: 128,
    ic07: 128,
    // . => 256 x 256
    ic08: 256,
    ic13: 256,
    // . => 512 x 512
    ic09: 512,
    ic14: 512,
    // . => 1024 x 1024
    ic10: 1024,
};
function readImageHeader(buffer, imageOffset) {
    const imageLengthOffset = imageOffset + ENTRY_LENGTH_OFFSET;
    return [
        buffer.toString('ascii', imageOffset, imageLengthOffset),
        buffer.readUInt32BE(imageLengthOffset)
    ];
}
function getImageSize(type) {
    const size = ICON_TYPE_SIZE[type];
    return { width: size, height: size, type };
}
exports.ICNS = {
    validate(buffer) {
        return ('icns' === buffer.toString('ascii', 0, 4));
    },
    calculate(buffer) {
        const bufferLength = buffer.length;
        const fileLength = buffer.readUInt32BE(FILE_LENGTH_OFFSET);
        let imageOffset = SIZE_HEADER;
        let imageHeader = readImageHeader(buffer, imageOffset);
        let imageSize = getImageSize(imageHeader[0]);
        imageOffset += imageHeader[1];
        if (imageOffset === fileLength) {
            return imageSize;
        }
        const result = {
            height: imageSize.height,
            images: [imageSize],
            width: imageSize.width
        };
        while (imageOffset < fileLength && imageOffset < bufferLength) {
            imageHeader = readImageHeader(buffer, imageOffset);
            imageSize = getImageSize(imageHeader[0]);
            imageOffset += imageHeader[1];
            result.images.push(imageSize);
        }
        return result;
    }
};

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1646880735424, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.J2C = void 0;
exports.J2C = {
    validate(buffer) {
        // TODO: this doesn't seem right. SIZ marker doesn't have to be right after the SOC
        return buffer.toString('hex', 0, 4) === 'ff4fff51';
    },
    calculate(buffer) {
        return {
            height: buffer.readUInt32BE(12),
            width: buffer.readUInt32BE(8),
        };
    }
};

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1646880735425, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.JP2 = void 0;
const BoxTypes = {
    ftyp: '66747970',
    ihdr: '69686472',
    jp2h: '6a703268',
    jp__: '6a502020',
    rreq: '72726571',
    xml_: '786d6c20'
};
const calculateRREQLength = (box) => {
    const unit = box.readUInt8(0);
    let offset = 1 + (2 * unit);
    const numStdFlags = box.readUInt16BE(offset);
    const flagsLength = numStdFlags * (2 + unit);
    offset = offset + 2 + flagsLength;
    const numVendorFeatures = box.readUInt16BE(offset);
    const featuresLength = numVendorFeatures * (16 + unit);
    return offset + 2 + featuresLength;
};
const parseIHDR = (box) => {
    return {
        height: box.readUInt32BE(4),
        width: box.readUInt32BE(8),
    };
};
exports.JP2 = {
    validate(buffer) {
        const signature = buffer.toString('hex', 4, 8);
        const signatureLength = buffer.readUInt32BE(0);
        if (signature !== BoxTypes.jp__ || signatureLength < 1) {
            return false;
        }
        const ftypeBoxStart = signatureLength + 4;
        const ftypBoxLength = buffer.readUInt32BE(signatureLength);
        const ftypBox = buffer.slice(ftypeBoxStart, ftypeBoxStart + ftypBoxLength);
        return ftypBox.toString('hex', 0, 4) === BoxTypes.ftyp;
    },
    calculate(buffer) {
        const signatureLength = buffer.readUInt32BE(0);
        const ftypBoxLength = buffer.readUInt16BE(signatureLength + 2);
        let offset = signatureLength + 4 + ftypBoxLength;
        const nextBoxType = buffer.toString('hex', offset, offset + 4);
        switch (nextBoxType) {
            case BoxTypes.rreq:
                // WHAT ARE THESE 4 BYTES?????
                // eslint-disable-next-line no-case-declarations
                const MAGIC = 4;
                offset = offset + 4 + MAGIC + calculateRREQLength(buffer.slice(offset + 4));
                return parseIHDR(buffer.slice(offset + 8, offset + 24));
            case BoxTypes.jp2h:
                return parseIHDR(buffer.slice(offset + 8, offset + 24));
            default:
                throw new TypeError('Unsupported header found: ' + buffer.toString('ascii', offset, offset + 4));
        }
    }
};

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1646880735426, function(require, module, exports) {

// NOTE: we only support baseline and progressive JPGs here
// due to the structure of the loader class, we only get a buffer
// with a maximum size of 4096 bytes. so if the SOF marker is outside
// if this range we can't detect the file size correctly.
Object.defineProperty(exports, "__esModule", { value: true });
exports.JPG = void 0;
const readUInt_1 = require("../readUInt");
const EXIF_MARKER = '45786966';
const APP1_DATA_SIZE_BYTES = 2;
const EXIF_HEADER_BYTES = 6;
const TIFF_BYTE_ALIGN_BYTES = 2;
const BIG_ENDIAN_BYTE_ALIGN = '4d4d';
const LITTLE_ENDIAN_BYTE_ALIGN = '4949';
// Each entry is exactly 12 bytes
const IDF_ENTRY_BYTES = 12;
const NUM_DIRECTORY_ENTRIES_BYTES = 2;
function isEXIF(buffer) {
    return (buffer.toString('hex', 2, 6) === EXIF_MARKER);
}
function extractSize(buffer, index) {
    return {
        height: buffer.readUInt16BE(index),
        width: buffer.readUInt16BE(index + 2)
    };
}
function extractOrientation(exifBlock, isBigEndian) {
    // TODO: assert that this contains 0x002A
    // let STATIC_MOTOROLA_TIFF_HEADER_BYTES = 2
    // let TIFF_IMAGE_FILE_DIRECTORY_BYTES = 4
    // TODO: derive from TIFF_IMAGE_FILE_DIRECTORY_BYTES
    const idfOffset = 8;
    // IDF osset works from right after the header bytes
    // (so the offset includes the tiff byte align)
    const offset = EXIF_HEADER_BYTES + idfOffset;
    const idfDirectoryEntries = (0, readUInt_1.readUInt)(exifBlock, 16, offset, isBigEndian);
    for (let directoryEntryNumber = 0; directoryEntryNumber < idfDirectoryEntries; directoryEntryNumber++) {
        const start = offset + NUM_DIRECTORY_ENTRIES_BYTES + (directoryEntryNumber * IDF_ENTRY_BYTES);
        const end = start + IDF_ENTRY_BYTES;
        // Skip on corrupt EXIF blocks
        if (start > exifBlock.length) {
            return;
        }
        const block = exifBlock.slice(start, end);
        const tagNumber = (0, readUInt_1.readUInt)(block, 16, 0, isBigEndian);
        // 0x0112 (decimal: 274) is the `orientation` tag ID
        if (tagNumber === 274) {
            const dataFormat = (0, readUInt_1.readUInt)(block, 16, 2, isBigEndian);
            if (dataFormat !== 3) {
                return;
            }
            // unsinged int has 2 bytes per component
            // if there would more than 4 bytes in total it's a pointer
            const numberOfComponents = (0, readUInt_1.readUInt)(block, 32, 4, isBigEndian);
            if (numberOfComponents !== 1) {
                return;
            }
            return (0, readUInt_1.readUInt)(block, 16, 8, isBigEndian);
        }
    }
}
function validateExifBlock(buffer, index) {
    // Skip APP1 Data Size
    const exifBlock = buffer.slice(APP1_DATA_SIZE_BYTES, index);
    // Consider byte alignment
    const byteAlign = exifBlock.toString('hex', EXIF_HEADER_BYTES, EXIF_HEADER_BYTES + TIFF_BYTE_ALIGN_BYTES);
    // Ignore Empty EXIF. Validate byte alignment
    const isBigEndian = byteAlign === BIG_ENDIAN_BYTE_ALIGN;
    const isLittleEndian = byteAlign === LITTLE_ENDIAN_BYTE_ALIGN;
    if (isBigEndian || isLittleEndian) {
        return extractOrientation(exifBlock, isBigEndian);
    }
}
function validateBuffer(buffer, index) {
    // index should be within buffer limits
    if (index > buffer.length) {
        throw new TypeError('Corrupt JPG, exceeded buffer limits');
    }
    // Every JPEG block must begin with a 0xFF
    if (buffer[index] !== 0xFF) {
        throw new TypeError('Invalid JPG, marker table corrupted');
    }
}
exports.JPG = {
    validate(buffer) {
        const SOIMarker = buffer.toString('hex', 0, 2);
        return ('ffd8' === SOIMarker);
    },
    calculate(buffer) {
        // Skip 4 chars, they are for signature
        buffer = buffer.slice(4);
        let orientation;
        let next;
        while (buffer.length) {
            // read length of the next block
            const i = buffer.readUInt16BE(0);
            if (isEXIF(buffer)) {
                orientation = validateExifBlock(buffer, i);
            }
            // ensure correct format
            validateBuffer(buffer, i);
            // 0xFFC0 is baseline standard(SOF)
            // 0xFFC1 is baseline optimized(SOF)
            // 0xFFC2 is progressive(SOF2)
            next = buffer[i + 1];
            if (next === 0xC0 || next === 0xC1 || next === 0xC2) {
                const size = extractSize(buffer, i + 5);
                // TODO: is orientation=0 a valid answer here?
                if (!orientation) {
                    return size;
                }
                return {
                    height: size.height,
                    orientation,
                    width: size.width
                };
            }
            // move to the next block
            buffer = buffer.slice(i + 2);
        }
        throw new TypeError('Invalid JPG, no size found');
    }
};

}, function(modId) { var map = {"../readUInt":1646880735427}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1646880735427, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.readUInt = void 0;
// Abstract reading multi-byte unsigned integers
function readUInt(buffer, bits, offset, isBigEndian) {
    offset = offset || 0;
    const endian = isBigEndian ? 'BE' : 'LE';
    const methodName = ('readUInt' + bits + endian);
    return buffer[methodName].call(buffer, offset);
}
exports.readUInt = readUInt;

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1646880735428, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.KTX = void 0;
const SIGNATURE = 'KTX 11';
exports.KTX = {
    validate(buffer) {
        return SIGNATURE === buffer.toString('ascii', 1, 7);
    },
    calculate(buffer) {
        return {
            height: buffer.readUInt32LE(40),
            width: buffer.readUInt32LE(36),
        };
    }
};

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1646880735429, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.PNG = void 0;
const pngSignature = 'PNG\r\n\x1a\n';
const pngImageHeaderChunkName = 'IHDR';
// Used to detect "fried" png's: http://www.jongware.com/pngdefry.html
const pngFriedChunkName = 'CgBI';
exports.PNG = {
    validate(buffer) {
        if (pngSignature === buffer.toString('ascii', 1, 8)) {
            let chunkName = buffer.toString('ascii', 12, 16);
            if (chunkName === pngFriedChunkName) {
                chunkName = buffer.toString('ascii', 28, 32);
            }
            if (chunkName !== pngImageHeaderChunkName) {
                throw new TypeError('Invalid PNG');
            }
            return true;
        }
        return false;
    },
    calculate(buffer) {
        if (buffer.toString('ascii', 12, 16) === pngFriedChunkName) {
            return {
                height: buffer.readUInt32BE(36),
                width: buffer.readUInt32BE(32)
            };
        }
        return {
            height: buffer.readUInt32BE(20),
            width: buffer.readUInt32BE(16)
        };
    }
};

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1646880735430, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.PNM = void 0;
const PNMTypes = {
    P1: 'pbm/ascii',
    P2: 'pgm/ascii',
    P3: 'ppm/ascii',
    P4: 'pbm',
    P5: 'pgm',
    P6: 'ppm',
    P7: 'pam',
    PF: 'pfm'
};
const Signatures = Object.keys(PNMTypes);
const handlers = {
    default: (lines) => {
        let dimensions = [];
        while (lines.length > 0) {
            const line = lines.shift();
            if (line[0] === '#') {
                continue;
            }
            dimensions = line.split(' ');
            break;
        }
        if (dimensions.length === 2) {
            return {
                height: parseInt(dimensions[1], 10),
                width: parseInt(dimensions[0], 10),
            };
        }
        else {
            throw new TypeError('Invalid PNM');
        }
    },
    pam: (lines) => {
        const size = {};
        while (lines.length > 0) {
            const line = lines.shift();
            if (line.length > 16 || line.charCodeAt(0) > 128) {
                continue;
            }
            const [key, value] = line.split(' ');
            if (key && value) {
                size[key.toLowerCase()] = parseInt(value, 10);
            }
            if (size.height && size.width) {
                break;
            }
        }
        if (size.height && size.width) {
            return {
                height: size.height,
                width: size.width
            };
        }
        else {
            throw new TypeError('Invalid PAM');
        }
    }
};
exports.PNM = {
    validate(buffer) {
        const signature = buffer.toString('ascii', 0, 2);
        return Signatures.includes(signature);
    },
    calculate(buffer) {
        const signature = buffer.toString('ascii', 0, 2);
        const type = PNMTypes[signature];
        // TODO: this probably generates garbage. move to a stream based parser
        const lines = buffer.toString('ascii', 3).split(/[\r\n]+/);
        const handler = handlers[type] || handlers.default;
        return handler(lines);
    }
};

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1646880735431, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.PSD = void 0;
exports.PSD = {
    validate(buffer) {
        return ('8BPS' === buffer.toString('ascii', 0, 4));
    },
    calculate(buffer) {
        return {
            height: buffer.readUInt32BE(14),
            width: buffer.readUInt32BE(18)
        };
    }
};

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1646880735432, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.SVG = void 0;
const svgReg = /<svg\s([^>"']|"[^"]*"|'[^']*')*>/;
const extractorRegExps = {
    height: /\sheight=(['"])([^%]+?)\1/,
    root: svgReg,
    viewbox: /\sviewBox=(['"])(.+?)\1/i,
    width: /\swidth=(['"])([^%]+?)\1/,
};
const INCH_CM = 2.54;
const units = {
    in: 96,
    cm: 96 / INCH_CM,
    em: 16,
    ex: 8,
    m: 96 / INCH_CM * 100,
    mm: 96 / INCH_CM / 10,
    pc: 96 / 72 / 12,
    pt: 96 / 72,
    px: 1
};
const unitsReg = new RegExp(`^([0-9.]+(?:e\\d+)?)(${Object.keys(units).join('|')})?$`);
function parseLength(len) {
    const m = unitsReg.exec(len);
    if (!m) {
        return undefined;
    }
    return Math.round(Number(m[1]) * (units[m[2]] || 1));
}
function parseViewbox(viewbox) {
    const bounds = viewbox.split(' ');
    return {
        height: parseLength(bounds[3]),
        width: parseLength(bounds[2])
    };
}
function parseAttributes(root) {
    const width = root.match(extractorRegExps.width);
    const height = root.match(extractorRegExps.height);
    const viewbox = root.match(extractorRegExps.viewbox);
    return {
        height: height && parseLength(height[2]),
        viewbox: viewbox && parseViewbox(viewbox[2]),
        width: width && parseLength(width[2]),
    };
}
function calculateByDimensions(attrs) {
    return {
        height: attrs.height,
        width: attrs.width,
    };
}
function calculateByViewbox(attrs, viewbox) {
    const ratio = viewbox.width / viewbox.height;
    if (attrs.width) {
        return {
            height: Math.floor(attrs.width / ratio),
            width: attrs.width,
        };
    }
    if (attrs.height) {
        return {
            height: attrs.height,
            width: Math.floor(attrs.height * ratio),
        };
    }
    return {
        height: viewbox.height,
        width: viewbox.width,
    };
}
exports.SVG = {
    validate(buffer) {
        const str = String(buffer);
        return svgReg.test(str);
    },
    calculate(buffer) {
        const root = buffer.toString('utf8').match(extractorRegExps.root);
        if (root) {
            const attrs = parseAttributes(root[0]);
            if (attrs.width && attrs.height) {
                return calculateByDimensions(attrs);
            }
            if (attrs.viewbox) {
                return calculateByViewbox(attrs, attrs.viewbox);
            }
        }
        throw new TypeError('Invalid SVG');
    }
};

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1646880735433, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.TIFF = void 0;
// based on http://www.compix.com/fileformattif.htm
// TO-DO: support big-endian as well
const fs = require("fs");
const readUInt_1 = require("../readUInt");
// Read IFD (image-file-directory) into a buffer
function readIFD(buffer, filepath, isBigEndian) {
    const ifdOffset = (0, readUInt_1.readUInt)(buffer, 32, 4, isBigEndian);
    // read only till the end of the file
    let bufferSize = 1024;
    const fileSize = fs.statSync(filepath).size;
    if (ifdOffset + bufferSize > fileSize) {
        bufferSize = fileSize - ifdOffset - 10;
    }
    // populate the buffer
    const endBuffer = Buffer.alloc(bufferSize);
    const descriptor = fs.openSync(filepath, 'r');
    fs.readSync(descriptor, endBuffer, 0, bufferSize, ifdOffset);
    fs.closeSync(descriptor);
    return endBuffer.slice(2);
}
// TIFF values seem to be messed up on Big-Endian, this helps
function readValue(buffer, isBigEndian) {
    const low = (0, readUInt_1.readUInt)(buffer, 16, 8, isBigEndian);
    const high = (0, readUInt_1.readUInt)(buffer, 16, 10, isBigEndian);
    return (high << 16) + low;
}
// move to the next tag
function nextTag(buffer) {
    if (buffer.length > 24) {
        return buffer.slice(12);
    }
}
// Extract IFD tags from TIFF metadata
function extractTags(buffer, isBigEndian) {
    const tags = {};
    let temp = buffer;
    while (temp && temp.length) {
        const code = (0, readUInt_1.readUInt)(temp, 16, 0, isBigEndian);
        const type = (0, readUInt_1.readUInt)(temp, 16, 2, isBigEndian);
        const length = (0, readUInt_1.readUInt)(temp, 32, 4, isBigEndian);
        // 0 means end of IFD
        if (code === 0) {
            break;
        }
        else {
            // 256 is width, 257 is height
            // if (code === 256 || code === 257) {
            if (length === 1 && (type === 3 || type === 4)) {
                tags[code] = readValue(temp, isBigEndian);
            }
            // move to the next tag
            temp = nextTag(temp);
        }
    }
    return tags;
}
// Test if the TIFF is Big Endian or Little Endian
function determineEndianness(buffer) {
    const signature = buffer.toString('ascii', 0, 2);
    if ('II' === signature) {
        return 'LE';
    }
    else if ('MM' === signature) {
        return 'BE';
    }
}
const signatures = [
    // '492049', // currently not supported
    '49492a00',
    '4d4d002a', // Big Endian
    // '4d4d002a', // BigTIFF > 4GB. currently not supported
];
exports.TIFF = {
    validate(buffer) {
        return signatures.includes(buffer.toString('hex', 0, 4));
    },
    calculate(buffer, filepath) {
        if (!filepath) {
            throw new TypeError('Tiff doesn\'t support buffer');
        }
        // Determine BE/LE
        const isBigEndian = determineEndianness(buffer) === 'BE';
        // read the IFD
        const ifdBuffer = readIFD(buffer, filepath, isBigEndian);
        // extract the tags from the IFD
        const tags = extractTags(ifdBuffer, isBigEndian);
        const width = tags[256];
        const height = tags[257];
        if (!width || !height) {
            throw new TypeError('Invalid Tiff. Missing tags');
        }
        return { height, width };
    }
};

}, function(modId) { var map = {"../readUInt":1646880735427}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1646880735434, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.WEBP = void 0;
function calculateExtended(buffer) {
    return {
        height: 1 + buffer.readUIntLE(7, 3),
        width: 1 + buffer.readUIntLE(4, 3)
    };
}
function calculateLossless(buffer) {
    return {
        height: 1 + (((buffer[4] & 0xF) << 10) | (buffer[3] << 2) | ((buffer[2] & 0xC0) >> 6)),
        width: 1 + (((buffer[2] & 0x3F) << 8) | buffer[1])
    };
}
function calculateLossy(buffer) {
    // `& 0x3fff` returns the last 14 bits
    // TO-DO: include webp scaling in the calculations
    return {
        height: buffer.readInt16LE(8) & 0x3fff,
        width: buffer.readInt16LE(6) & 0x3fff
    };
}
exports.WEBP = {
    validate(buffer) {
        const riffHeader = 'RIFF' === buffer.toString('ascii', 0, 4);
        const webpHeader = 'WEBP' === buffer.toString('ascii', 8, 12);
        const vp8Header = 'VP8' === buffer.toString('ascii', 12, 15);
        return (riffHeader && webpHeader && vp8Header);
    },
    calculate(buffer) {
        const chunkHeader = buffer.toString('ascii', 12, 16);
        buffer = buffer.slice(20, 30);
        // Extended webp stream signature
        if (chunkHeader === 'VP8X') {
            const extendedHeader = buffer[0];
            const validStart = (extendedHeader & 0xc0) === 0;
            const validEnd = (extendedHeader & 0x01) === 0;
            if (validStart && validEnd) {
                return calculateExtended(buffer);
            }
            else {
                // TODO: breaking change
                throw new TypeError('Invalid WebP');
            }
        }
        // Lossless webp stream signature
        if (chunkHeader === 'VP8 ' && buffer[0] !== 0x2f) {
            return calculateLossy(buffer);
        }
        // Lossy webp stream signature
        const signature = buffer.toString('hex', 3, 6);
        if (chunkHeader === 'VP8L' && signature !== '9d012a') {
            return calculateLossless(buffer);
        }
        throw new TypeError('Invalid WebP');
    }
};

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1646880735435, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.detector = void 0;
const types_1 = require("./types");
const keys = Object.keys(types_1.typeHandlers);
// This map helps avoid validating for every single image type
const firstBytes = {
    0x38: 'psd',
    0x42: 'bmp',
    0x44: 'dds',
    0x47: 'gif',
    0x49: 'tiff',
    0x4d: 'tiff',
    0x52: 'webp',
    0x69: 'icns',
    0x89: 'png',
    0xff: 'jpg'
};
function detector(buffer) {
    const byte = buffer[0];
    if (byte in firstBytes) {
        const type = firstBytes[byte];
        if (type && types_1.typeHandlers[type].validate(buffer)) {
            return type;
        }
    }
    const finder = (key) => types_1.typeHandlers[key].validate(buffer);
    return keys.find(finder);
}
exports.detector = detector;

}, function(modId) { var map = {"./types":1646880735417}; return __REQUIRE__(map[modId], modId); })
return __REQUIRE__(1646880735416);
})()
//miniprogram-npm-outsideDeps=["fs","path","queue"]
//# sourceMappingURL=index.js.map