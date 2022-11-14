# Downgrading Node

#### Check the version
```
node -v
```

#### Check for available node versions
```
brew search node
```

#### To unlink from current version
```
brew unlink node
```

#### Install the version you want using the following command (e.g. for version 8)
```
brew install node@8
```

#### Link it to the installed version
```
brew link node@8
```