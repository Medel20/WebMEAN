"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatePhoto = exports.deletePhoto = exports.createPhoto = exports.getPhoto = exports.getPhotos = void 0;
const Photo_1 = __importDefault(require("../models/Photo"));
const path_1 = __importDefault(require("path"));
const fs_extra_1 = __importDefault(require("fs-extra"));
async function getPhotos(req, res) {
    const photos = await Photo_1.default.find();
    return res.json(photos);
}
exports.getPhotos = getPhotos;
async function getPhoto(req, res) {
    const { id } = req.params;
    const photo = await Photo_1.default.findById(id);
    console.log(req.params.id);
    return res.json(photo);
}
exports.getPhoto = getPhoto;
async function createPhoto(req, res) {
    const { mo, brand, price, operator, so, color } = req.body;
    console.log(req.file.path);
    const newPhoto = {
        mo: mo,
        brand: brand,
        price: price,
        operator: operator,
        so: so,
        color: color,
        imagePath: req.file.path
    };
    const photo = new Photo_1.default(newPhoto);
    await photo.save();
    return res.json({
        message: photo
    });
}
exports.createPhoto = createPhoto;
;
async function deletePhoto(req, res) {
    const { id } = req.params;
    const photo = await Photo_1.default.findByIdAndRemove(id);
    if (photo) {
        await fs_extra_1.default.unlink(path_1.default.resolve(photo.imagePath));
    }
    return res.json({
        message: photo
    });
}
exports.deletePhoto = deletePhoto;
async function updatePhoto(req, res) {
    const { id } = req.params;
    const { mo, brand, price, operator, so, memory, color } = req.body;
    const updatePhoto = await Photo_1.default.findByIdAndUpdate(id, {
        mo, brand, price, operator, so, memory, color
    }, { new: true });
    return res.json({
        message: updatePhoto
    });
}
exports.updatePhoto = updatePhoto;
