let supportsPassiveEvents: boolean;
let supportedInputTypes: Set<string>;
const candidateInputTypes = [
    'color',
    'button',
    'checkbox',
    'date',
    'datetime-local',
    'email',
    'file',
    'hidden',
    'image',
    'month',
    'number',
    'password',
    'radio',
    'range',
    'reset',
    'search',
    'submit',
    'tel',
    'text',
    'time',
    'url',
    'week'
];

export function supportsPassiveEventListeners(): boolean {
    if (supportsPassiveEvents == null) {
        try {
            window.addEventListener('test', null!, Object.defineProperty({}, 'passive', {
                get: () => supportsPassiveEvents = true
            }));
        } finally {
            supportsPassiveEvents = supportsPassiveEvents || false;
        }
    }

    return supportsPassiveEvents;
}

/** @returns The input types supported by this browser. */
export function getSupportedInputTypes(): Set<string> {
    if (supportedInputTypes)
        return supportedInputTypes;

    if (typeof document !== 'object' || !document) {
        supportedInputTypes = new Set(candidateInputTypes);

        return supportedInputTypes;
    }

    let featureTestInput = document.createElement('input');

    supportedInputTypes = new Set(candidateInputTypes.filter(value => {
        featureTestInput.setAttribute('type', value);

        return featureTestInput.type === value;
    }));

    return supportedInputTypes;
}