import type { hierarchy, group, citizens } from '../types';

export function buildHierarchy(
  config: string[],
  citizens: citizens[],
  citiesData: any
) {
  const hierarchyData: hierarchy[] = [];

  citizens.forEach((resident) => {
    const levels = config.map((type) => {
      const group = resident.groups.find((group: group) => group.type === type);
      return group ? group.name : null;
    });

    let levelArray = hierarchyData;

    levels.forEach((levelName, index: number) => {
      if (!levelName) {
        return;
      }
      const cityData = citiesData.find((item: any) => item.id === resident.id);
      let levelObject = levelArray.find((item) => item.name === levelName);

      if (!levelObject) {
        levelObject = {
          name: levelName,
          data: [],
        };
        levelArray.push(levelObject as hierarchy);
      }
      if (index === 0) {
        levelObject.cityData = cityData;
      }
      if (index === levels.length - 1) {
        levelObject?.data?.push({
          name: resident.name,
          id: resident.id,
        });
      }
      levelArray = levelObject?.data as hierarchy[];
    });
  });

  return hierarchyData;
}
