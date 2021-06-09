const { Node, LRUCache } = require("../lru_cache");

describe("LRUCache", () => {
  it ("correctly creates and updates a cache with a limit of 1 item", () => {
    const cache = new LRUCache(1);

    let found = cache.get("test");

    expect(found).toBe(-1);

    let key = "cake";
    let val = "cake recipe";
    cache.put(key, val);
    found = cache.get(key);

    expect(found).toBeInstanceOf(Node);
    expect(found.data).toBe(val);

    key = "cookies";
    val = "cookie recipe";
    cache.put(key, val);
    found = cache.get(key);
    let shouldBeGone = cache.get("cake");

    expect(found).toBeInstanceOf(Node);
    expect(found.data).toBe(val);
    expect(shouldBeGone).toBe(-1);

    val = "new cookie recipe";
    cache.put(key, val);
    found = cache.get(key);

    expect(found).toBeInstanceOf(Node);
    expect(found.data).toBe(val);
    expect(cache.size).toBe(1);
  });

  it ("correctly creates and updates a cache with a limit of 2 items", () => {
    const cache = new LRUCache(2);

    let found = cache.get("test");

    expect(found).toBe(-1);

    let key1 = "cake";
    let val1 = "cake recipe";
    cache.put(key1, val1);
    let found1 = cache.get(key1);
    let key2 = "cookies";
    let val2 = "cookie recipe";
    cache.put(key2, val2);
    let found2 = cache.get(key2);

    expect(found1.data).toBe(val1);
    expect(found2.data).toBe(val2);
    expect(cache.size).toBe(2);

    val1 = "new cake recipe";
    cache.put(key1, val1);
    val2 = "new cookie recipe";
    cache.put(key2, val2);
    found1 = cache.get(key1);
    found2 = cache.get(key2);

    expect(found1.data).toBe(val1);
    expect(found2.data).toBe(val2);
    expect(cache.size).toBe(2);

    let key3 = "scones";
    let val3 = "scone recipe";
    cache.put(key3, val3);
    let found3 = cache.get(key3);
    found1 = cache.get(key1);
    found2 = cache.get(key2);

    expect(found3.data).toBe(val3);
    expect(cache.size).toBe(2);
    expect(found1).toBe(-1);
    expect(found2.data).toBe(val2);
  });

  it ("correctly creates a cache with many items", () => {
    const cache = new LRUCache(10);
    const numbers = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve"];
    const items = numbers.reduce((accum, num) => {
      accum.push({ [num]: `item ${num}` });
      return accum;
    }, []);

    items.forEach((item, idx) => {
      const key = numbers[idx];
      const val = item[key];

      cache.put(key, val);
    });

    expect(cache.size).toBe(10);
    expect(cache.get(numbers[0])).toBe(-1);
    expect(cache.get(numbers[1])).toBe(-1);
    expect(cache.get(numbers[2]).data).toBe(items[2][numbers[2]]);
    expect(cache.get(numbers[11]).data).toBe(items[11][numbers[11]]);

    const updatedVal = "whatevers";
    cache.put(numbers[4], updatedVal);

    expect(cache.get(numbers[4]).data).toBe(updatedVal);
  });
});
