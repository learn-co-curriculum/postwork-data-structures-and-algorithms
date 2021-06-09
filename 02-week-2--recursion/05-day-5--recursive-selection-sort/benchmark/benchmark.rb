# Paste your iterative and recursive solutions in this file
# And then calculate their average run times to compare them.



def benchmark
  start_time = Time.now

  1000.times do 
    yield
  end

  (Time.now - start_time) / 1000
end
