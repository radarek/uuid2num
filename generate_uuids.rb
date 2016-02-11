require "securerandom"

N = (ARGV[0] || 1_000_000).to_i
N.times do
  puts SecureRandom.uuid
end
