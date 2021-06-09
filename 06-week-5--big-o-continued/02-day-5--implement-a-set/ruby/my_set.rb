class MySet 
  attr_reader :data
  # throw an error if called with anything other than string, array or nothing
  # if an iterable is provided only its unique values should be in data
  # strings and arrays will need to be broken down by their elements/characters
  def initialize(iterable = nil)
    @data = {}
  end

  # return number of elements in MySet
  def size
  end

  # add an item to MySet as is
  # return the MySet instance
  def add(item)
  end

  # delete an item from MySet
  # return true if successful otherwise false
  def delete(item)
  end

  # return true if in MySet, otherwise false
  def has(item)
  end

  # return data as an array
  def entries
  end
end

if __FILE__ == $PROGRAM_NAME
  # Don't forget to add your own!
end


