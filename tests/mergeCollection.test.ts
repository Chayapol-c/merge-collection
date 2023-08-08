import { mergeCollection } from "../src/mergeCollection";

describe("test merge collection", () => {
  test("merging empty array should return empty array", () => {
    const collection1 = [] as number[]
    const collection2 = [] as number[]
    const mergedCollection = []
    const result = mergeCollection(collection1, collection2)
    expect(result.length).toStrictEqual(mergedCollection.length)
    expect(mergeCollection([], [])).toStrictEqual([])
  })

  test("merging collection that contain some same element", () => {
    const collection1 = [1, 2, 3]
    const collection2 = [2, 3, 4]
    const mergedCollection = [1, 2, 2, 3, 3, 4]
    const result = mergeCollection(collection1, collection2)
    expect(result.length).toStrictEqual(mergedCollection.length)
    expect(result).toStrictEqual(mergedCollection)
  })

  test("merging identical collection ", () => {
    const collection1 = [1, 2, 3]
    const collection2 = [1, 2, 3]
    const mergedCollection = [1, 1, 2, 2, 3, 3]
    const result = mergeCollection(collection1, collection2)
    expect(result.length).toStrictEqual(mergedCollection.length)
    expect(result).toStrictEqual(mergedCollection)
  })

  test("merging different same size collection", () => {
    const collection1 = [1, 2, 3]
    const collection2 = [4, 5, 6]
    const mergedCollection = [1, 2, 3, 4, 5, 6]
    const result = mergeCollection(collection1, collection2)
    expect(result.length).toStrictEqual(mergedCollection.length)
    expect(result).toStrictEqual(mergedCollection)
  })

  test("merging different size of collections", () => {
    const collection1 = [1, 2, 3]
    const collection2 = [6, 7, 8, 9]
    const mergedCollection = [1, 2, 3, 6, 7, 8, 9]
    const result = mergeCollection(collection1, collection2)
    expect(result.length).toStrictEqual(mergedCollection.length)
    expect(result).toStrictEqual(mergedCollection)
  })
})
