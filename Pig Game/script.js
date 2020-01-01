var scores, round_score, player, gameActive;

initialize();

document.querySelector('.btn-roll').addEventListener('click' , function(){
    
    if(gameActive)
        {
            var dice = Math.floor(Math.random() * 6) + 1;
            var dice_roll = document.querySelector('.dice');
            dice_roll.style.display = 'block';
            dice_roll.src = 'images/dice-' + dice + '.png';

            if(dice !== 1)
                {
                    round_score += dice;
                    document.querySelector('#current-' + player).textContent = round_score;
                }
            else
                {
                    nextPlayer();
                }
        }
})

document.querySelector('.btn-hold').addEventListener('click' , function(){
    
    if(gameActive)
        {
            scores[player-1] += round_score;
    
            document.getElementById('score-' + player).textContent = scores[player-1];

            if( scores[player-1] >= 100 )
                {
                    document.querySelector('#name-' + player).textContent = 'Winner!';
                    document.querySelector('.player-' + player + '-panel').classList.add('winner');
                    document.querySelector('.player-' + player + '-panel').classList.remove('active');
                    document.querySelector('.dice').style.display = 'none';
                    gameActive = false;
                }
            else
                {
                    nextPlayer();
                }
        } 
})

document.querySelector('.btn-new').addEventListener('click' , initialize);

function nextPlayer()
{
    player === 1 ? player = 2 : player = 1;
    round_score = 0;
    
    document.querySelector('.dice').style.display = 'none';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('current-2').textContent = '0';
    document.querySelector('.player-1-panel').classList.toggle('active');
    document.querySelector('.player-2-panel').classList.toggle('active');
}

function initialize()
{
    scores = [ 0, 0];
    round_score = 0;
    player = 1;
    gameActive = true;

    document.querySelector('.dice').style.display = 'none';

    document.getElementById('score-1').textContent = '0';
    document.getElementById('score-2').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('current-2').textContent = '0';
    document.querySelector('#name-1').textContent = 'Player 1';
    document.querySelector('#name-2').textContent = 'Player 2';
    
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.add('active');
    document.querySelector('.player-2-panel').classList.remove('active');
    
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-2-panel').classList.remove('winner');
}