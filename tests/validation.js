import test from 'ava';
import validation from '../lib/validation';

const empty = {
  target: {
    name: 'empty',
    value: '',
  },
};

const input = {
  target: {
    name: 'good',
    value: '1972-08-21',
  },
};

const bad = {
  target: {
    name: 'bad',
    value: '1972-08-foo',
  },
};

// Empty input
test('empty input', t => {
  t.true(validation(empty), 'Empty input returns true');
});

// Valid input
test('valid input', t => {
  t.true(validation(input), 'Valid input returns true');
});

// Valid input
test('bad input', t => {
  t.is(validation(bad), 'bad must be a date!', 'Bad input returns true');
});
