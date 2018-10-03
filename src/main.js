var bgGame;
var button;
var birdHero;
var cursors;

var game = new Phaser.Game(370, 550, Phaser.CANVAS, 'gameplay');

var stateMain = {
    preload: function()
    {
        // Cargar todos los recursos
        game.load.image('bg', 'assets/img/bg.jpeg');
        //game.load.image('bird', 'assets/img/pajaro1.png');
        game.load.spritesheet('bird', 'assets/img/pajaro.png', 43, 30, 3);
        //game.load.image('btn', 'assets/img/btn.png');
    },
    create : function()
    {
        // Se ejecuta una vez iniciado el juego, muestra en pantalla los recursos cargados previamente
        bgGame   = game.add.tileSprite(0, 0, 370, 550, 'bg'); // Mostramos el fondo
        birdHero = game.add.sprite(100, 100, 'bird'); // Mostramos el actor principal: el pajaro
        birdHero.frame = 1;
        birdHero.animations.add('flight', [0, 1, 2], 10, true);
        keyRight = game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
        cursors = game.input.keyboard.createCursorKeys();
        game.physics.startSystem(Phaser.Physics.ARCADE);
        game.physics.arcade.enable(birdHero);
        birdHero.body.collideWorldBounds = true;
        /*birdHero.anchor.setTo(0.5);
        birdHero.scale.setTo(1.3,1.3);
        button   = game.add.sprite(game.width/2, game.height/2, 'btn');
        button.anchor.setTo(0.5);*/
    },
    update : function()
    {
        // Ejecuta las acciones de nuestro personaje, verifica ciertos casos, movimientos y animación del juego,
        // y en definitiva mueve la lógica general
        bgGame.tilePosition.x -= 1;
        //birdHero.angle += 1;
        birdHero.animations.play('flight');
        if(cursors.right.isDown)
        {
            birdHero.position.x += 1;
        } else if (cursors.left.isDown) {
            birdHero.position.x -= 1;
        } else if (cursors.down.isDown) {
            birdHero.position.y += 1;
        } else {
            birdHero.position.y -= 1;
        }
    }
};

game.state.add('main', stateMain);
game.state.start('main');