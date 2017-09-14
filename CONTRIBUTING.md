# Contributor Guidelines

Welcome! 👋 If you're reading this because you're interested in contributing to `react-native-create-bridge`, then you're in the right place. Let's get started!

## How to contribute

We value all types of contributions here, including ones that don't involve code directly. Providing detailed bug reports, writing a blog post about your experience, creating tutorials, contributing to the docs, and promoting `create-bridge` on social media are all excellent ways to get involved without writing any code. If you are planning on making a non-code contribution and would like feedback or guidance, please file an issue to start the dialogue. 😊

Code contributions are also welcome! Please file an issue first before submitting any features so we can talk about it. Also, please keep your pull requests small & focused so I can merge them quicker.

### How to submit a pull request

If you would like to contribute through writing code, here's a guide on how to make a pull request (PR):
1. Find an issue that you are interested in addressing and comment to let me know that you're working on it.
2. Fork the repository to your account
3. Clone the repository to your local machine using `git clone https://github.com/YOUR_USERNAME_HERE/react-native-create-bridge.git`.
4. Create a new branch for your fix using `git checkout -b branch-name-here`.
5. Make the appropriate changes for the issue you are trying to address or the feature that you want to add. If you are adding a feature or changing functionality, please write tests! 👍 Tests will help your PR get merged faster.
6. Test your change locally by running `npm run package:dev`. This command will build the project and create a symlink. In a test project, run `npm install --save react-native-create-bridge && npm link react-native-create-bridge` which will link to your local copy. Then, you can run `react-native new-module` to test your change.
7. Confirm that tests still pass by running `npm run test`. If the tests are failing, please ask for help!
8. Add and commit the changed files using `git add` and `git commit`. We use [Conventional Changelog Standard](https://github.com/bcoe/conventional-changelog-standard/blob/master/convention.md) for our commit messages. More info on that below.
9. Push the changes to the remote repository using git push origin branch-name-here.
10. Submit a PR to the upstream repository.
11. Please title your PR using [Conventional Changelog Standard](https://github.com/bcoe/conventional-changelog-standard/blob/master/convention.md). Set the description of the PR with a brief description of what you did and any questions you might have about what you did. Work in progress PRs are encouraged, especially if you're looking for early feedback - please prefix them with [WIP].
12. Wait for the PR to be reviewed by a maintainer.
13. Make changes to the pull request if the reviewing maintainer recommends them.
14. Once your PR is merged, celebrate! 🎉 You did it!

If any of the instructions above are unclear, please file an issue so we can improve them!

### How should I format my commit messages?

We use [Conventional Changelog Standard](https://github.com/bcoe/conventional-changelog-standard/blob/master/convention.md) for all commit messages and PR titles. Please adhere to these guidelines so your PR can be merged faster.

Example:

```refactor(templates): revised imports in obj-c header files```

The prefix (fix in the example) should be one of the following:
- fix: You fixed a bug
- feat: You added a new feature
- chore: You completed a chore on the repository, such as upgrading a dependency
- docs: You added or revised documentation
- refactor: You refactored a method or file

The affected part of the application (templates in the example) should describe the part of the application you're changing.