export const DialogOpenAnimations = {
    dialog: {
        keyframe: [
            {
                'scale': '0.75',
                'opacity': '0'
            },
            {
                'scale': '1',
                'opacity': '1'
            }
        ],
        options: {
            duration: 500,
            easing: 'cubic-bezier(.3,0,0,1)',
        },
    },

    scrim: {
        keyframe: [
            {
                'opacity': '0'
            },
            {
                'opacity': '0.32'
            }
        ],
        options: {
            duration: 500,
            easing: 'linear',
        }
    },

    container: {
        keyframe: [
            {
                'opacity': 0
            },
            {
                'opacity': 1
            }
        ],
        options: {
            duration: 50,
            easing: 'linear',
            pseudoElement: '::before'
        },
    },

    actions: {
        keyframe: [
            { 'opacity': 0 },
            { 'opacity': 0 },
            { 'opacity': 1 },
        ],
        options: {
            duration: 500,
            easing: 'linear',
            fill: 'forwards' as FillMode
        },
    },
}

export const DialogCloseAnimations = {
    dialog: {
        keyframe: [
            {
                'scale': '1',
                'opacity': '1'
            },
            {
                'scale': '0.75',
                'opacity': '0'
            }
        ],
        options: {
            duration: 150,
            easing: 'cubic-bezier(.3,0,.8,.15)'
        },
    },

    scrim: {
        keyframe: [
            {
                'opacity': '0.32'
            },
            {
                'opacity': '0'
            }
        ],
        options: {
            duration: 150,
            easing: 'linear'
        }
    },

    container: {
        keyframe: [
            {
                'opacity': 1
            },
            {
                'opacity': 0
            }
        ],
        options: {
            delay: 50,
            duration: 50,
            easing: 'linear',
            pseudoElement: '::before'
        },
    },

    actions: {
        keyframe: [
            { 'opacity': 1 },
            { 'opacity': 0 },
        ],
        options: {
            duration: 100,
            easing: 'linear',
            fill: 'forwards' as FillMode
        },
    },
}
