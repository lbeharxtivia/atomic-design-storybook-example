const sanitizeClass = className =>
    className.toLowerCase().replace(/[^a-z0-9]/gi, "");

module.exports = sanitizeClass;