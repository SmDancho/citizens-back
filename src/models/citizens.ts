import { Schema, model } from 'mongoose';

const citizens = new Schema(
  {
    city_id: Number,
    name: String,
    groups: [],
  },
  { collection: 'citizens' }
);

export const Citizens = model('citizens', citizens);
