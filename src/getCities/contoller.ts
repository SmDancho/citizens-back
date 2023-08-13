import { Cities } from '../models/city';

export const getCities = async (req: Express.Request, res: any) => {
  const cities = await Cities.find();
  console.log(cities);
  return res.json(cities);
};
