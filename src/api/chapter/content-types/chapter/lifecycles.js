const slugify = require('slugify');
const readingTime = require('reading-time');

module.exports = {
  async beforeCreate(event) {
    if (event.params.data.content && event.params.data.content?.length > 0) {
      event.params.data.readingTime = readingTime(event.params.data.content)?.text || null;
    }

    if (event.params.data.title) {
      event.params.data.slug = slugify(event.params.data.title, { lower: true });
    }
  },
  async beforeUpdate(event) {
    if (event.params.data.content && event.params.data.content?.length > 0) {
      event.params.data.readingTime = readingTime(event.params.data.content)?.text || null;
    }
    
    if (event.params.data.title) {
      event.params.data.slug = slugify(event.params.data.title, { lower: true });
    }
  },
};
