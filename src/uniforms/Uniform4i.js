var vec4 = require("@nathanfaucett/vec4"),
    Uniform = require("./Uniform");


var NativeInt32Array = typeof(Int32Array) !== "undefined" ? Int32Array : Array;


module.exports = Uniform4i;


function Uniform4i(context, name, location, size) {
    Uniform.call(this, context, name, location, size);
    this.value = size === 1 ? vec4.create(NaN, NaN, NaN, NaN) : new NativeInt32Array(size * 4);
}
Uniform.extend(Uniform4i);

Uniform4i.prototype.set = function(value, force) {
    var context = this.context;

    if (this.size === 1) {
        if (force || context.__programForce || vec4.notEquals(this.value, value)) {
            context.gl.uniform4i(this.location, value[0], value[1], value[2], value[3]);
            vec4.copy(this.value, value);
        }
    } else {
        context.gl.uniform4iv(this.location, value);
    }

    return this;
};