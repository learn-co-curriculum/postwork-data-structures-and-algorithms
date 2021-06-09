require "./lru_cache"

describe "LRUCache" do
  it "correctly creates and updates a cache with a limit of 1 item" do
    cache = LRUCache.new(1)

    found = cache.get("test")

    expect(found).to be -1

    key = "cake"
    val = "cake recipe"
    cache.put(key, val)
    found = cache.get(key)

    expect(found).to be_a Node
    expect(found.data).to eq(val)

    key = "cookies"
    val = "cookie recipe"
    cache.put(key, val)
    found = cache.get(key)
    shouldBeGone = cache.get("cake")

    expect(found).to be_a Node
    expect(found.data).to eq(val)
    expect(shouldBeGone).to eq(-1)

    val = "new cookie recipe"
    cache.put(key, val)
    found = cache.get(key)

    expect(found).to be_a Node
    expect(found.data).to eq(val)
    expect(cache.size).to eq(1)
  end

  it "correctly creates and updates a cache with a limit of 2 items" do
    cache = LRUCache.new(2)

    found = cache.get("test")

    expect(found).to eq(-1)

    key1 = "cake"
    val1 = "cake recipe"
    cache.put(key1, val1)
    found1 = cache.get(key1)
    key2 = "cookies"
    val2 = "cookie recipe"
    cache.put(key2, val2)
    found2 = cache.get(key2)

    expect(found1.data).to eq(val1)
    expect(found2.data).to eq(val2)
    expect(cache.size).to eq(2)

    val1 = "new cake recipe"
    cache.put(key1, val1)
    val2 = "new cookie recipe"
    cache.put(key2, val2)
    found1 = cache.get(key1)
    found2 = cache.get(key2)

    expect(found1.data).to eq(val1)
    expect(found2.data).to eq(val2)
    expect(cache.size).to eq(2)

    key3 = "scones"
    val3 = "scone recipe"
    cache.put(key3, val3)
    found3 = cache.get(key3)
    found1 = cache.get(key1)
    found2 = cache.get(key2)

    expect(found3.data).to eq(val3)
    expect(cache.size).to eq(2)
    expect(found1).to eq(-1)
    expect(found2.data).to eq(val2)
  end

  it "correctly creates a cache with many items" do
    cache = LRUCache.new(10)
    numbers = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve"]
    items = numbers.reduce([]) do |accum, num| 
      obj = {}
      obj[num] = "item #{num}"
      accum << obj
      accum
    end

    items.each_with_index do |item, idx|
      key = numbers[idx]
      val = item[key]

      cache.put(key, val)
    end

    expect(cache.size).to eq(10)
    expect(cache.get(numbers[0])).to eq(-1)
    expect(cache.get(numbers[1])).to eq(-1)
    expect(cache.get(numbers[2]).data).to eq(items[2][numbers[2]])
    expect(cache.get(numbers[11]).data).to eq(items[11][numbers[11]])

    updatedVal = "whatevers"
    cache.put(numbers[4], updatedVal)

    expect(cache.get(numbers[4]).data).to eq(updatedVal)
  end
end