$(function () {
    $('.tlt').textillate({
        in: {
            // set the effect name
            effect: 'rotateInDownLeft',

            // set the delay factor applied to each consecutive character
            delayScale: 1.5,

            // set the delay between each character
            delay: 50,

            // set to true to animate all the characters at the same time
            sync: false,

            // randomize the character sequence 
            // (note that shuffle doesn't make sence in sync = true)
            shuffle: false
        },

        // out animation settings
        out: {
            effect: 'hinge',
            delayScale: 1.5,
            delay: 50,
            sync: false,
            shuffle: false,
        }
    });
})