var mongoose=require('mongoose');
var Schema = mongoose.Schema;
var menuSetSchema = new Schema({ level1: String, level2: String, level3: String, level4: String, scode: String });
//menuSetSchema.save();
module.exports=mongoose.model('menuSet',menuSetSchema);
