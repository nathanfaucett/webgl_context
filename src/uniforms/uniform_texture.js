var Uniform = require("./uniform");


module.exports = UniformTexture;


function UniformTexture(context, name, location) {
    Uniform.call(this, context, name, location);
}
Uniform.extend(UniformTexture);

UniformTexture.prototype.set = function(value, force) {
    this.context.setTexture(this.location, value, force);
    return this;
};