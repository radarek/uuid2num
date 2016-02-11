# Setup

```
npm install
```

# Experiment

1. Generate random uuids:

```
ruby generate_uuids.rb > uuids.txt
```

2. Convert uuids to numbers 0-99:

```
node uuids2num.js < uuids.txt > randoms.txt
```

3. Display histogram

```
./hist.sh
```

