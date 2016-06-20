import {test} from 'ava';
import isPromise from './is-promise';

test('should return true if a Promise is provided', t => {
  const promise = new Promise((resolve) => resolve(true));

  const payload = {
    promise,
  };

  t.true(isPromise(payload));
});

test('should return false if something that is not a Promise is provided',
  t => {
    const badPayload1 = { hello: 'world' };
    const badPayload2 = ['hello', 'world'];
    const badPayload3 = 'hello world';
    const badPayload4 = 'hello world';

    t.true(!isPromise({ promise: badPayload1 }));
    t.true(!isPromise({ promise: badPayload2 }));
    t.true(!isPromise({ promise: badPayload3 }));
    t.true(!isPromise({ promise: badPayload4 }));
  });
