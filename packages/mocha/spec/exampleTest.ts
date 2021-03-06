import { Test } from 'mocha';

export const exampleTest = {
    'type': 'test',
    'title': 'passes',
    'body': '() => {\n\n        }',
    'async': false,
    'sync': true,
    '_timeout': 5000,
    '_slow': 75,
    '_enableTimeouts': true,
    '_retries': -1,
    'timedOut': false,
    '_currentRetry': 0,
    'pending': false,
    isPending: () => exampleTest.pending,
    'file': '/Users/jan/Projects/serenity-js/integration/mocha/examples/passing.spec.js',
    'parent': {
        'title': 'A scenario',
        'ctx': null,        // circular reference, ignore
        'suites': [],
        'tests': [
            null,
        ],
        'root': false,
        'pending': false,
        '_retries': -1,
        '_beforeEach': [],
        '_beforeAll': [],
        '_afterEach': [],
        '_afterAll': [],
        '_timeout': 5000,
        '_enableTimeouts': true,
        '_slow': 75,
        '_bail': false,
        '_onlyTests': [],
        '_onlySuites': [],
        'delayed': false,
        '_events': {},
        '_eventsCount': 1,
        'parent': {
            'title': 'Mocha reporting',
            'ctx': null,    // circular reference, ignore
            'suites': [
                null,
            ],
            'tests': [],
            'root': false,
            'pending': false,
            '_retries': -1,
            '_beforeEach': [],
            '_beforeAll': [],
            '_afterEach': [],
            '_afterAll': [],
            '_timeout': 5000,
            '_enableTimeouts': true,
            '_slow': 75,
            '_bail': false,
            '_onlyTests': [],
            '_onlySuites': [],
            'delayed': false,
            '_events': {},
            '_eventsCount': 1,
            'parent': {
                'title': '',
                'ctx': null,    // circular reference, ignore
                'suites': [
                    null,
                ],
                'tests': [],
                'root': true,
                'pending': false,
                '_retries': -1,
                '_beforeEach': [],
                '_beforeAll': [],
                '_afterEach': [],
                '_afterAll': [],
                '_timeout': 5000,
                '_enableTimeouts': true,
                '_slow': 75,
                '_bail': false,
                '_onlyTests': [],
                '_onlySuites': [],
                'delayed': false,
            },
            'file': '/Users/jan/Projects/serenity-js/integration/mocha/examples/passing.spec.js',
        },
        'file': '/Users/jan/Projects/serenity-js/integration/mocha/examples/passing.spec.js',
    },
} as unknown as Test;
