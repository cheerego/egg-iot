'use strict';

const mock = require('egg-mock');

describe('test/iot.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/iot-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, iot')
      .expect(200);
  });
});
