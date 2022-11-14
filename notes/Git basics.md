**Git** is the most popular ==version control system== in the world.

- Centralized (ex. Subversion, Team foundation server)
	- Single point of failure - one server
- Distributed (ex. Git, Mercurial)
	- Saved locally

#### Check the avaibility of Git
```bash
git --version
```

#### Installing Git on MacOS
Install [homebrew](https://brew.sh) before using this
```bash
brew install git
```

#### Cloning Folder
```bash
git clone "link to the repository"
```
*Cloning specific branch*
```bash
git clone --branch <branchname> <remote-repo-url>
```

#### Pushing Folder
```bash
git add .
git commit -m initialcommit
git push origin "branch name"
```


# Uploading to Github
### Push an existing repository from the command line
```bash
git remote add origin <Link_To_Github>
git branch -M main
git push -u origin main
```

### Detaching local repository from Github
```bash
git remote rm origin
```




---


[Source video: Git Tutorial for Beginners: Learn Git in 1 Hour](https://youtu.be/8JJ101D3knE)
