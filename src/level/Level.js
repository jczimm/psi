// note sounds ordered by pitch:
// 0, 4, 1, 3, 2, 5, 9, 6, 8, 7, 10, 14, 11, 13, 12

/**
 * Created with JetBrains WebStorm.
 * User: Roushey
 * Date: 4/27/13
 * Time: 7:44 PM
 */
function Level( game ){

    this.game = game;
    this.chunk = 0;

    //debug a specific chunk (0-6)
    this.chunk = 0;
    this.build();
    this.startChunk(0);
}

Level.prototype.update = function(dt) {
    this.chunks[this.chunk].update(dt);
};

Level.prototype.build = function() {
    this.chunks = [
        new IntroChunk(this),
        new SparseChunk(this),
        new FourthNoteChunk(this),
        new DenseChunk(this),
        new BossChunk(this),
        new ChorusChunk(this),
        new ClimaxChunk(this),
		new BigChunk(this),
		new ArpChunk(this),
        new SandIntroChunk(this)
    ];
};

Level.prototype.doItem = function(item) {
    item.action(this.game);
};

Level.prototype.chunkComplete = function(extraTime){
    this.chunk++;
    if(this.chunk >= this.chunks.length) this.chunk = 0;

    this.startChunk(extraTime);
};

Level.prototype.startChunk = function(extraTime) {
    this.chunks[this.chunk].start(extraTime);
};