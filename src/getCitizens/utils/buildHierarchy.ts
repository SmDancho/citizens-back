import type { hierarchy, group, citizens } from '../types';

export function buildHierarchy(config: string[], citizens: citizens[]) {
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

      let levelObject = levelArray.find((item) => item.name === levelName);

      if (!levelObject) {
        levelObject = {
          name: levelName,
          data: [],
        };
        levelArray.push(levelObject as hierarchy);
      }

      if (index === levels.length - 1) {
        //@ts-ignore
        levelObject.data.push(resident.name);
      }
      levelArray = levelObject?.data as hierarchy[];
    });
  });

  return hierarchyData;
}
