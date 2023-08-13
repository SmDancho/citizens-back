import { buildHierarchy } from './utils/buildHierarchy';
import { Citizens } from '../models/citizens';
import { Cities } from '../models/city';
import type { citizens } from './types';
import { Request, Response } from 'express';

export const getCitizens = async (req: Request, res: Response) => {
  const citizens: citizens[] = await Citizens.find();
  const cities = await Cities.find();

  const { config } = req.query;
  const convertTypeCfg = config as string;
  const validJSONString = convertTypeCfg?.replace(/'/g, '"');
  const parsedArray = JSON.parse(validJSONString);

  console.log(parsedArray);

  const hierarchy = buildHierarchy(parsedArray, citizens);
  res.json(hierarchy);
};
