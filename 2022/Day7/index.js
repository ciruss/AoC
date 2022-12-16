const testInput = [
  '$ cd /',
  '$ ls',
  'dir a',
  '14848514 b.txt',
  '8504156 c.dat',
  'dir d',
  '$ cd a',
  '$ ls',
  'dir e',
  '29116 f',
  '2557 g',
  '62596 h.lst',
  '$ cd e',
  '$ ls',
  '584 i',
  '$ cd ..',
  '$ cd ..',
  '$ cd d',
  '$ ls',
  '4060174 j',
  '8033020 d.log',
  '5626152 d.ext',
  '7214296 k',
];

const accessObject = (object, key) => {
  let tempObj = object;
  console.log({ tempObj, key });
  tempObj[key] = {};
};

const createFileSystem = (terminalLine, fileSystem, locationInSystem) => {
  const output = terminalLine.split(' ');
  const isCommand = output[0] === '$';
  const isRoot = locationInSystem.length === 0;

  if (isCommand) {
    const command = output[1];

    if (command === 'cd') {
      const destination = output[2];

      if (destination === '/') {
        locationInSystem.length = 0;
      } else if (destination === '..') {
        locationInSystem.pop();
      } else {
        locationInSystem.push(destination);

        if (isRoot) {
          fileSystem[destination] = {};
        } else {
          locationInSystem.forEach((level) => {
            const innerObject = accessObject(fileSystem[level], level);
          });
        }
      }
    }
  } else {
    const isDirectory = output[0] === 'dir';

    if (!isDirectory) {
      const [fileSize, fileName] = output;

      if (isRoot) {
        fileSystem[fileName] = Number(fileSize);
      }
    }
  }
};

function day7(input) {
  const fileSystem = {};
  const locationInSystem = [];

  input.forEach((terminalLine) => {
    const output = terminalLine.split(' ');
    const isCommand = output[0] === '$';
    const isRoot = locationInSystem.length === 0;

    if (isCommand) {
      const command = output[1];

      if (command === 'cd') {
        const destination = output[2];

        if (destination === '/') {
          locationInSystem.length = 0;
        } else if (destination === '..') {
          locationInSystem.pop();
        } else {
          locationInSystem.push(destination);

          if (isRoot) {
            fileSystem[destination] = {};
          } else {
            locationInSystem.forEach((level) => {
              const innerObject = accessObject(fileSystem[level], level);
            });
          }
        }
      }
    } else {
      const isDirectory = output[0] === 'dir';

      if (!isDirectory) {
        const [fileSize, fileName] = output;

        if (isRoot) {
          fileSystem[fileName] = Number(fileSize);
        }
      }
    }
  });

  return { locationInSystem, fileSystem };
}

console.log(day7(testInput));
