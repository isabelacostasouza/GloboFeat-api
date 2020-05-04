function video(id) {
    this.url = id.url;
    this.title = id.name;
    this.duration = id.duration;
    this.via = id.username;
    this.addedDate = new Date().getTime();
}

module.exports = video;