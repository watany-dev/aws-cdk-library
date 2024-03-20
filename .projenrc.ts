import { awscdk, github, javascript, release } from 'projen';

const project = new awscdk.AwsCdkConstructLibrary({
  author: 'Open Construct Foundation',
  authorAddress: 'thorsten.hoeger@taimos.de',
  cdkVersion: '2.120.0',
  defaultReleaseBranch: 'main',
  jsiiVersion: '~5.3.0',
  name: '@open-constructs/aws-cdk',
  projenrcTs: true,
  repositoryUrl: 'https://github.com/open-constructs/aws-cdk-library.git',
  licensed: true,
  license: 'Apache-2.0',
  // autoApproveUpgrades: true,
  // autoApproveOptions: { allowedUsernames: ['hoegertn'] },
  depsUpgradeOptions: { workflowOptions: { schedule: javascript.UpgradeDependenciesSchedule.WEEKLY } },
  githubOptions: {
    projenCredentials: github.GithubCredentials.fromApp(),
  },
  releaseTrigger: release.ReleaseTrigger.manual(),
  gitpod: true,

  // deps: [

  // ],
  // devDeps: [

  // ],

});


project.synth();