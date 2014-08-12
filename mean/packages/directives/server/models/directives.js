var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    ObjectId = Schema.Types.ObjectId;

var DirectiveSchema = new Schema({
    user: {type: ObjectId, ref: 'User'},
    text: {type: String},
    description: {type: String},
    created: {type: Date, default: Date.now},
    updated: {type: Date, default: null},
});

mongoose.model('Directive', DirectiveSchema);
