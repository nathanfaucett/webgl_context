var Attribute = require("./attribute");


module.exports = Attribute3f;


function Attribute3f(context, name, location) {
    Attribute.call(this, context, name, location);
}
Attribute.extend(Attribute3f);

Attribute3f.prototype.set = function(buffer, offset) {
    var context = this.context,
        gl = context.gl;

    context.setArrayBuffer(this.location, buffer, 3, gl.FLOAT, offset);
    return this;
};
