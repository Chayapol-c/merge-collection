interface IMergeCollection {
  (collection_1: number[], collection_2: number[]): number[]
}

const mergeCollection: IMergeCollection = function (collection_1, collection_2) {
  let mergedArr: number[] = [];
  let i: number = 0;
  let j: number = 0;
  while (i < collection_1.length && j < collection_2.length) {
    if (collection_1[i] <= collection_2[j]) {
      mergedArr = [...mergedArr, collection_1[i++]];
      continue;
    }
    mergedArr = [...mergedArr, collection_2[j++]];
  }
  while (i < collection_1.length) mergedArr = [...mergedArr, collection_1[i++]];
  while (j < collection_2.length) mergedArr = [...mergedArr, collection_2[j++]];
  return mergedArr;
}

export { mergeCollection }