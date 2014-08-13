var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    ObjectId = Schema.Types.ObjectId;

// TODO: add versioning for complete history
var DirectiveSchema = new Schema({
    user: {type: ObjectId, ref: 'User'},
    text: {type: String},
    created: {type: Date, default: Date.now},
});

mongoose.model('Directive', DirectiveSchema);
