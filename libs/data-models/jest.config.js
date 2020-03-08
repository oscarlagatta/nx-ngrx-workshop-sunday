module.exports = {
  name: 'data-models',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/data-models',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
