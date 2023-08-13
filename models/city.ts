import { Schema, model } from 'mongoose';

const cities = new Schema({
  id:Number,
  name: String,
  data: String,
},{ collection : 'cities' });

export const Cities = model('cities', cities);
