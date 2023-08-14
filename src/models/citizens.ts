import { Schema, model } from 'mongoose';

const citizens = new Schema(
  {
    id: Number,
    city_id: Number,
    name: String,
    groups: [],
  },
  { collection: 'citizens' }
);

export const Citizens = model('citizens', citizens);
