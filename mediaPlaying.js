/*
* @author David Clews
* @version 1.0.0
* @authorUrl http://davidclews.com
* @repoUrl https://github.com/webciter/mediaPlaying
*/

Object.defineProperty(HTMLMediaElement.prototype, 'playing', {
    get: function(){
        return !!(this.currentTime > 0 && !this.paused && !this.ended && this.readyState > 2);
    }
})
