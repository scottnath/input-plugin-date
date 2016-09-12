import test from 'ava';
import validation from '../lib/validation';

const input = {
  target: {
    name: 'date',
    value: 'foo bar baz',
  },
  all: {
    date: 'foo bar baz',
  },
};

const settings = {
  target: {
    empty: false,
  },
  all: {
    date: {
      empty: false,
    },
  },
};


// Valid input
test('valid input', t => {
  t.true(validation(input, settings), 'Valid input returns true');
});
