let player_1;
let player_2;
// let game_state = {curr_turn: 1};
let isInput1Valid = false;
let isInput2Valid = false;

// Check and init players
document
    .getElementById('name1')
    .addEventListener("input", function (e){
        let input1 = e.target.value;
        isInput1Valid = input1.length > 0;
        if (isInput1Valid && isInput2Valid){
            document
                .getElementById('start-btn')
                .removeAttribute("disabled")
        }
        else{
            document
                .getElementById('start-btn')
                .setAttribute("disabled", 'true')
        }
    })
document
    .getElementById('name2')
    .addEventListener("input", function (e){
        let input2 = e.target.value;
        isInput2Valid = input2.length > 0;
        if (isInput1Valid && isInput2Valid){
            document
                .getElementById('start-btn')
                .removeAttribute("disabled")
        }
        else{
            document
                .getElementById('start-btn')
                .setAttribute("disabled", 'true')
        }
    })
// Init reset button
document
    .getElementById('reset-btn')
    .addEventListener('click', function(){
        window.location.reload();
    });
// Start the game
document
    .getElementById('start-btn')
    .addEventListener('click', function(){
        // Modify menu content
        document
            .getElementById('name1')
            .setAttribute('disabled', 'true');
        document
            .getElementById('name2')
            .setAttribute('disabled', 'true');
        document
            .getElementById('start-btn')
            .setAttribute('disabled', 'true');
        document
            .getElementById('reset-btn')
            .removeAttribute('disabled');
        document
            .getElementById('undo-btn')
            .removeAttribute('disabled');
        console.log("Let's start the game!");
        // Init game
        player_1 = document.getElementById("name1").value;
        player_2 = document.getElementById("name2").value;
        document
            .getElementById('player_playing')
            .innerHTML = player_1 + ", this is your turn!";
        let game_state = {curr_turn: 1, player_1_moves:[], player_2_moves:[]};
        let boxes = document.getElementsByClassName('box');
        for (let i = 0; i < boxes.length; i++){
            boxes[i].addEventListener("click", function(){
                update(i, game_state);
            });
        }
    });

// Functions
function update(id, game_state) {
    if (game_state.curr_turn % 2 !== 0) {
        document
            .getElementById(id)
            .innerHTML = 'X';
        game_state.curr_turn ++;
        game_state.player_1_moves.push(id);
        // checkMoves(1, game_state.player_1_moves);
        turn(2);
    } else {
        document
            .getElementById(id)
            .innerHTML = 'O';
        game_state.curr_turn++;
        game_state.player_2_moves.push(id);
        // checkMoves(2, game_state.player_2_moves);
        turn(1);
    }
    checkMoves(1, game_state.player_1_moves);
    checkMoves(2, game_state.player_2_moves);
    // console.log(game_state.player_2_moves);
}

function turn(player_num) {
    if (player_num === 1) {
        document
            .getElementById("player_playing")
            .innerHTML = player_1 + ", this is your turn!";
    }else{
        document
            .getElementById("player_playing")
            .innerHTML = player_2 + ", this is your turn!";
    }
}

function checkMoves(player_num, moves_arr){
    if( moves_arr.includes(0) & moves_arr.includes(1) & moves_arr.includes(2)||
        moves_arr.includes(3) & moves_arr.includes(4) & moves_arr.includes(5) ||
        moves_arr.includes(6) & moves_arr.includes(7) & moves_arr.includes(8) ||
        moves_arr.includes(0) & moves_arr.includes(3) & moves_arr.includes(6) ||
        moves_arr.includes(1) & moves_arr.includes(4) & moves_arr.includes(7) ||
        moves_arr.includes(2) & moves_arr.includes(5) & moves_arr.includes(8) ||
        moves_arr.includes(0) & moves_arr.includes(4) & moves_arr.includes(8) ||
        moves_arr.includes(2) & moves_arr.includes(4) & moves_arr.includes(6)){

        if (player_num ===1){
            // let mess = player_1 + ''
            alert(player_1 + ' won!');
        }else{
            alert(player_2 +' won!')
        }
    }
}