### Run

- Create a project: `npx react-native init TelematicsTest --template react-native-template-typescript`;
- Go to TelematicsTest/ios folder `cd ios`. Here run `rm -rf Pods/`, `rm Podfile.lock`;
- Copy Podfile form this archive into TelematicsTest/ios folder;
- Still in TelematicsTest/ios run `pod install`;
- Copy and replace all other files from archive into TelematicsTest folder;
- Install dependencies: `yarn install`
- For iOS: `yarn react-native run-ios`
- For android `react-native run-android` 