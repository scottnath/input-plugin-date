import test from 'ava';
import plugin from '../';
import contentTypes from 'punchcard-content-types';

contentTypes.pluginTests(test, plugin);
