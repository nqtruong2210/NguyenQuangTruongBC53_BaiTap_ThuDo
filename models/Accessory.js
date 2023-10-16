class Accessory {
  constructor(
    _accessoryId,
    _accessoryType,
    _accessoryName,
    _accessoryDescription,
    _accessoryImg,
    _accessoryTryOn
  ) {
    this.id = _accessoryId;
    this.type = _accessoryType;
    this.name = _accessoryName;
    this.desc = _accessoryDescription;
    this.imgSrc_jpg = _accessoryImg;
    this.imgSrc_png = _accessoryTryOn;
  }
}
