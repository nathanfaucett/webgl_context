var Attribute = require("./attribute");


module.exports = Attribute1i;


function Attribute1i(context, name, location) {
    Attribute.call(this, context, name, location);
}
Attribute.extend(Attribute1i);

Attribute1i.prototype.set = function(buffer, offset) {
    var context = this.context,
        gl = context.gl;

    context.setAttribPointer(this.location, 1, gl.FLOAT, buffer.stride, offset, context.setArrayBuffer(buffer));
    return this;
};
